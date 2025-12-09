// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Luminary } from '../client';

export abstract class APIResource {
  protected _client: Luminary;

  constructor(client: Luminary) {
    this._client = client;
  }
}
