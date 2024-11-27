import { ComponentType, SVGProps } from 'react';

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mainAddress: Address;
  siteAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface JoineryType {
  id: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  schematicImage: string;
}

export interface Color {
  interior: string;
  exterior: string;
}

export interface Measurement {
  width: {
    top: number;
    bottom: number;
    final: number;
  };
  height: {
    left: number;
    right: number;
    final: number;
  };
  diagonals: {
    d1: number;
    d2: number;
  };
}

export interface Project {
  id: string;
  clientId: string;
  status: 'draft' | 'pending' | 'approved' | 'in_progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  items: JoineryItem[];
}

export interface JoineryItem {
  id: string;
  type: JoineryType;
  measurements: Measurement;
  color: {
    interior: string;
    exterior: string;
  };
  options: Option[];
  photos: string[];
  voiceNotes: string[];
  notes: string;
}

export interface Option {
  id: string;
  name: string;
  category: string;
  price: number;
}