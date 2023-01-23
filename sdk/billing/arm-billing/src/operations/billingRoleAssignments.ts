/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BillingRoleAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  BillingRoleAssignment,
  BillingRoleAssignmentsListByBillingAccountNextOptionalParams,
  BillingRoleAssignmentsListByBillingAccountOptionalParams,
  BillingRoleAssignmentsListByBillingAccountResponse,
  BillingRoleAssignmentsListByInvoiceSectionNextOptionalParams,
  BillingRoleAssignmentsListByInvoiceSectionOptionalParams,
  BillingRoleAssignmentsListByInvoiceSectionResponse,
  BillingRoleAssignmentsListByBillingProfileNextOptionalParams,
  BillingRoleAssignmentsListByBillingProfileOptionalParams,
  BillingRoleAssignmentsListByBillingProfileResponse,
  BillingRoleAssignmentsGetByBillingAccountOptionalParams,
  BillingRoleAssignmentsGetByBillingAccountResponse,
  BillingRoleAssignmentsDeleteByBillingAccountOptionalParams,
  BillingRoleAssignmentsDeleteByBillingAccountResponse,
  BillingRoleAssignmentsGetByInvoiceSectionOptionalParams,
  BillingRoleAssignmentsGetByInvoiceSectionResponse,
  BillingRoleAssignmentsDeleteByInvoiceSectionOptionalParams,
  BillingRoleAssignmentsDeleteByInvoiceSectionResponse,
  BillingRoleAssignmentsGetByBillingProfileOptionalParams,
  BillingRoleAssignmentsGetByBillingProfileResponse,
  BillingRoleAssignmentsDeleteByBillingProfileOptionalParams,
  BillingRoleAssignmentsDeleteByBillingProfileResponse,
  BillingRoleAssignmentsListByBillingAccountNextResponse,
  BillingRoleAssignmentsListByInvoiceSectionNextResponse,
  BillingRoleAssignmentsListByBillingProfileNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingRoleAssignments operations. */
