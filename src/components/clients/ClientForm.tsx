import React from 'react';
import { Client } from '../../types';
import { AddressForm } from './AddressForm';

interface ClientFormProps {
  onSubmit: (client: Client) => void;
}

const emptyAddress = {
  street: '',
  city: '',
  postalCode: '',
  country: 'France',
};

export function ClientForm({ onSubmit }: ClientFormProps) {
  const [client, setClient] = React.useState<Client>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mainAddress: { ...emptyAddress },
    siteAddress: { ...emptyAddress },
  });

  const [useSameAddress, setUseSameAddress] = React.useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...client,
      siteAddress: useSameAddress ? client.mainAddress : client.siteAddress,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              required
              value={client.firstName}
              onChange={(e) =>
                setClient({ ...client, firstName: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              required
              value={client.lastName}
              onChange={(e) =>
                setClient({ ...client, lastName: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              value={client.email}
              onChange={(e) => setClient({ ...client, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              type="tel"
              required
              value={client.phone}
              onChange={(e) => setClient({ ...client, phone: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <AddressForm
          value={client.mainAddress}
          onChange={(address) => setClient({ ...client, mainAddress: address })}
          label="Adresse principale"
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            id="same-address"
            checked={useSameAddress}
            onChange={(e) => setUseSameAddress(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label
            htmlFor="same-address"
            className="ml-2 block text-sm text-gray-900"
          >
            L'adresse du chantier est identique à l'adresse principale
          </label>
        </div>

        {!useSameAddress && (
          <AddressForm
            value={client.siteAddress}
            onChange={(address) =>
              setClient({ ...client, siteAddress: address })
            }
            label="Adresse du chantier"
          />
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Enregistrer le client
        </button>
      </div>
    </form>
  );
}