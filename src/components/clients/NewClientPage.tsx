import React from 'react';
import { Client } from '../../types';
import { ClientForm } from './ClientForm';

export function NewClientPage() {
  const handleSubmit = (client: Client) => {
    // TODO: Implement client creation logic
    console.log('New client:', client);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Nouveau client
          </h2>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <ClientForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}