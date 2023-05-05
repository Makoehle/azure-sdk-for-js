/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClient } from "../desktopVirtualizationAPIClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByHostPoolNextOptionalParams,
  PrivateLinkResourcesListByHostPoolOptionalParams,
  PrivateLinkResourcesListByWorkspaceNextOptionalParams,
  PrivateLinkResourcesListByWorkspaceOptionalParams,
  PrivateLinkResourcesListByHostPoolResponse,
  PrivateLinkResourcesListByWorkspaceResponse,
  PrivateLinkResourcesListByHostPoolNextResponse,
  PrivateLinkResourcesListByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: DesktopVirtualizationAPIClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClient) {
    this.client = client;
  }

  /**
   * List the private link resources available for this hostpool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  public listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: PrivateLinkResourcesListByHostPoolOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByHostPoolPagingAll(
      resourceGroupName,
      hostPoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByHostPoolPagingPage(
          resourceGroupName,
          hostPoolName,
          options
        );
      }
    };
  }

  private async *listByHostPoolPagingPage(
    resourceGroupName: string,
    hostPoolName: string,
    options?: PrivateLinkResourcesListByHostPoolOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByHostPool(
      resourceGroupName,
      hostPoolName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByHostPoolNext(
        resourceGroupName,
        hostPoolName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByHostPoolPagingAll(
    resourceGroupName: string,
    hostPoolName: string,
    options?: PrivateLinkResourcesListByHostPoolOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByHostPoolPagingPage(
      resourceGroupName,
      hostPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the private link resources available for this workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateLinkResourcesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateLinkResourcesListByWorkspaceOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result = await this._listByWorkspace(
      resourceGroupName,
      workspaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateLinkResourcesListByWorkspaceOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the private link resources available for this hostpool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  private _listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: PrivateLinkResourcesListByHostPoolOptionalParams
  ): Promise<PrivateLinkResourcesListByHostPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      listByHostPoolOperationSpec
    );
  }

  /**
   * List the private link resources available for this workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateLinkResourcesListByWorkspaceOptionalParams
  ): Promise<PrivateLinkResourcesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * ListByHostPoolNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param nextLink The nextLink from the previous successful call to the ListByHostPool method.
   * @param options The options parameters.
   */
  private _listByHostPoolNext(
    resourceGroupName: string,
    hostPoolName: string,
    nextLink: string,
    options?: PrivateLinkResourcesListByHostPoolNextOptionalParams
  ): Promise<PrivateLinkResourcesListByHostPoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, nextLink, options },
      listByHostPoolNextOperationSpec
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: PrivateLinkResourcesListByWorkspaceNextOptionalParams
  ): Promise<PrivateLinkResourcesListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByHostPoolOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/workspaces/{workspaceName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHostPoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};