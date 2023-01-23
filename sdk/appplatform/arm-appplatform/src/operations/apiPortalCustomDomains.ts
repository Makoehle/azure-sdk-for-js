/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiPortalCustomDomains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ApiPortalCustomDomainResource,
  ApiPortalCustomDomainsListNextOptionalParams,
  ApiPortalCustomDomainsListOptionalParams,
  ApiPortalCustomDomainsListResponse,
  ApiPortalCustomDomainsGetOptionalParams,
  ApiPortalCustomDomainsGetResponse,
  ApiPortalCustomDomainsCreateOrUpdateOptionalParams,
  ApiPortalCustomDomainsCreateOrUpdateResponse,
  ApiPortalCustomDomainsDeleteOptionalParams,
  ApiPortalCustomDomainsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiPortalCustomDomains operations. */
export class ApiPortalCustomDomainsImpl implements ApiPortalCustomDomains {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class ApiPortalCustomDomains class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handle requests to list all API portal custom domains.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalCustomDomainsListOptionalParams
  ): PagedAsyncIterableIterator<ApiPortalCustomDomainResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      apiPortalName,
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
          serviceName,
          apiPortalName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalCustomDomainsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApiPortalCustomDomainResource[]> {
    let result: ApiPortalCustomDomainsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        apiPortalName,
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
        serviceName,
        apiPortalName,
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
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalCustomDomainsListOptionalParams
  ): AsyncIterableIterator<ApiPortalCustomDomainResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      apiPortalName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the API portal custom domain.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param domainName The name of the API portal custom domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    domainName: string,
    options?: ApiPortalCustomDomainsGetOptionalParams
  ): Promise<ApiPortalCustomDomainsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiPortalName, domainName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the API portal custom domain.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param domainName The name of the API portal custom domain.
   * @param apiPortalCustomDomainResource The API portal custom domain for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    domainName: string,
    apiPortalCustomDomainResource: ApiPortalCustomDomainResource,
    options?: ApiPortalCustomDomainsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApiPortalCustomDomainsCreateOrUpdateResponse>,
      ApiPortalCustomDomainsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ApiPortalCustomDomainsCreateOrUpdateResponse> => {
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
        serviceName,
        apiPortalName,
        domainName,
        apiPortalCustomDomainResource,
        options
      },
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
   * Create or update the API portal custom domain.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param domainName The name of the API portal custom domain.
   * @param apiPortalCustomDomainResource The API portal custom domain for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    domainName: string,
    apiPortalCustomDomainResource: ApiPortalCustomDomainResource,
    options?: ApiPortalCustomDomainsCreateOrUpdateOptionalParams
  ): Promise<ApiPortalCustomDomainsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      apiPortalName,
      domainName,
      apiPortalCustomDomainResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the API portal custom domain.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param domainName The name of the API portal custom domain.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    domainName: string,
    options?: ApiPortalCustomDomainsDeleteOptionalParams
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
      { resourceGroupName, serviceName, apiPortalName, domainName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the API portal custom domain.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param domainName The name of the API portal custom domain.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    domainName: string,
    options?: ApiPortalCustomDomainsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      apiPortalName,
      domainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Handle requests to list all API portal custom domains.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    options?: ApiPortalCustomDomainsListOptionalParams
  ): Promise<ApiPortalCustomDomainsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiPortalName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param apiPortalName The name of API portal.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    apiPortalName: string,
    nextLink: string,
    options?: ApiPortalCustomDomainsListNextOptionalParams
  ): Promise<ApiPortalCustomDomainsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiPortalName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiPortalCustomDomainResource
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
    Parameters.serviceName,
    Parameters.domainName,
    Parameters.apiPortalName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiPortalCustomDomainResource
    },
    201: {
      bodyMapper: Mappers.ApiPortalCustomDomainResource
    },
    202: {
      bodyMapper: Mappers.ApiPortalCustomDomainResource
    },
    204: {
      bodyMapper: Mappers.ApiPortalCustomDomainResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.apiPortalCustomDomainResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.domainName,
    Parameters.apiPortalName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains/{domainName}",
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
    Parameters.serviceName,
    Parameters.domainName,
    Parameters.apiPortalName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apiPortals/{apiPortalName}/domains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiPortalCustomDomainResourceCollection
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
    Parameters.serviceName,
    Parameters.apiPortalName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiPortalCustomDomainResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
    Parameters.apiPortalName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