export class BillingRoleAssignmentsImpl implements BillingRoleAssignments {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingRoleAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the role assignments for the caller on a billing account. The operation is supported for
   * billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: BillingRoleAssignmentsListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<BillingRoleAssignment> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: BillingRoleAssignmentsListByBillingAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingRoleAssignment[]> {
    let result: BillingRoleAssignmentsListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: BillingRoleAssignmentsListByBillingAccountOptionalParams
  ): AsyncIterableIterator<BillingRoleAssignment> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the role assignments for the caller on an invoice section. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  public listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRoleAssignmentsListByInvoiceSectionOptionalParams
  ): PagedAsyncIterableIterator<BillingRoleAssignment> {
    const iter = this.listByInvoiceSectionPagingAll(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByInvoiceSectionPagingPage(
          billingAccountName,
          billingProfileName,
          invoiceSectionName,
          options,
          settings
        );
      }
    };
  }

  private async *listByInvoiceSectionPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRoleAssignmentsListByInvoiceSectionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingRoleAssignment[]> {
    let result: BillingRoleAssignmentsListByInvoiceSectionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInvoiceSection(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInvoiceSectionNext(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInvoiceSectionPagingAll(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRoleAssignmentsListByInvoiceSectionOptionalParams
  ): AsyncIterableIterator<BillingRoleAssignment> {
    for await (const page of this.listByInvoiceSectionPagingPage(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the role assignments for the caller on a billing profile. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRoleAssignmentsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<BillingRoleAssignment> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountName,
      billingProfileName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByBillingProfilePagingPage(
          billingAccountName,
          billingProfileName,
          options,
          settings
        );
      }
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRoleAssignmentsListByBillingProfileOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BillingRoleAssignment[]> {
    let result: BillingRoleAssignmentsListByBillingProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingProfile(
        billingAccountName,
        billingProfileName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountName,
        billingProfileName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRoleAssignmentsListByBillingProfileOptionalParams
  ): AsyncIterableIterator<BillingRoleAssignment> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountName,
      billingProfileName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a role assignment for the caller on a billing account. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingRoleAssignmentName The ID that uniquely identifies a role assignment.
   * @param options The options parameters.
   */
  getByBillingAccount(
    billingAccountName: string,
    billingRoleAssignmentName: string,
    options?: BillingRoleAssignmentsGetByBillingAccountOptionalParams
  ): Promise<BillingRoleAssignmentsGetByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingRoleAssignmentName, options },
      getByBillingAccountOperationSpec
    );
  }

  /**
   * Deletes a role assignment for the caller on a billing account. The operation is supported for
   * billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingRoleAssignmentName The ID that uniquely identifies a role assignment.
   * @param options The options parameters.
   */
  deleteByBillingAccount(
    billingAccountName: string,
    billingRoleAssignmentName: string,
    options?: BillingRoleAssignmentsDeleteByBillingAccountOptionalParams
  ): Promise<BillingRoleAssignmentsDeleteByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingRoleAssignmentName, options },
      deleteByBillingAccountOperationSpec
    );
  }

  /**
   * Gets a role assignment for the caller on an invoice section. The operation is supported for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param billingRoleAssignmentName The ID that uniquely identifies a role assignment.
   * @param options The options parameters.
   */
  getByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    billingRoleAssignmentName: string,
    options?: BillingRoleAssignmentsGetByInvoiceSectionOptionalParams
  ): Promise<BillingRoleAssignmentsGetByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        billingRoleAssignmentName,
        options
      },
      getByInvoiceSectionOperationSpec
    );
  }

  /**
   * Deletes a role assignment for the caller on an invoice section. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param billingRoleAssignmentName The ID that uniquely identifies a role assignment.
   * @param options The options parameters.
   */
  deleteByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    billingRoleAssignmentName: string,
    options?: BillingRoleAssignmentsDeleteByInvoiceSectionOptionalParams
  ): Promise<BillingRoleAssignmentsDeleteByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        billingRoleAssignmentName,
        options
      },
      deleteByInvoiceSectionOperationSpec
    );
  }

  /**
   * Gets a role assignment for the caller on a billing profile. The operation is supported for billing
   * accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param billingRoleAssignmentName The ID that uniquely identifies a role assignment.
   * @param options The options parameters.
   */
  getByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    billingRoleAssignmentName: string,
    options?: BillingRoleAssignmentsGetByBillingProfileOptionalParams
  ): Promise<BillingRoleAssignmentsGetByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        billingRoleAssignmentName,
        options
      },
      getByBillingProfileOperationSpec
    );
  }

  /**
   * Deletes a role assignment for the caller on a billing profile. The operation is supported for
   * billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param billingRoleAssignmentName The ID that uniquely identifies a role assignment.
   * @param options The options parameters.
   */
  deleteByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    billingRoleAssignmentName: string,
    options?: BillingRoleAssignmentsDeleteByBillingProfileOptionalParams
  ): Promise<BillingRoleAssignmentsDeleteByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        billingRoleAssignmentName,
        options
      },
      deleteByBillingProfileOperationSpec
    );
  }

  /**
   * Lists the role assignments for the caller on a billing account. The operation is supported for
   * billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: BillingRoleAssignmentsListByBillingAccountOptionalParams
  ): Promise<BillingRoleAssignmentsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec
    );
  }

  /**
   * Lists the role assignments for the caller on an invoice section. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  private _listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRoleAssignmentsListByInvoiceSectionOptionalParams
  ): Promise<BillingRoleAssignmentsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      listByInvoiceSectionOperationSpec
    );
  }

  /**
   * Lists the role assignments for the caller on a billing profile. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRoleAssignmentsListByBillingProfileOptionalParams
  ): Promise<BillingRoleAssignmentsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      listByBillingProfileOperationSpec
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: BillingRoleAssignmentsListByBillingAccountNextOptionalParams
  ): Promise<BillingRoleAssignmentsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec
    );
  }

  /**
   * ListByInvoiceSectionNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param nextLink The nextLink from the previous successful call to the ListByInvoiceSection method.
   * @param options The options parameters.
   */
  private _listByInvoiceSectionNext(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    nextLink: string,
    options?: BillingRoleAssignmentsListByInvoiceSectionNextOptionalParams
  ): Promise<BillingRoleAssignmentsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        nextLink,
        options
      },
      listByInvoiceSectionNextOperationSpec
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountName: string,
    billingProfileName: string,
    nextLink: string,
    options?: BillingRoleAssignmentsListByBillingProfileNextOptionalParams
  ): Promise<BillingRoleAssignmentsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, nextLink, options },
      listByBillingProfileNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingRoleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingRoleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByInvoiceSectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments/{billingRoleAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.billingRoleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByInvoiceSectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments/{billingRoleAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
    Parameters.billingRoleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments/{billingRoleAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.billingRoleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments/{billingRoleAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.billingRoleAssignmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInvoiceSectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInvoiceSectionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRoleAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
