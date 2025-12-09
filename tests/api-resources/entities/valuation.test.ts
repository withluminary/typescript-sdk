// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Withluminary from 'withluminary';

const client = new Withluminary({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource valuation', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.entities.valuation.create('id', {
      directly_held_assets: [
        {
          asset_class_id: 'asset_class_01ARZ3NDEKTSV4RRFFQ69G5FAV',
          display_name: 'Apple Inc. Stock',
          value: 50000,
        },
      ],
      effective_date: '2024-01-15',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.entities.valuation.create('id', {
      directly_held_assets: [
        {
          asset_class_id: 'asset_class_01ARZ3NDEKTSV4RRFFQ69G5FAV',
          display_name: 'Apple Inc. Stock',
          value: 50000,
          external_id: 'AAPL-12345',
        },
      ],
      effective_date: '2024-01-15',
      description: 'description',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.entities.valuation.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
