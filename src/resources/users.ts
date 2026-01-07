// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentSummariesAPI from './document-summaries';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieve detailed information about a specific user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<User> {
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

export interface User {
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
  data: Array<User>;

  page_info: DocumentSummariesAPI.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
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
    type User as User,
    type UserListResponse as UserListResponse,
    type UserListParams as UserListParams,
  };
}
