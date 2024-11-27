import React from 'react';
import { useTranslation } from 'react-i18next';
import { CameraIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface PhotoUploadProps {
  photos: string[];
  onChange: (photos: string[]) => void;
  maxPhotos?: number;
}

export function PhotoUpload({ photos, onChange, maxPhotos = 3 }: PhotoUploadProps) {
  const { t } = useTranslation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newPhotos = files.map(file => URL.createObjectURL(file));
    onChange([...photos, ...newPhotos].slice(0, maxPhotos));
  };

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    onChange(newPhotos);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <CameraIcon className="w-5 h-5" />
          {t('media.photos.title')}
        </h3>
        <span className="text-sm text-gray-500">
          {t('media.photos.count', { current: photos.length, max: maxPhotos })}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => removePhoto(index)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <XMarkIcon className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        ))}
        
        {photos.length < maxPhotos && (
          <label className="relative aspect-square cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="sr-only"
              multiple
            />
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-indigo-500">
              <CameraIcon className="w-8 h-8 text-gray-400" />
            </div>
          </label>
        )}
      </div>
    </div>
  );
}