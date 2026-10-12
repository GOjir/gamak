import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

const saveHeroPlugin = {
  name: 'save-hero-endpoint',
  configureServer(server: any) {
    server.middlewares.use('/api/save-hero', (req: any, res: any) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => { body += chunk; });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            let buffer: Buffer | null = null;
            if (data.image && typeof data.image === 'string') {
              if (data.image.startsWith('data:image')) {
                const base64Str = data.image.replace(/^data:image\/\w+;base64,/, '');
                buffer = Buffer.from(base64Str, 'base64');
              } else if (data.image.startsWith('http')) {
                const response = await fetch(data.image);
                const arrayBuffer = await response.arrayBuffer();
                buffer = Buffer.from(arrayBuffer);
              }
            }
            if (buffer) {
              const targetPath = path.resolve(__dirname, 'public/hero.jpg');
              fs.writeFileSync(targetPath, buffer);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
              return;
            }
          } catch (e) {
            console.error('Error saving hero image:', e);
          }
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false }));
        });
      } else {
        res.writeHead(405);
        res.end();
      }
    });
  },
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), saveHeroPlugin],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
