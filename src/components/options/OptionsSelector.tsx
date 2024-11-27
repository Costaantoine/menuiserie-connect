import React from 'react';
import { Option } from '../../types';
import { OPTIONS, OPTION_CATEGORIES } from '../../data/options';
import { CurrencyEuroIcon } from '@heroicons/react/24/outline';

interface OptionsSelectorProps {
  selectedOptions: Option[];
  onChange: (options: Option[]) => void;
}

export function OptionsSelector({ selectedOptions, onChange }: OptionsSelectorProps) {
  const handleOptionToggle = (option: Option) => {
    const isSelected = selectedOptions.some(o => o.id === option.id);
    if (isSelected) {
      onChange(selectedOptions.filter(o => o.id !== option.id));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  const getTotalPrice = () => {
    return selectedOptions.reduce((total, option) => total + option.price, 0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">Options et accessoires</h3>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <CurrencyEuroIcon className="w-5 h-5" />
          Total : {getTotalPrice()}€
        </div>
      </div>

      <div className="space-y-8">
        {OPTION_CATEGORIES.map(category => {
          const categoryOptions = OPTIONS.filter(o => o.category === category.id);
          
          return (
            <div key={category.id} className="space-y-4">
              <h4 className="font-medium text-gray-700">{category.name}</h4>
              <div className="grid gap-3">
                {categoryOptions.map(option => {
                  const isSelected = selectedOptions.some(o => o.id === option.id);
                  
                  return (
                    <label
                      key={option.id}
                      className={`
                        relative flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer
                        ${isSelected
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-200'
                        }
                      `}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleOptionToggle(option)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {option.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {option.price}€
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}