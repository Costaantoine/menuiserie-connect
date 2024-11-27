import React from 'react';
import { Address } from '../../types';

interface AddressFormProps {
  value: Address;
  onChange: (address: Address) => void;
  label?: string;
}

export function AddressForm({ value, onChange, label }: AddressFormProps) {
  const handleChange = (field: keyof Address, newValue: string) => {
    onChange({ ...value, [field]: newValue });
  };

  return (
    <div className="space-y-4">
      {label && (
        <h3 className="text-lg font-medium text-gray-900">{label}</h3>
      )}
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rue
          </label>
          <input
            type="text"
            value={value.street}
            onChange={(e) => handleChange('street', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ville
            </label>
            <input
              type="text"
              value={value.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Code postal
            </label>
            <input
              type="text"
              value={value.postalCode}
              onChange={(e) => handleChange('postalCode', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pays
          </label>
          <input
            type="text"
            value={value.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}