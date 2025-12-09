// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ValuationResource extends APIResource {
  /**
   * Add a new valuation to the entity's history
   *
   * @example
   * ```ts
   * const valuation = await client.entities.valuation.create(
   *   'id',
   *   {
   *     directly_held_assets: [
   *       {
   *         asset_class_id:
   *           'asset_class_01ARZ3NDEKTSV4RRFFQ69G5FAV',
   *         display_name: 'Apple Inc. Stock',
   *         value: 50000,
   *       },
   *     ],
   *     effective_date: '2024-01-15',
   *   },
   * );
   * ```
   */
  create(id: string, body: ValuationCreateParams, options?: RequestOptions): APIPromise<Valuation> {
    return this._client.post(path`/entities/${id}/valuation`, { body, ...options });
  }

  /**
   * Retrieve the most recent valuation with flattened asset values by type
   *
   * @example
   * ```ts
   * const valuation = await client.entities.valuation.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Valuation> {
    return this._client.get(path`/entities/${id}/valuation`, options);
  }
}

export interface Valuation {
  /**
   * Unique identifier with valuationv2\_ prefix
   */
  id: string;

  /**
   * Timestamp when the valuation was created
   */
  created_at: string;

  /**
   * Total value of all directly held assets in USD
   */
  directly_held_asset_value: number;

  /**
   * List of individual assets in this valuation
   */
  directly_held_assets: Array<Valuation.DirectlyHeldAsset>;

  /**
   * The date this valuation is effective
   */
  effective_date: string;

  /**
   * Entity ID this valuation belongs to
   */
  entity_id: string;

  /**
   * Total value of all assets minus liabilities in USD
   */
  total_value: number;

  /**
   * Timestamp when the valuation was last updated
   */
  updated_at: string;

  /**
   * Free-form notes about this valuation
   */
  description?: string | null;
}

export namespace Valuation {
  export interface DirectlyHeldAsset {
    /**
     * Asset ID
     */
    id: string;

    asset_class: DirectlyHeldAsset.AssetClass;

    /**
     * Display name of the asset
     */
    display_name: string;

    /**
     * Value of this asset in USD
     */
    value: number;

    /**
     * External ID from the static asset (if available)
     */
    external_id?: string | null;
  }

  export namespace DirectlyHeldAsset {
    export interface AssetClass {
      /**
       * Asset class ID
       */
      id: string;

      /**
       * Display name of the asset class
       */
      display_name: string;
    }
  }
}

export interface ValuationCreateParams {
  /**
   * List of assets to include in this valuation
   */
  directly_held_assets: Array<ValuationCreateParams.DirectlyHeldAsset>;

  /**
   * The date this valuation is effective
   */
  effective_date: string;

  /**
   * Free-form notes about this valuation
   */
  description?: string | null;
}

export namespace ValuationCreateParams {
  export interface DirectlyHeldAsset {
    /**
     * Asset class ID to associate with this asset
     */
    asset_class_id: string;

    /**
     * Display name of the asset
     */
    display_name: string;

    /**
     * Value of this asset in USD
     */
    value: number;

    /**
     * External ID for the asset
     */
    external_id?: string | null;
  }
}

export declare namespace ValuationResource {
  export { type Valuation as Valuation, type ValuationCreateParams as ValuationCreateParams };
}
