/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Operations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import {
  AmlOperation,
  OperationsListOptionalParams,
  OperationsListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * Lists all of the available Azure Machine Learning Workspaces REST API operations.
   * @param options The options parameters.
   */
  public list(
    options?: OperationsListOptionalParams
  ): PagedAsyncIterableIterator<AmlOperation> {
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
    options?: OperationsListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<AmlOperation[]> {
    let result: OperationsListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: OperationsListOptionalParams
  ): AsyncIterableIterator<AmlOperation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the available Azure Machine Learning Workspaces REST API operations.
   * @param options The options parameters.
   */
  private _list(
    options?: OperationsListOptionalParams
  ): Promise<OperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.MachineLearningServices/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AmlOperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
