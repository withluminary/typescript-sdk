// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Withluminary } from '../client';

export abstract class APIResource {
  protected _client: Withluminary;

  constructor(client: Withluminary) {
    this._client = client;
  }
}
