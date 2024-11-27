import React from 'react';
import { JoineryType } from '../../types';

interface JoineryTypeCardProps {
  type: JoineryType;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isSelected: boolean;
  onClick: () => void;
}

export function JoineryTypeCard({ type, icon: Icon, isSelected, onClick }: JoineryTypeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative p-4 rounded-lg border-2 transition-all duration-200
        ${isSelected 
          ? 'border-indigo-600 bg-indigo-50' 
          : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
        }
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <Icon className={`w-8 h-8 ${isSelected ? 'text-indigo-600' : 'text-gray-600'}`} />
        <span className={`text-sm font-medium ${isSelected ? 'text-indigo-900' : 'text-gray-900'}`}>
          {type.name}
        </span>
      </div>
    </button>
  );
}