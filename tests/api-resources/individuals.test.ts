// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Luminary from 'withluminary';

const client = new Luminary({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource individuals', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.individuals.create({
      first_name: 'John',
      household_id: 'household_01ARZ3NDEKTSV4RRFFQ69G5FAV',
      last_name: 'Smith',
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
    const response = await client.individuals.create({
      first_name: 'John',
      household_id: 'household_01ARZ3NDEKTSV4RRFFQ69G5FAV',
      last_name: 'Smith',
      address_line1: 'address_line1',
      address_line2: 'address_line2',
      city: 'city',
      country: 'country',
      date_of_birth: '2019-12-27',
      email: 'dev@stainless.com',
      is_beneficiary: true,
      is_deceased: true,
      is_grantor: true,
      is_primary: true,
      is_trustee: true,
      middle_name: 'middle_name',
      notes: 'notes',
      postal_code: 'postal_code',
      state: 'state',
      suffix: 'suffix',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.individuals.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.individuals.update('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.individuals.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.individuals.list(
        {
          after: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          before: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          household_id: 'household_id',
          is_primary: true,
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Luminary.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.individuals.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
