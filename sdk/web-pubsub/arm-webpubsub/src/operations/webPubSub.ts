/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WebPubSub } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebPubSubManagementClient } from "../webPubSubManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  WebPubSubResource,
  WebPubSubListBySubscriptionNextOptionalParams,
  WebPubSubListBySubscriptionOptionalParams,
  WebPubSubListBySubscriptionResponse,
  WebPubSubListByResourceGroupNextOptionalParams,
  WebPubSubListByResourceGroupOptionalParams,
  WebPubSubListByResourceGroupResponse,
  NameAvailabilityParameters,
  WebPubSubCheckNameAvailabilityOptionalParams,
  WebPubSubCheckNameAvailabilityResponse,
  WebPubSubGetOptionalParams,
  WebPubSubGetResponse,
  WebPubSubCreateOrUpdateOptionalParams,
  WebPubSubCreateOrUpdateResponse,
  WebPubSubDeleteOptionalParams,
  WebPubSubUpdateOptionalParams,
  WebPubSubUpdateResponse,
  WebPubSubListKeysOptionalParams,
  WebPubSubListKeysResponse,
  RegenerateKeyParameters,
  WebPubSubRegenerateKeyOptionalParams,
  WebPubSubRegenerateKeyResponse,
  WebPubSubRestartOptionalParams,
  WebPubSubListSkusOptionalParams,
  WebPubSubListSkusResponse,
  WebPubSubListBySubscriptionNextResponse,
  WebPubSubListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WebPubSub operations. */
export class WebPubSubImpl implements WebPubSub {
  private readonly client: WebPubSubManagementClient;

  /**
   * Initialize a new instance of the class WebPubSub class.
   * @param client Reference to the service client
   */
  constructor(client: WebPubSubManagementClient) {
    this.client = client;
  }

  /**
   * Handles requests to list all resources in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: WebPubSubListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<WebPubSubResource> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: WebPubSubListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<WebPubSubResource[]> {
    let result: WebPubSubListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: WebPubSubListBySubscriptionOptionalParams
  ): AsyncIterableIterator<WebPubSubResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Handles requests to list all resources in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: WebPubSubListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<WebPubSubResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: WebPubSubListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<WebPubSubResource[]> {
    let result: WebPubSubListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: WebPubSubListByResourceGroupOptionalParams
  ): AsyncIterableIterator<WebPubSubResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks that the resource name is valid and is not already in use.
   * @param location the region
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    parameters: NameAvailabilityParameters,
    options?: WebPubSubCheckNameAvailabilityOptionalParams
  ): Promise<WebPubSubCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, parameters, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Handles requests to list all resources in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: WebPubSubListBySubscriptionOptionalParams
  ): Promise<WebPubSubListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Handles requests to list all resources in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: WebPubSubListByResourceGroupOptionalParams
  ): Promise<WebPubSubListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get the resource and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubGetOptionalParams
  ): Promise<WebPubSubGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebPubSubCreateOrUpdateResponse>,
      WebPubSubCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebPubSubCreateOrUpdateResponse> => {
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
      { resourceGroupName, resourceName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubCreateOrUpdateOptionalParams
  ): Promise<WebPubSubCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to delete a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubDeleteOptionalParams
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
      { resourceGroupName, resourceName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to delete a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to update an exiting resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebPubSubUpdateResponse>,
      WebPubSubUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebPubSubUpdateResponse> => {
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
      { resourceGroupName, resourceName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to update an exiting resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: WebPubSubResource,
    options?: WebPubSubUpdateOptionalParams
  ): Promise<WebPubSubUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      resourceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the access keys of the resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubListKeysOptionalParams
  ): Promise<WebPubSubListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the
   * same time.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameter that describes the Regenerate Key Operation.
   * @param options The options parameters.
   */
  async beginRegenerateKey(
    resourceGroupName: string,
    resourceName: string,
    parameters: RegenerateKeyParameters,
    options?: WebPubSubRegenerateKeyOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebPubSubRegenerateKeyResponse>,
      WebPubSubRegenerateKeyResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebPubSubRegenerateKeyResponse> => {
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
      { resourceGroupName, resourceName, parameters, options },
      regenerateKeyOperationSpec
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
   * Regenerate the access key for the resource. PrimaryKey and SecondaryKey cannot be regenerated at the
   * same time.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters Parameter that describes the Regenerate Key Operation.
   * @param options The options parameters.
   */
  async beginRegenerateKeyAndWait(
    resourceGroupName: string,
    resourceName: string,
    parameters: RegenerateKeyParameters,
    options?: WebPubSubRegenerateKeyOptionalParams
  ): Promise<WebPubSubRegenerateKeyResponse> {
    const poller = await this.beginRegenerateKey(
      resourceGroupName,
      resourceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to restart a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubRestartOptionalParams
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
      { resourceGroupName, resourceName, options },
      restartOperationSpec
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
   * Operation to restart a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubRestartOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestart(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all available skus of the resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  listSkus(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubListSkusOptionalParams
  ): Promise<WebPubSubListSkusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listSkusOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: WebPubSubListBySubscriptionNextOptionalParams
  ): Promise<WebPubSubListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: WebPubSubListByResourceGroupNextOptionalParams
  ): Promise<WebPubSubListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailability
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.location,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/webPubSub",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResource
    },
    201: {
      bodyMapper: Mappers.WebPubSubResource
    },
    202: {
      bodyMapper: Mappers.WebPubSubResource
    },
    204: {
      bodyMapper: Mappers.WebPubSubResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResource
    },
    201: {
      bodyMapper: Mappers.WebPubSubResource
    },
    202: {
      bodyMapper: Mappers.WebPubSubResource
    },
    204: {
      bodyMapper: Mappers.WebPubSubResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubKeys
    },
    201: {
      bodyMapper: Mappers.WebPubSubKeys
    },
    202: {
      bodyMapper: Mappers.WebPubSubKeys
    },
    204: {
      bodyMapper: Mappers.WebPubSubKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/restart",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WebPubSubResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
