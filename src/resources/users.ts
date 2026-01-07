// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
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
  ): PagePromise<UsersCursorPagination, User> {
    return this._client.getAPIList('/users', CursorPagination<User>, { query, ...options });
  }
}

export type UsersCursorPagination = CursorPagination<User>;

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

export interface UserListParams extends CursorPaginationParams {}

export declare namespace Users {
  export {
    type User as User,
    type UsersCursorPagination as UsersCursorPagination,
    type UserListParams as UserListParams,
  };
}
