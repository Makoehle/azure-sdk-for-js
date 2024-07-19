/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SecurityConnector,
  SecurityConnectorsListOptionalParams,
  SecurityConnectorsListByResourceGroupOptionalParams,
  SecurityConnectorsGetOptionalParams,
  SecurityConnectorsGetResponse,
  SecurityConnectorsCreateOrUpdateOptionalParams,
  SecurityConnectorsCreateOrUpdateResponse,
  SecurityConnectorsUpdateOptionalParams,
  SecurityConnectorsUpdateResponse,
  SecurityConnectorsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecurityConnectors. */
export interface SecurityConnectors {
  /**
   * Lists all the security connectors in the specified subscription. Use the 'nextLink' property in the
   * response to get the next page of security connectors for the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: SecurityConnectorsListOptionalParams,
  ): PagedAsyncIterableIterator<SecurityConnector>;
  /**
   * Lists all the security connectors in the specified resource group. Use the 'nextLink' property in
   * the response to get the next page of security connectors for the specified resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SecurityConnectorsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<SecurityConnector>;
  /**
   * Retrieves details of a specific security connector
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorsGetOptionalParams,
  ): Promise<SecurityConnectorsGetResponse>;
  /**
   * Creates or updates a security connector. If a security connector is already created and a subsequent
   * request is issued for the same security connector id, then it will be updated.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param securityConnector The security connector resource
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    securityConnector: SecurityConnector,
    options?: SecurityConnectorsCreateOrUpdateOptionalParams,
  ): Promise<SecurityConnectorsCreateOrUpdateResponse>;
  /**
   * Updates a security connector
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param securityConnector The security connector resource
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    securityConnectorName: string,
    securityConnector: SecurityConnector,
    options?: SecurityConnectorsUpdateOptionalParams,
  ): Promise<SecurityConnectorsUpdateResponse>;
  /**
   * Deletes a security connector.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorsDeleteOptionalParams,
  ): Promise<void>;
}
