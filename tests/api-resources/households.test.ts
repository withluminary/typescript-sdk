// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Luminary from 'withluminary';

const client = new Luminary({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource households', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.households.create({
      primary_relationship_owner_id: 'user_01ARZ3NDEKTSV4RRFFQ69G5FAV',
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
    const response = await client.households.create({
      primary_relationship_owner_id: 'user_01ARZ3NDEKTSV4RRFFQ69G5FAV',
      notes: 'notes',
      primary_individuals: [
        {
          first_name: 'John',
          last_name: 'Smith',
          state: 'xx',
          address_line1: 'x',
          address_line2: 'x',
          city: 'x',
          country: 'x',
          date_of_birth: '2019-12-27',
          email: 'dev@stainless.com',
          is_beneficiary: true,
          is_deceased: true,
          is_trustee: true,
          middle_name: 'x',
          notes: 'notes',
          postal_code: 'x',
          suffix: 'x',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.households.retrieve('id');
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
    const responsePromise = client.households.update('id', {});
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
    const responsePromise = client.households.list();
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
      client.households.list(
        {
          after: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          before: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Luminary.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.households.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDocuments', async () => {
    const responsePromise = client.households.listDocuments('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listDocuments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.households.listDocuments(
        'id',
        {
          after: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          before: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          limit: 1,
          type: 'GRAT_DESIGN_SUMMARY',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Luminary.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listEntities', async () => {
    const responsePromise = client.households.listEntities('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listEntities: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.households.listEntities(
        'id',
        {
          after: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          before: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          kind: 'REVOCABLE_TRUST',
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Luminary.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listIndividuals', async () => {
    const responsePromise = client.households.listIndividuals('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listIndividuals: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.households.listIndividuals(
        'id',
        {
          after: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          before: 'eyJpZCI6ImhvdXNlaG9sZF8wMUFSWjNOREVLVFNWNFJSRkZRNjlHNUZBViJ9',
          is_primary: true,
          limit: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Luminary.NotFoundError);
  });
});
