// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentSummariesAPI from './document-summaries';
import * as DocumentsAPI from './documents';
import { DocumentsCursorPagination } from './documents';
import * as IndividualsAPI from './individuals';
import { IndividualsCursorPagination } from './individuals';
import * as EntitiesAPI from './entities/entities';
import { EntitiesCursorPagination } from './entities/entities';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const household of client.households.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: HouseholdListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HouseholdsCursorPagination, Household> {
    return this._client.getAPIList('/households', CursorPagination<Household>, { query, ...options });
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
   * // Automatically fetches more pages as needed.
   * for await (const document of client.households.listDocuments(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listDocuments(
    id: string,
    query: HouseholdListDocumentsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DocumentsCursorPagination, DocumentsAPI.Document> {
    return this._client.getAPIList(
      path`/households/${id}/documents`,
      CursorPagination<DocumentsAPI.Document>,
      { query, ...options },
    );
  }

  /**
   * Retrieve a paginated list of entities belonging to a specific household
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entity of client.households.listEntities(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listEntities(
    id: string,
    query: HouseholdListEntitiesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitiesCursorPagination, EntitiesAPI.Entity> {
    return this._client.getAPIList(path`/households/${id}/entities`, CursorPagination<EntitiesAPI.Entity>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a paginated list of client profiles/individuals belonging to a specific
   * household
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const individual of client.households.listIndividuals(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listIndividuals(
    id: string,
    query: HouseholdListIndividualsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IndividualsCursorPagination, IndividualsAPI.Individual> {
    return this._client.getAPIList(
      path`/households/${id}/individuals`,
      CursorPagination<IndividualsAPI.Individual>,
      { query, ...options },
    );
  }
}

export type HouseholdsCursorPagination = CursorPagination<Household>;

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

export interface HouseholdListParams extends CursorPaginationParams {}

export interface HouseholdListDocumentsParams extends CursorPaginationParams {
  /**
   * Filter by document type
   */
  type?: DocumentsAPI.DocumentType;
}

export interface HouseholdListEntitiesParams extends CursorPaginationParams {
  /**
   * Filter by entity kind/type
   */
  kind?: EntitiesAPI.EntityKind;
}

export interface HouseholdListIndividualsParams extends CursorPaginationParams {
  /**
   * Filter by primary client status
   */
  is_primary?: boolean;
}

export declare namespace Households {
  export {
    type Household as Household,
    type IndividualList as IndividualList,
    type HouseholdsCursorPagination as HouseholdsCursorPagination,
    type HouseholdCreateParams as HouseholdCreateParams,
    type HouseholdUpdateParams as HouseholdUpdateParams,
    type HouseholdListParams as HouseholdListParams,
    type HouseholdListDocumentsParams as HouseholdListDocumentsParams,
    type HouseholdListEntitiesParams as HouseholdListEntitiesParams,
    type HouseholdListIndividualsParams as HouseholdListIndividualsParams,
  };
}

export { type DocumentsCursorPagination, type EntitiesCursorPagination, type IndividualsCursorPagination };
