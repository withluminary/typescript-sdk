// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DocumentSummaries extends APIResource {
  /**
   * Retrieve a specific document summary
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DocumentSummary> {
    return this._client.get(path`/document-summaries/${id}`, options);
  }

  /**
   * Update an existing document summary
   */
  update(
    id: string,
    body: DocumentSummaryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentSummary> {
    return this._client.put(path`/document-summaries/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of document summaries using cursor-based pagination
   */
  list(
    query: DocumentSummaryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentSummaryListResponse> {
    return this._client.get('/document-summaries', { query, ...options });
  }

  /**
   * Download the document summary content in the specified format
   */
  download(
    id: string,
    query: DocumentSummaryDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/document-summaries/${id}/download`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface DocumentSummary {
  /**
   * Unique identifier for the document summary
   */
  id: string;

  /**
   * Timestamp when the summary was created
   */
  created_at: string;

  /**
   * Display name for the summary
   */
  display_name: string;

  /**
   * ID of the document this summary belongs to
   */
  document_id: string;

  /**
   * ID of the household this summary belongs to
   */
  household_id: string;

  /**
   * The summary text content
   */
  summary: string;

  /**
   * Timestamp when the summary was last updated
   */
  updated_at: string;

  /**
   * Indicates if the summary was AI-generated or user-entered
   */
  entry_mode?: DocumentSummaryEntryMode;

  /**
   * Format of the summary content
   */
  summary_format?: DocumentSummaryFormat;
}

/**
 * Indicates if the summary was AI-generated or user-entered
 */
export type DocumentSummaryEntryMode = 'AI_AUTO' | 'USER';

/**
 * Format of the summary content
 */
export type DocumentSummaryFormat = 'MARKDOWN' | 'PLAIN_TEXT';

export interface DocumentSummaryListResponse {
  data: Array<DocumentSummary>;

  page_info: DocumentSummaryListResponse.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

export namespace DocumentSummaryListResponse {
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

export interface DocumentSummaryUpdateParams {
  /**
   * Display name for the summary
   */
  display_name?: string;

  /**
   * Indicates if the summary was AI-generated or user-entered
   */
  entry_mode?: DocumentSummaryEntryMode;

  /**
   * The summary text content
   */
  summary?: string;

  /**
   * Format of the summary content
   */
  summary_format?: DocumentSummaryFormat;
}

export interface DocumentSummaryListParams {
  /**
   * Cursor for forward pagination. Returns items after this cursor.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Returns items before this cursor.
   */
  before?: string;

  /**
   * Filter summaries by document ID
   */
  document_id?: string;

  /**
   * Filter summaries by household ID
   */
  household_id?: string;

  /**
   * Maximum number of items to return
   */
  limit?: number;
}

export interface DocumentSummaryDownloadParams {
  /**
   * Output format for the download
   */
  format?: 'pdf';
}

export declare namespace DocumentSummaries {
  export {
    type DocumentSummary as DocumentSummary,
    type DocumentSummaryEntryMode as DocumentSummaryEntryMode,
    type DocumentSummaryFormat as DocumentSummaryFormat,
    type DocumentSummaryListResponse as DocumentSummaryListResponse,
    type DocumentSummaryUpdateParams as DocumentSummaryUpdateParams,
    type DocumentSummaryListParams as DocumentSummaryListParams,
    type DocumentSummaryDownloadParams as DocumentSummaryDownloadParams,
  };
}
