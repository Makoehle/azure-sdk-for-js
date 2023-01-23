/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AttachedNetworks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AttachedNetworkConnection,
  AttachedNetworksListByProjectNextOptionalParams,
  AttachedNetworksListByProjectOptionalParams,
  AttachedNetworksListByProjectResponse,
  AttachedNetworksListByDevCenterNextOptionalParams,
  AttachedNetworksListByDevCenterOptionalParams,
  AttachedNetworksListByDevCenterResponse,
  AttachedNetworksGetByProjectOptionalParams,
  AttachedNetworksGetByProjectResponse,
  AttachedNetworksGetByDevCenterOptionalParams,
  AttachedNetworksGetByDevCenterResponse,
  AttachedNetworksCreateOrUpdateOptionalParams,
  AttachedNetworksCreateOrUpdateResponse,
  AttachedNetworksDeleteOptionalParams,
  AttachedNetworksListByProjectNextResponse,
  AttachedNetworksListByDevCenterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AttachedNetworks operations. */
export class AttachedNetworksImpl implements AttachedNetworks {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class AttachedNetworks class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists the attached NetworkConnections for a Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  public listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: AttachedNetworksListByProjectOptionalParams
  ): PagedAsyncIterableIterator<AttachedNetworkConnection> {
    const iter = this.listByProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: AttachedNetworksListByProjectOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AttachedNetworkConnection[]> {
    let result: AttachedNetworksListByProjectResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProject(
        resourceGroupName,
        projectName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProjectNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: AttachedNetworksListByProjectOptionalParams
  ): AsyncIterableIterator<AttachedNetworkConnection> {
    for await (const page of this.listByProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the attached NetworkConnections for a DevCenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  public listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: AttachedNetworksListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<AttachedNetworkConnection> {
    const iter = this.listByDevCenterPagingAll(
      resourceGroupName,
      devCenterName,
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
        return this.listByDevCenterPagingPage(
          resourceGroupName,
          devCenterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDevCenterPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    options?: AttachedNetworksListByDevCenterOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AttachedNetworkConnection[]> {
    let result: AttachedNetworksListByDevCenterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDevCenter(
        resourceGroupName,
        devCenterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDevCenterNext(
        resourceGroupName,
        devCenterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDevCenterPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    options?: AttachedNetworksListByDevCenterOptionalParams
  ): AsyncIterableIterator<AttachedNetworkConnection> {
    for await (const page of this.listByDevCenterPagingPage(
      resourceGroupName,
      devCenterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the attached NetworkConnections for a Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  private _listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: AttachedNetworksListByProjectOptionalParams
  ): Promise<AttachedNetworksListByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByProjectOperationSpec
    );
  }

  /**
   * Gets an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  getByProject(
    resourceGroupName: string,
    projectName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksGetByProjectOptionalParams
  ): Promise<AttachedNetworksGetByProjectResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        attachedNetworkConnectionName,
        options
      },
      getByProjectOperationSpec
    );
  }

  /**
   * Lists the attached NetworkConnections for a DevCenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  private _listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: AttachedNetworksListByDevCenterOptionalParams
  ): Promise<AttachedNetworksListByDevCenterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, options },
      listByDevCenterOperationSpec
    );
  }

  /**
   * Gets an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  getByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksGetByDevCenterOptionalParams
  ): Promise<AttachedNetworksGetByDevCenterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        devCenterName,
        attachedNetworkConnectionName,
        options
      },
      getByDevCenterOperationSpec
    );
  }

  /**
   * Creates or updates an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param body Represents an attached NetworkConnection.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    body: AttachedNetworkConnection,
    options?: AttachedNetworksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AttachedNetworksCreateOrUpdateResponse>,
      AttachedNetworksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AttachedNetworksCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        devCenterName,
        attachedNetworkConnectionName,
        body,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param body Represents an attached NetworkConnection.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    body: AttachedNetworkConnection,
    options?: AttachedNetworksCreateOrUpdateOptionalParams
  ): Promise<AttachedNetworksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      devCenterName,
      attachedNetworkConnectionName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Un-attach a NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        devCenterName,
        attachedNetworkConnectionName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Un-attach a NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      devCenterName,
      attachedNetworkConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByProjectNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param nextLink The nextLink from the previous successful call to the ListByProject method.
   * @param options The options parameters.
   */
  private _listByProjectNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: AttachedNetworksListByProjectNextOptionalParams
  ): Promise<AttachedNetworksListByProjectNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listByProjectNextOperationSpec
    );
  }

  /**
   * ListByDevCenterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param nextLink The nextLink from the previous successful call to the ListByDevCenter method.
   * @param options The options parameters.
   */
  private _listByDevCenterNext(
    resourceGroupName: string,
    devCenterName: string,
    nextLink: string,
    options?: AttachedNetworksListByDevCenterNextOptionalParams
  ): Promise<AttachedNetworksListByDevCenterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, nextLink, options },
      listByDevCenterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/attachednetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/attachednetworks/{attachedNetworkConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkConnection
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
    Parameters.projectName,
    Parameters.attachedNetworkConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDevCenterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByDevCenterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkConnection
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
    Parameters.devCenterName,
    Parameters.attachedNetworkConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkConnection
    },
    201: {
      bodyMapper: Mappers.AttachedNetworkConnection
    },
    202: {
      bodyMapper: Mappers.AttachedNetworkConnection
    },
    204: {
      bodyMapper: Mappers.AttachedNetworkConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.attachedNetworkConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/attachednetworks/{attachedNetworkConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.attachedNetworkConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProjectNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDevCenterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AttachedNetworkListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
