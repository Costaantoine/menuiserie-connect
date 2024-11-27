import { HomeIcon, WindowIcon, ArrowsRightLeftIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import { JoineryType } from '../../types';

export interface JoineryTypeWithIcon extends JoineryType {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const JOINERY_TYPES: JoineryTypeWithIcon[] = [
  {
    id: 'door',
    name: 'Porte',
    icon: HomeIcon,
    schematicImage: '/schematics/door.svg'
  },
  {
    id: 'window',
    name: 'Fenêtre',
    icon: WindowIcon,
    schematicImage: '/schematics/window.svg'
  },
  {
    id: 'sliding',
    name: 'Coulissant',
    icon: ArrowsRightLeftIcon,
    schematicImage: '/schematics/sliding.svg'
  },
  {
    id: 'fixed',
    name: 'Fixe',
    icon: Square2StackIcon,
    schematicImage: '/schematics/fixed.svg'
  }
];