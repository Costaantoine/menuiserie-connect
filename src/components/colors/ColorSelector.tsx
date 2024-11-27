import React from 'react';
import { useTranslation } from 'react-i18next';
import { SwatchIcon } from '@heroicons/react/24/outline';

interface ColorSelectorProps {
  interior: string;
  exterior: string;
  onChange: (colors: { interior: string; exterior: string }) => void;
}

const RAL_COLORS = [
  { code: '9016', name: 'Blanc signalisation', hex: '#F1F0EA' },
  { code: '7016', name: 'Gris anthracite', hex: '#383E42' },
  { code: '9005', name: 'Noir foncé', hex: '#0A0A0A' },
  { code: '1015', name: 'Ivoire clair', hex: '#E6D2B5' },
  { code: '7035', name: 'Gris clair', hex: '#D7D7D7' },
  { code: '8019', name: 'Brun gris', hex: '#403A3A' },
];

export function ColorSelector({ interior, exterior, onChange }: ColorSelectorProps) {
  const { t } = useTranslation();

  const handleColorChange = (type: 'interior' | 'exterior', color: string) => {
    onChange({
      interior: type === 'interior' ? color : interior,
      exterior: type === 'exterior' ? color : exterior,
    });
  };

  const ColorButton = ({ color, selected, onClick }: { 
    color: typeof RAL_COLORS[0], 
    selected: boolean,
    onClick: () => void 
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative p-1 rounded-lg border-2 transition-all duration-200
        ${selected 
          ? 'border-indigo-600' 
          : 'border-gray-200 hover:border-indigo-300'
        }
      `}
    >
      <div className="flex items-center gap-2 p-2">
        <div 
          className="w-8 h-8 rounded border border-gray-200" 
          style={{ backgroundColor: color.hex }}
        />
        <div className="text-left">
          <div className="text-sm font-medium text-gray-900">
            RAL {color.code}
          </div>
          <div className="text-xs text-gray-500">
            {color.name}
          </div>
        </div>
      </div>
    </button>
  );

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
        <SwatchIcon className="w-5 h-5" />
        {t('colors.title')}
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700">{t('colors.interior')}</h4>
          <div className="grid gap-3">
            {RAL_COLORS.map((color) => (
              <ColorButton
                key={color.code}
                color={color}
                selected={interior === color.code}
                onClick={() => handleColorChange('interior', color.code)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-700">{t('colors.exterior')}</h4>
          <div className="grid gap-3">
            {RAL_COLORS.map((color) => (
              <ColorButton
                key={color.code}
                color={color}
                selected={exterior === color.code}
                onClick={() => handleColorChange('exterior', color.code)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}