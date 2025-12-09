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
   * Retrieve a paginated list of document summaries
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

export interface Pagination {
  /**
   * Number of items per page
   */
  limit: number;

  /**
   * Number of items skipped
   */
  offset: number;

  /**
   * Total number of items available
   */
  total: number;
}

export interface DocumentSummaryListResponse {
  data: Array<DocumentSummary>;

  pagination: Pagination;
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
   * Filter summaries by document ID
   */
  document_id?: string;

  /**
   * Filter summaries by household ID
   */
  household_id?: string;

  /**
   * Maximum number of summaries to return
   */
  limit?: number;

  /**
   * Number of summaries to skip
   */
  offset?: number;
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
    type Pagination as Pagination,
    type DocumentSummaryListResponse as DocumentSummaryListResponse,
    type DocumentSummaryUpdateParams as DocumentSummaryUpdateParams,
    type DocumentSummaryListParams as DocumentSummaryListParams,
    type DocumentSummaryDownloadParams as DocumentSummaryDownloadParams,
  };
}
