// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentSummariesAPI from '../document-summaries';
import * as ValuationAPI from './valuation';
import { Valuation, ValuationCreateParams, ValuationResource } from './valuation';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Entities extends APIResource {
  valuation: ValuationAPI.ValuationResource = new ValuationAPI.ValuationResource(this._client);

  /**
   * Retrieve detailed information about a specific entity
   *
   * @example
   * ```ts
   * const entity = await client.entities.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Entity> {
    return this._client.get(path`/entities/${id}`, options);
  }

  /**
   * Retrieve a paginated list of entities (trusts, businesses, accounts, etc.) using
   * cursor-based pagination
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entity of client.entities.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntitiesCursorPagination, Entity> {
    return this._client.getAPIList('/entities', CursorPagination<Entity>, { query, ...options });
  }

  /**
   * Delete an entity and all of it's related data
   *
   * @example
   * ```ts
   * await client.entities.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/entities/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EntitiesCursorPagination = CursorPagination<Entity>;

export interface Entity {
  /**
   * Unique identifier with entity\_ prefix
   */
  id: string;

  /**
   * Timestamp when the entity was created
   */
  created_at: string;

  /**
   * Display name of the entity
   */
  display_name: string;

  /**
   * Household ID this entity belongs to
   */
  household_id: string;

  /**
   * Type of entity - determines the specific subtype and applicable fields
   */
  kind: EntityKind;

  /**
   * Lifecycle stage of the entity
   */
  stage:
    | 'PRE_CREATED'
    | 'AI_CREATING'
    | 'AI_CREATION_FAILED'
    | 'AI_NEEDS_REVIEW'
    | 'DRAFT'
    | 'READY_FOR_PROPOSAL'
    | 'IMPLEMENTATION'
    | 'ACTIVE'
    | 'COMPLETED'
    | 'ARCHIVED';

  /**
   * Timestamp when the entity was last updated
   */
  updated_at: string;
}

/**
 * Type of entity - determines the specific subtype and applicable fields
 */
export type EntityKind =
  | 'REVOCABLE_TRUST'
  | 'IRREVOCABLE_TRUST'
  | 'SLAT_TRUST'
  | 'ILIT_TRUST'
  | 'QPRT_TRUST'
  | 'GRAT_TRUST'
  | 'CRT_TRUST'
  | 'CLT_TRUST'
  | 'INDIVIDUAL_PERSONAL_ACCOUNT'
  | 'JOINT_PERSONAL_ACCOUNT'
  | 'CUSTODIAL_PERSONAL_ACCOUNT'
  | 'INSURANCE_PERSONAL_ACCOUNT'
  | 'QUALIFIED_TUITION_PERSONAL_ACCOUNT'
  | 'RETIREMENT_PERSONAL_ACCOUNT'
  | 'DONOR_ADVISED_FUND'
  | 'PRIVATE_FOUNDATION'
  | 'LLC_BUSINESS_ENTITY'
  | 'LP_BUSINESS_ENTITY'
  | 'GP_BUSINESS_ENTITY'
  | 'SOLE_PROPRIETORSHIP_BUSINESS_ENTITY'
  | 'SCORP_BUSINESS_ENTITY'
  | 'CCORP_BUSINESS_ENTITY';

export interface EntityList {
  data: Array<Entity>;

  page_info: DocumentSummariesAPI.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

export interface EntityListParams extends CursorPaginationParams {
  /**
   * Filter entities by household ID
   */
  household_id?: string;

  /**
   * Filter by entity kind/type
   */
  kind?: EntityKind;
}

Entities.ValuationResource = ValuationResource;

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntityKind as EntityKind,
    type EntityList as EntityList,
    type EntitiesCursorPagination as EntitiesCursorPagination,
    type EntityListParams as EntityListParams,
  };

  export {
    ValuationResource as ValuationResource,
    type Valuation as Valuation,
    type ValuationCreateParams as ValuationCreateParams,
  };
}
