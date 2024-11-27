import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClientForm } from '../../components/clients/ClientForm';
import { Client } from '../../types';

export function NewClientPage() {
  const { t } = useTranslation();

  const handleSubmit = (client: Client) => {
    // TODO: Implement client creation logic
    console.log('New client:', client);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {t('common.newClient')}
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