// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentSummariesAPI from './document-summaries';
import { APIPromise } from '../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../core/pagination';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Create a new document with file content
   *
   * @example
   * ```ts
   * const document = await client.documents.create({
   *   file: fs.createReadStream('path/to/file'),
   *   household_id: 'household_01ARZ3NDEKTSV4RRFFQ69G5FAV',
   *   name: 'Trust Agreement.pdf',
   *   type: 'GRAT_DESIGN_SUMMARY',
   * });
   * ```
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<Document> {
    return this._client.post('/documents', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Retrieve document metadata
   *
   * @example
   * ```ts
   * const document = await client.documents.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Document> {
    return this._client.get(path`/documents/${id}`, options);
  }

  /**
   * Update document metadata only
   *
   * @example
   * ```ts
   * const document = await client.documents.update('id');
   * ```
   */
  update(id: string, body: DocumentUpdateParams, options?: RequestOptions): APIPromise<Document> {
    return this._client.put(path`/documents/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of documents using cursor-based pagination
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const document of client.documents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DocumentsCursorPagination, Document> {
    return this._client.getAPIList('/documents', CursorPagination<Document>, { query, ...options });
  }

  /**
   * Soft delete a document (marks as deleted but preserves data)
   *
   * @example
   * ```ts
   * await client.documents.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/documents/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Download the binary content of the document file
   *
   * @example
   * ```ts
   * const response = await client.documents.download('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/documents/${id}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve all summaries associated with a specific document
   *
   * @example
   * ```ts
   * const response = await client.documents.getSummaries('id');
   * ```
   */
  getSummaries(id: string, options?: RequestOptions): APIPromise<DocumentGetSummariesResponse> {
    return this._client.get(path`/documents/${id}/document-summaries`, options);
  }
}

export type DocumentsCursorPagination = CursorPagination<Document>;

export interface Document {
  /**
   * Unique identifier with document\_ prefix
   */
  id: string;

  /**
   * Timestamp when the document was created
   */
  created_at: string;

  /**
   * Household ID this document belongs to
   */
  household_id: string;

  /**
   * Display name of the document
   */
  name: string;

  /**
   * Type of document
   */
  type: DocumentType;

  /**
   * Timestamp when the document was last updated
   */
  updated_at: string;

  /**
   * Client profile ID if this document is associated with an individual
   */
  client_profile_id?: string | null;

  /**
   * Whether this document should be used for AI suggestions
   */
  enable_ai_suggestions?: boolean;

  /**
   * Entity ID if this document is owned by an entity
   */
  entity_id?: string | null;
}

export interface DocumentList {
  data: Array<Document>;

  page_info: DocumentSummariesAPI.PageInfo;

  /**
   * Total number of items matching the query (across all pages)
   */
  total_count: number;
}

/**
 * Type of document
 */
export type DocumentType =
  | 'GRAT_DESIGN_SUMMARY'
  | 'GENERATED_PRESENTATION'
  | 'ASSET_VALUATION'
  | 'SIGNED_TRUST_DOCUMENT'
  | 'TRUST_AMENDMENT'
  | 'TRANSFER_CONFIRMATION'
  | 'EXISTING_REMAINDER_TRUST_DOCUMENT'
  | 'BALANCE_SHEET'
  | 'WILL'
  | 'WILL_CODICIL'
  | 'POWER_OF_ATTORNEY'
  | 'ASSIGNMENT_OF_INTEREST'
  | 'ASSIGNMENT_OF_TANGIBLE_PROPERTY'
  | 'LOAN_NOTE_AGREEMENT'
  | 'ARTICLES_OF_INCORPORATION'
  | 'OPERATING_AGREEMENT'
  | 'PARTNERSHIP_AGREEMENT'
  | 'ACCOUNT_DOCUMENTATION_STATEMENT'
  | 'TAX_ID_CONFIRMATION'
  | 'GIFT_TAX_RETURN'
  | 'INCOME_TAX_RETURN'
  | 'TAX_RECEIPT'
  | 'TAX_FILING'
  | 'CORPORATE_BYLAWS'
  | 'LLC_AGREEMENT'
  | 'LLC_AGREEMENT_AMENDMENT'
  | 'OPERATING_AGREEMENT_AMENDMENT'
  | 'PARTNERSHIP_AGREEMENT_AMENDMENT'
  | 'SHAREHOLDERS_AGREEMENT'
  | 'STATE_BUSINESS_FILING'
  | 'LOGGED_CONTRIBUTION'
  | 'LOGGED_DISTRIBUTION'
  | 'INSURANCE_POLICY'
  | 'CRUMMEY_LETTER'
  | 'INSURANCE_PREMIUM_PAYMENT'
  | 'BENEFICIAL_OWNERSHIP_INFORMATION_REPORT'
  | 'FINCEN_FILING'
  | 'HEALTHCARE_PROXY'
  | 'LIVING_WILL'
  | 'DRIVERS_LICENSE'
  | 'PASSPORT'
  | 'DEED'
  | 'OTHER';

export interface DocumentGetSummariesResponse {
  data: Array<DocumentSummariesAPI.DocumentSummary>;
}

export interface DocumentCreateParams {
  /**
   * The document file to upload
   */
  file: Uploadable;

  /**
   * Household ID this document belongs to
   */
  household_id: string;

  /**
   * Display name of the document
   */
  name: string;

  /**
   * Type of document
   */
  type: DocumentType;

  /**
   * Client profile ID if associated with an individual
   */
  client_profile_id?: string;

  /**
   * Whether this document should be used for AI suggestions
   */
  enable_ai_suggestions?: boolean;

  /**
   * Entity ID if this document is owned by an entity
   */
  entity_id?: string;
}

export interface DocumentUpdateParams {
  /**
   * Client profile ID if associated with an individual
   */
  client_profile_id?: string | null;

  /**
   * Whether this document should be used for AI suggestions
   */
  enable_ai_suggestions?: boolean;

  /**
   * Entity ID if this document is owned by an entity
   */
  entity_id?: string | null;

  /**
   * Display name of the document
   */
  name?: string;

  /**
   * Type of document
   */
  type?: DocumentType;
}

export interface DocumentListParams extends CursorPaginationParams {
  /**
   * Filter documents by household ID
   */
  household_id?: string;

  /**
   * Filter by document type
   */
  type?: DocumentType;
}

export declare namespace Documents {
  export {
    type Document as Document,
    type DocumentList as DocumentList,
    type DocumentType as DocumentType,
    type DocumentGetSummariesResponse as DocumentGetSummariesResponse,
    type DocumentsCursorPagination as DocumentsCursorPagination,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentListParams as DocumentListParams,
  };
}
