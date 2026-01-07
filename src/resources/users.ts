// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieve detailed information about a specific user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Retrieve a paginated list of users using cursor-based pagination
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/users', { query, ...options });
  }
}

export interface UserRetrieveResponse {
  /**
   * Unique identifier with user\_ prefix
   */
  id: string;

  /**
   * Timestamp when the user was created
   */
  created_at: string;

  /**
   * Email address of the user
   */
  email: string;

  /**
   * First name of the user
   */
  first_name: string;

  /**
   * Last name of the user
   */
  last_name: string;

  /**
   * Timestamp when the user was last updated
   */
  updated_at: string;
}

export interface UserListResponse {
  data: Array<UserListResponse.Data>;

  page_info: UserListResponse.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

export namespace UserListResponse {
  export interface Data {
    /**
     * Unique identifier with user\_ prefix
     */
    id: string;

    /**
     * Timestamp when the user was created
     */
    created_at: string;

    /**
     * Email address of the user
     */
    email: string;

    /**
     * First name of the user
     */
    first_name: string;

    /**
     * Last name of the user
     */
    last_name: string;

    /**
     * Timestamp when the user was last updated
     */
    updated_at: string;
  }

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

export interface UserListParams {
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

export declare namespace Users {
  export {
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };
}
