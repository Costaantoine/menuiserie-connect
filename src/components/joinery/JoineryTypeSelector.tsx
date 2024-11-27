import React from 'react';
import { useTranslation } from 'react-i18next';
import { JoineryType } from '../../types';
import { JoineryTypeCard } from './JoineryTypeCard';
import { JOINERY_TYPES } from './joinery-types';

interface JoineryTypeSelectorProps {
  value?: string;
  onChange: (type: JoineryType) => void;
}

export function JoineryTypeSelector({ value, onChange }: JoineryTypeSelectorProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">
        {t('joinery.type')}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {JOINERY_TYPES.map((type) => (
          <JoineryTypeCard
            key={type.id}
            type={type}
            icon={type.icon}
            isSelected={value === type.id}
            onClick={() => onChange(type)}
          />
        ))}
      </div>
    </div>
  );
}