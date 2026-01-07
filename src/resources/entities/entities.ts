// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ValuationAPI from './valuation';
import { Valuation, ValuationCreateParams, ValuationResource } from './valuation';
import { APIPromise } from '../../core/api-promise';
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
   * const entityList = await client.entities.list();
   * ```
   */
  list(query: EntityListParams | null | undefined = {}, options?: RequestOptions): APIPromise<EntityList> {
    return this._client.get('/entities', { query, ...options });
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

  page_info: EntityList.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

export namespace EntityList {
  export interface PageInfo {
    /**
     * When paginating forwards, are there more items?
     */
    has_next_page: boolean;

    /**
     * When paginating backwards, are there more items?
     */
    has_previous_page: boolean;

    /**
     * Cursor pointing to the last item in the current page
     */
    end_cursor?: string | null;

    /**
     * Cursor pointing to the first item in the current page
     */
    start_cursor?: string | null;
  }
}

export interface EntityListParams {
  /**
   * Cursor for forward pagination. Returns items after this cursor.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Returns items before this cursor.
   */
  before?: string;

  /**
   * Filter entities by household ID
   */
  household_id?: string;

  /**
   * Filter by entity kind/type
   */
  kind?: EntityKind;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

Entities.ValuationResource = ValuationResource;

export declare namespace Entities {
  export {
    type Entity as Entity,
    type EntityKind as EntityKind,
    type EntityList as EntityList,
    type EntityListParams as EntityListParams,
  };

  export {
    ValuationResource as ValuationResource,
    type Valuation as Valuation,
    type ValuationCreateParams as ValuationCreateParams,
  };
}
