/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { FirewallRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClient } from "../mariaDBManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FirewallRule,
  FirewallRulesListByServerOptionalParams,
  FirewallRulesListByServerResponse,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesCreateOrUpdateResponse,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesGetOptionalParams,
  FirewallRulesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FirewallRules operations. */
export class FirewallRulesImpl implements FirewallRules {
  private readonly client: MariaDBManagementClient;

  /**
   * Initialize a new instance of the class FirewallRules class.
   * @param client Reference to the service client
   */
  constructor(client: MariaDBManagementClient) {
    this.client = client;
  }

  /**
   * List all the firewall rules in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: FirewallRulesListByServerOptionalParams
  ): PagedAsyncIterableIterator<FirewallRule> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: FirewallRulesListByServerOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<FirewallRule[]> {
    let result: FirewallRulesListByServerResponse;
    result = await this._listByServer(resourceGroupName, serverName, options);
    yield result.value || [];
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: FirewallRulesListByServerOptionalParams
  ): AsyncIterableIterator<FirewallRule> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a new firewall rule or updates an existing firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    parameters: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FirewallRulesCreateOrUpdateResponse>,
      FirewallRulesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FirewallRulesCreateOrUpdateResponse> => {
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
      { resourceGroupName, serverName, firewallRuleName, parameters, options },
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
   * Creates a new firewall rule or updates an existing firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    parameters: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams
  ): Promise<FirewallRulesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      firewallRuleName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a server firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams
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
      { resourceGroupName, serverName, firewallRuleName, options },
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
   * Deletes a server firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      firewallRuleName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about a server firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param firewallRuleName The name of the server firewall rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    firewallRuleName: string,
    options?: FirewallRulesGetOptionalParams
  ): Promise<FirewallRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, firewallRuleName, options },
      getOperationSpec
    );
  }

  /**
   * List all the firewall rules in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: FirewallRulesListByServerOptionalParams
  ): Promise<FirewallRulesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/firewallRules/{firewallRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    201: {
      bodyMapper: Mappers.FirewallRule
    },
    202: {
      bodyMapper: Mappers.FirewallRule
    },
    204: {
      bodyMapper: Mappers.FirewallRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/firewallRules/{firewallRuleName}",
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
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/firewallRules/{firewallRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
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
    Parameters.serverName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/firewallRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRuleListResult
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
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
