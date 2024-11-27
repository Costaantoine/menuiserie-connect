import { Option } from '../types';

export const OPTIONS: Option[] = [
  // Serrures
  {
    id: 'lock-standard',
    name: 'Serrure standard',
    category: 'serrure',
    price: 45
  },
  {
    id: 'lock-security',
    name: 'Serrure de sécurité 3 points',
    category: 'serrure',
    price: 180
  },
  {
    id: 'lock-electronic',
    name: 'Serrure électronique',
    category: 'serrure',
    price: 350
  },

  // Poignées
  {
    id: 'handle-basic',
    name: 'Poignée standard',
    category: 'poignee',
    price: 25
  },
  {
    id: 'handle-design',
    name: 'Poignée design',
    category: 'poignee',
    price: 75
  },
  {
    id: 'handle-security',
    name: 'Poignée sécurité',
    category: 'poignee',
    price: 95
  },

  // Vitrage
  {
    id: 'glass-standard',
    name: 'Double vitrage standard',
    category: 'vitrage',
    price: 85
  },
  {
    id: 'glass-security',
    name: 'Double vitrage sécurité',
    category: 'vitrage',
    price: 150
  },
  {
    id: 'glass-acoustic',
    name: 'Double vitrage acoustique',
    category: 'vitrage',
    price: 180
  }
];

export const OPTION_CATEGORIES = [
  {
    id: 'serrure',
    name: 'Serrures'
  },
  {
    id: 'poignee',
    name: 'Poignées'
  },
  {
    id: 'vitrage',
    name: 'Vitrages'
  }
];