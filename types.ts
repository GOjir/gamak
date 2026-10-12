export interface MenuItem {
  id: string;
  name: string;
  nativeName?: string;
  category: string;
  description: string;
  price: number;
  isVegetarian: boolean;
  signature?: boolean;
  provenance?: string;
  cookingMethod?: string;
  portion?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  origin: string;
  shortDescription: string;
  details: string;
  flavorProfile: string;
  traditionalUse: string;
}

export interface CorporateInquiryDetails {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  techParkOrLocation: string;
  serviceType: 'daily_canteen' | 'live_counter' | 'pop_up' | 'bulk_meal_boxes' | 'executive_catering';
  headcount: string;
  approxDateOrStartDate: string;
  notes?: string;
}

