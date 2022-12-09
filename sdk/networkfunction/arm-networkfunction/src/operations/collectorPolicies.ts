/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CollectorPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureTrafficCollectorClient } from "../azureTrafficCollectorClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CollectorPolicy,
  CollectorPoliciesListNextOptionalParams,
  CollectorPoliciesListOptionalParams,
  CollectorPoliciesListResponse,
  CollectorPoliciesGetOptionalParams,
  CollectorPoliciesGetResponse,
  CollectorPoliciesCreateOrUpdateOptionalParams,
  CollectorPoliciesCreateOrUpdateResponse,
  CollectorPoliciesDeleteOptionalParams,
  TagsObject,
  CollectorPoliciesUpdateTagsOptionalParams,
  CollectorPoliciesUpdateTagsResponse,
  CollectorPoliciesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CollectorPolicies operations. */
export class CollectorPoliciesImpl implements CollectorPolicies {
  private readonly client: AzureTrafficCollectorClient;

  /**
   * Initialize a new instance of the class CollectorPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: AzureTrafficCollectorClient) {
    this.client = client;
  }

  /**
   * Return list of Collector policies in a Azure Traffic Collector
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    options?: CollectorPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<CollectorPolicy> {
    const iter = this.listPagingAll(
      resourceGroupName,
      azureTrafficCollectorName,
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
        return this.listPagingPage(
          resourceGroupName,
          azureTrafficCollectorName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    options?: CollectorPoliciesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CollectorPolicy[]> {
    let result: CollectorPoliciesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        azureTrafficCollectorName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        azureTrafficCollectorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    options?: CollectorPoliciesListOptionalParams
  ): AsyncIterableIterator<CollectorPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      azureTrafficCollectorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Return list of Collector policies in a Azure Traffic Collector
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    options?: CollectorPoliciesListOptionalParams
  ): Promise<CollectorPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureTrafficCollectorName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the collector policy in a specified Traffic Collector
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param collectorPolicyName Collector Policy Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    collectorPolicyName: string,
    options?: CollectorPoliciesGetOptionalParams
  ): Promise<CollectorPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureTrafficCollectorName,
        collectorPolicyName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Collector Policy resource
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param collectorPolicyName Collector Policy Name
   * @param location Resource location.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    collectorPolicyName: string,
    location: string,
    options?: CollectorPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CollectorPoliciesCreateOrUpdateResponse>,
      CollectorPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CollectorPoliciesCreateOrUpdateResponse> => {
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
        azureTrafficCollectorName,
        collectorPolicyName,
        location,
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
   * Creates or updates a Collector Policy resource
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param collectorPolicyName Collector Policy Name
   * @param location Resource location.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    collectorPolicyName: string,
    location: string,
    options?: CollectorPoliciesCreateOrUpdateOptionalParams
  ): Promise<CollectorPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      azureTrafficCollectorName,
      collectorPolicyName,
      location,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a specified Collector Policy resource.
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param collectorPolicyName Collector Policy Name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    collectorPolicyName: string,
    options?: CollectorPoliciesDeleteOptionalParams
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
        azureTrafficCollectorName,
        collectorPolicyName,
        options
      },
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
   * Deletes a specified Collector Policy resource.
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param collectorPolicyName Collector Policy Name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    collectorPolicyName: string,
    options?: CollectorPoliciesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      azureTrafficCollectorName,
      collectorPolicyName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the specified Collector Policy tags.
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param collectorPolicyName Collector Policy Name
   * @param parameters Parameters supplied to update Collector Policy tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    collectorPolicyName: string,
    parameters: TagsObject,
    options?: CollectorPoliciesUpdateTagsOptionalParams
  ): Promise<CollectorPoliciesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureTrafficCollectorName,
        collectorPolicyName,
        parameters,
        options
      },
      updateTagsOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param azureTrafficCollectorName Azure Traffic Collector name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    azureTrafficCollectorName: string,
    nextLink: string,
    options?: CollectorPoliciesListNextOptionalParams
  ): Promise<CollectorPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureTrafficCollectorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkFunction/azureTrafficCollectors/{azureTrafficCollectorName}/collectorPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CollectorPolicyListResult
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
    Parameters.azureTrafficCollectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkFunction/azureTrafficCollectors/{azureTrafficCollectorName}/collectorPolicies/{collectorPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CollectorPolicy
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
    Parameters.azureTrafficCollectorName,
    Parameters.collectorPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkFunction/azureTrafficCollectors/{azureTrafficCollectorName}/collectorPolicies/{collectorPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CollectorPolicy
    },
    201: {
      bodyMapper: Mappers.CollectorPolicy
    },
    202: {
      bodyMapper: Mappers.CollectorPolicy
    },
    204: {
      bodyMapper: Mappers.CollectorPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: {
    parameterPath: {
      location: ["location"],
      tags: ["options", "tags"],
      ingestionPolicy: ["options", "ingestionPolicy"],
      emissionPolicies: ["options", "emissionPolicies"]
    },
    mapper: { ...Mappers.CollectorPolicy, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureTrafficCollectorName,
    Parameters.collectorPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkFunction/azureTrafficCollectors/{azureTrafficCollectorName}/collectorPolicies/{collectorPolicyName}",
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
    Parameters.azureTrafficCollectorName,
    Parameters.collectorPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkFunction/azureTrafficCollectors/{azureTrafficCollectorName}/collectorPolicies/{collectorPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CollectorPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureTrafficCollectorName,
    Parameters.collectorPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CollectorPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.azureTrafficCollectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
