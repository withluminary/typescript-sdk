// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Individuals extends APIResource {
  /**
   * Create a new client profile/individual with the provided data
   *
   * @example
   * ```ts
   * const individual = await client.individuals.create({
   *   first_name: 'John',
   *   household_id: 'household_01ARZ3NDEKTSV4RRFFQ69G5FAV',
   *   last_name: 'Smith',
   * });
   * ```
   */
  create(body: IndividualCreateParams, options?: RequestOptions): APIPromise<Individual> {
    return this._client.post('/individuals', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific client profile
   *
   * @example
   * ```ts
   * const individual = await client.individuals.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Individual> {
    return this._client.get(path`/individuals/${id}`, options);
  }

  /**
   * Update an existing client profile with new data
   *
   * @example
   * ```ts
   * const individual = await client.individuals.update('id');
   * ```
   */
  update(id: string, body: IndividualUpdateParams, options?: RequestOptions): APIPromise<Individual> {
    return this._client.put(path`/individuals/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of client profiles/individuals using cursor-based
   * pagination
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const individual of client.individuals.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: IndividualListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IndividualsCursorPagination, Individual> {
    return this._client.getAPIList('/individuals', CursorPagination<Individual>, { query, ...options });
  }

  /**
   * Soft delete a client profile (marks as deleted but preserves data)
   *
   * @example
   * ```ts
   * await client.individuals.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/individuals/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type IndividualsCursorPagination = CursorPagination<Individual>;

export interface Individual {
  /**
   * Unique identifier with client*profile* prefix
   */
  id: string;

  /**
   * Timestamp when the individual was created
   */
  created_at: string;

  /**
   * First name of the individual
   */
  first_name: string;

  /**
   * Household ID this individual belongs to
   */
  household_id: string;

  /**
   * Whether this client profile should be an eligible beneficiary for entities and
   * gifts
   */
  is_beneficiary: boolean;

  /**
   * Whether this client profile is deceased
   */
  is_deceased: boolean;

  /**
   * Whether this client profile should be an eligible grantor/owner/other principal
   * for entities
   */
  is_grantor: boolean;

  /**
   * Whether this is one of the (at most) two primary clients on this household
   */
  is_primary: boolean;

  /**
   * Whether this client profile should be an eligible trustee for entities
   */
  is_trustee: boolean;

  /**
   * Last name of the individual
   */
  last_name: string;

  /**
   * Timestamp when the individual was last updated
   */
  updated_at: string;

  /**
   * Street address line 1 (from address edge)
   */
  address_line1?: string | null;

  /**
   * Street address line 2 (from address edge)
   */
  address_line2?: string | null;

  /**
   * City (from address edge)
   */
  city?: string | null;

  /**
   * Country (from address edge)
   */
  country?: string | null;

  /**
   * Date of birth (encrypted field)
   */
  date_of_birth?: string | null;

  /**
   * Date of death if applicable (encrypted field)
   */
  date_of_death?: string | null;

  /**
   * Timestamp when the individual was soft deleted
   */
  deleted_at?: string | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * Middle name of the individual
   */
  middle_name?: string | null;

  /**
   * Notes about the client profile
   */
  notes?: string | null;

  /**
   * ZIP or postal code (from address edge)
   */
  postal_code?: string | null;

  /**
   * State or province (from address edge)
   */
  state?: string | null;

  /**
   * Name suffix (Jr., Sr., III, etc.)
   */
  suffix?: string | null;
}

export interface IndividualCreateParams {
  /**
   * First name of the individual
   */
  first_name: string;

  /**
   * Household ID this individual belongs to
   */
  household_id: string;

  /**
   * Last name of the individual
   */
  last_name: string;

  /**
   * Street address line 1
   */
  address_line1?: string | null;

  /**
   * Street address line 2
   */
  address_line2?: string | null;

  /**
   * City
   */
  city?: string | null;

  /**
   * Country
   */
  country?: string | null;

  /**
   * Date of birth
   */
  date_of_birth?: string | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * Whether this client profile should be an eligible beneficiary for entities and
   * gifts
   */
  is_beneficiary?: boolean;

  /**
   * Whether the individual is deceased
   */
  is_deceased?: boolean;

  /**
   * Whether this client profile should be an eligible grantor/owner/other principal
   * for entities
   */
  is_grantor?: boolean;

  /**
   * Whether this is a primary client of the household (at most 2 per household)
   */
  is_primary?: boolean;

  /**
   * Whether this client profile should be an eligible trustee for entities
   */
  is_trustee?: boolean;

  /**
   * Middle name of the individual
   */
  middle_name?: string | null;

  /**
   * Notes about the client profile
   */
  notes?: string | null;

  /**
   * ZIP or postal code
   */
  postal_code?: string | null;

  /**
   * State or province
   */
  state?: string | null;

  /**
   * Name suffix
   */
  suffix?: string | null;
}

export interface IndividualUpdateParams {
  /**
   * Street address line 1
   */
  address_line1?: string | null;

  /**
   * Street address line 2
   */
  address_line2?: string | null;

  /**
   * City
   */
  city?: string | null;

  /**
   * Country
   */
  country?: string | null;

  /**
   * Date of birth
   */
  date_of_birth?: string | null;

  /**
   * Date of death if applicable
   */
  date_of_death?: string | null;

  /**
   * Email address
   */
  email?: string | null;

  /**
   * First name of the individual
   */
  first_name?: string;

  /**
   * Whether this client profile should be an eligible beneficiary for entities and
   * gifts
   */
  is_beneficiary?: boolean;

  /**
   * Whether the individual is deceased
   */
  is_deceased?: boolean;

  /**
   * Whether this client profile should be an eligible grantor/owner/other principal
   * for entities
   */
  is_grantor?: boolean;

  /**
   * Whether this is a primary client of the household (at most 2 per household)
   */
  is_primary?: boolean;

  /**
   * Whether this client profile should be an eligible trustee for entities
   */
  is_trustee?: boolean;

  /**
   * Last name of the individual
   */
  last_name?: string;

  /**
   * Middle name of the individual
   */
  middle_name?: string | null;

  /**
   * Notes about the client profile
   */
  notes?: string | null;

  /**
   * ZIP or postal code
   */
  postal_code?: string | null;

  /**
   * State or province
   */
  state?: string | null;

  /**
   * Name suffix
   */
  suffix?: string | null;
}

export interface IndividualListParams extends CursorPaginationParams {
  /**
   * Filter individuals by household ID
   */
  household_id?: string;

  /**
   * Filter by primary client status
   */
  is_primary?: boolean;
}

export declare namespace Individuals {
  export {
    type Individual as Individual,
    type IndividualsCursorPagination as IndividualsCursorPagination,
    type IndividualCreateParams as IndividualCreateParams,
    type IndividualUpdateParams as IndividualUpdateParams,
    type IndividualListParams as IndividualListParams,
  };
}
