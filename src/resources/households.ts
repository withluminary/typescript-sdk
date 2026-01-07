// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentSummariesAPI from './document-summaries';
import * as DocumentsAPI from './documents';
import * as IndividualsAPI from './individuals';
import * as EntitiesAPI from './entities/entities';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Households extends APIResource {
  /**
   * Create a new household with the provided data
   *
   * @example
   * ```ts
   * const household = await client.households.create({
   *   primary_relationship_owner_id:
   *     'user_01ARZ3NDEKTSV4RRFFQ69G5FAV',
   * });
   * ```
   */
  create(body: HouseholdCreateParams, options?: RequestOptions): APIPromise<Household> {
    return this._client.post('/households', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific household
   *
   * @example
   * ```ts
   * const household = await client.households.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Household> {
    return this._client.get(path`/households/${id}`, options);
  }

  /**
   * Update an existing household with new data
   *
   * @example
   * ```ts
   * const household = await client.households.update('id');
   * ```
   */
  update(id: string, body: HouseholdUpdateParams, options?: RequestOptions): APIPromise<Household> {
    return this._client.put(path`/households/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of households using cursor-based pagination
   *
   * @example
   * ```ts
   * const households = await client.households.list();
   * ```
   */
  list(
    query: HouseholdListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HouseholdListResponse> {
    return this._client.get('/households', { query, ...options });
  }

  /**
   * Soft delete a household (marks as deleted but preserves data)
   *
   * @example
   * ```ts
   * await client.households.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/households/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a paginated list of documents belonging to a specific household
   *
   * @example
   * ```ts
   * const documentList = await client.households.listDocuments(
   *   'id',
   * );
   * ```
   */
  listDocuments(
    id: string,
    query: HouseholdListDocumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentsAPI.DocumentList> {
    return this._client.get(path`/households/${id}/documents`, { query, ...options });
  }

  /**
   * Retrieve a paginated list of entities belonging to a specific household
   *
   * @example
   * ```ts
   * const entityList = await client.households.listEntities(
   *   'id',
   * );
   * ```
   */
  listEntities(
    id: string,
    query: HouseholdListEntitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntitiesAPI.EntityList> {
    return this._client.get(path`/households/${id}/entities`, { query, ...options });
  }

  /**
   * Retrieve a paginated list of client profiles/individuals belonging to a specific
   * household
   *
   * @example
   * ```ts
   * const individualList =
   *   await client.households.listIndividuals('id');
   * ```
   */
  listIndividuals(
    id: string,
    query: HouseholdListIndividualsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndividualList> {
    return this._client.get(path`/households/${id}/individuals`, { query, ...options });
  }
}

export interface Household {
  /**
   * Unique identifier with household\_ prefix
   */
  id: string;

  /**
   * Timestamp when the household was created
   */
  created_at: string;

  /**
   * User ID of the primary relationship owner
   */
  primary_relationship_owner_id: string;

  /**
   * Timestamp when the household was last updated
   */
  updated_at: string;

  /**
   * Display name for the household
   */
  name?: string;

  /**
   * Notes about the household
   */
  notes?: string | null;

  /**
   * Primary client profiles for this household (at most 2)
   */
  primary_individuals?: Array<IndividualsAPI.Individual>;
}

export interface IndividualList {
  data: Array<IndividualsAPI.Individual>;

  page_info: DocumentSummariesAPI.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

export interface HouseholdListResponse {
  data: Array<Household>;

  page_info: DocumentSummariesAPI.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

export interface HouseholdCreateParams {
  /**
   * User ID of the primary relationship owner
   */
  primary_relationship_owner_id: string;

  /**
   * Optional notes about the household
   */
  notes?: string | null;

  /**
   * Primary client profiles to create for this household (at most 2)
   */
  primary_individuals?: Array<HouseholdCreateParams.PrimaryIndividual>;
}

export namespace HouseholdCreateParams {
  export interface PrimaryIndividual {
    /**
     * First name of the individual
     */
    first_name: string;

    /**
     * Last name of the individual
     */
    last_name: string;

    /**
     * State or province
     */
    state: string;

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
     * Name suffix
     */
    suffix?: string | null;
  }
}

export interface HouseholdUpdateParams {
  /**
   * Notes about the household
   */
  notes?: string | null;

  /**
   * User ID of the primary relationship owner
   */
  primary_relationship_owner_id?: string;
}

export interface HouseholdListParams {
  /**
   * Cursor for forward pagination. Returns items after this cursor.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Returns items before this cursor.
   */
  before?: string;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export interface HouseholdListDocumentsParams {
  /**
   * Cursor for forward pagination. Returns items after this cursor.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Returns items before this cursor.
   */
  before?: string;

  /**
   * Maximum number of items to return
   */
  limit?: number;

  /**
   * Filter by document type
   */
  type?: DocumentsAPI.DocumentType;
}

export interface HouseholdListEntitiesParams {
  /**
   * Cursor for forward pagination. Returns items after this cursor.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Returns items before this cursor.
   */
  before?: string;

  /**
   * Filter by entity kind/type
   */
  kind?: EntitiesAPI.EntityKind;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export interface HouseholdListIndividualsParams {
  /**
   * Cursor for forward pagination. Returns items after this cursor.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Returns items before this cursor.
   */
  before?: string;

  /**
   * Filter by primary client status
   */
  is_primary?: boolean;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export declare namespace Households {
  export {
    type Household as Household,
    type IndividualList as IndividualList,
    type HouseholdListResponse as HouseholdListResponse,
    type HouseholdCreateParams as HouseholdCreateParams,
    type HouseholdUpdateParams as HouseholdUpdateParams,
    type HouseholdListParams as HouseholdListParams,
    type HouseholdListDocumentsParams as HouseholdListDocumentsParams,
    type HouseholdListEntitiesParams as HouseholdListEntitiesParams,
    type HouseholdListIndividualsParams as HouseholdListIndividualsParams,
  };
}
