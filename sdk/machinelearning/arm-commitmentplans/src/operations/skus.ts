/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Skus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMLCommitmentPlansManagementClient } from "../azureMLCommitmentPlansManagementClient";
import {
  CatalogSku,
  SkusListOptionalParams,
  SkusListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Skus operations. */
export class SkusImpl implements Skus {
  private readonly client: AzureMLCommitmentPlansManagementClient;

  /**
   * Initialize a new instance of the class Skus class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMLCommitmentPlansManagementClient) {
    this.client = client;
  }

  /**
   * Lists the available commitment plan SKUs.
   * @param options The options parameters.
   */
  public list(
    options?: SkusListOptionalParams
  ): PagedAsyncIterableIterator<CatalogSku> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: SkusListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<CatalogSku[]> {
    let result: SkusListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: SkusListOptionalParams
  ): AsyncIterableIterator<CatalogSku> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the available commitment plan SKUs.
   * @param options The options parameters.
   */
  private _list(options?: SkusListOptionalParams): Promise<SkusListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
