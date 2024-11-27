import React from 'react';
import { useTranslation } from 'react-i18next';
import { Ruler } from '@heroicons/react/24/outline';
import { Measurement } from '../../types';

interface MeasurementInputProps {
  value: Measurement;
  onChange: (measurement: Measurement) => void;
}

const defaultMeasurement: Measurement = {
  width: { top: 0, bottom: 0, final: 0 },
  height: { left: 0, right: 0, final: 0 },
  diagonals: { d1: 0, d2: 0 }
};

export function MeasurementInput({ value = defaultMeasurement, onChange }: MeasurementInputProps) {
  const { t } = useTranslation();

  const handleWidthChange = (position: 'top' | 'bottom', newValue: number) => {
    const width = { ...value.width, [position]: newValue };
    width.final = Math.min(width.top, width.bottom);
    onChange({ ...value, width });
  };

  const handleHeightChange = (position: 'left' | 'right', newValue: number) => {
    const height = { ...value.height, [position]: newValue };
    height.final = Math.min(height.left, height.right);
    onChange({ ...value, height });
  };

  const handleDiagonalChange = (diagonal: 'd1' | 'd2', newValue: number) => {
    const diagonals = { ...value.diagonals, [diagonal]: newValue };
    onChange({ ...value, diagonals });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
        <Ruler className="w-5 h-5" />
        {t('joinery.measurements')}
      </h3>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700">{t('joinery.width.label')}</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">{t('joinery.width.top')}</label>
              <input
                type="number"
                value={value.width.top || ''}
                onChange={(e) => handleWidthChange('top', Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">{t('joinery.width.bottom')}</label>
              <input
                type="number"
                value={value.width.bottom || ''}
                onChange={(e) => handleWidthChange('bottom', Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0"
              />
            </div>
            <div className="pt-2 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-900">{t('joinery.width.final')}</label>
                <span className="text-sm text-gray-900">{value.width.final} mm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-700">{t('joinery.height.label')}</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">{t('joinery.height.left')}</label>
              <input
                type="number"
                value={value.height.left || ''}
                onChange={(e) => handleHeightChange('left', Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">{t('joinery.height.right')}</label>
              <input
                type="number"
                value={value.height.right || ''}
                onChange={(e) => handleHeightChange('right', Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="0"
              />
            </div>
            <div className="pt-2 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-900">{t('joinery.height.final')}</label>
                <span className="text-sm text-gray-900">{value.height.final} mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">{t('joinery.diagonals.label')}</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">{t('joinery.diagonals.d1')}</label>
            <input
              type="number"
              value={value.diagonals.d1 || ''}
              onChange={(e) => handleDiagonalChange('d1', Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">{t('joinery.diagonals.d2')}</label>
            <input
              type="number"
              value={value.diagonals.d2 || ''}
              onChange={(e) => handleDiagonalChange('d2', Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}