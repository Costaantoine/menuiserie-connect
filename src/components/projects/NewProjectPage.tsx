import React from 'react';
import { JoineryType, Measurement, Color } from '../../types';
import { JoineryTypeSelector } from '../joinery/JoineryTypeSelector';
import { MeasurementInput } from '../measurements/MeasurementInput';
import { ColorSelector } from '../colors/ColorSelector';

export function NewProjectPage() {
  const [selectedType, setSelectedType] = React.useState<JoineryType>();
  const [measurements, setMeasurements] = React.useState<Measurement>();
  const [colors, setColors] = React.useState<Color>({
    interior: '9016',
    exterior: '7016'
  });

  const handleTypeSelect = (type: JoineryType) => {
    setSelectedType(type);
    setMeasurements(undefined);
  };

  const handleNext = () => {
    console.log({
      type: selectedType,
      measurements,
      colors
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Nouveau projet
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <JoineryTypeSelector
              value={selectedType?.id}
              onChange={handleTypeSelect}
            />
          </div>
        </div>

        {selectedType && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <img
                    src={selectedType.schematicImage}
                    alt={`Schéma ${selectedType.name.toLowerCase()}`}
                    className="max-w-md mx-auto border border-gray-200 rounded-lg p-4"
                  />
                </div>
                <MeasurementInput
                  value={measurements || {
                    width: { top: 0, bottom: 0, final: 0 },
                    height: { left: 0, right: 0, final: 0 },
                    diagonals: { d1: 0, d2: 0 }
                  }}
                  onChange={setMeasurements}
                />
              </div>
            </div>
          </div>
        )}
        
        {measurements && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <ColorSelector
                interior={colors.interior}
                exterior={colors.exterior}
                onChange={setColors}
              />
            </div>
          </div>
        )}
        
        {measurements && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continuer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}