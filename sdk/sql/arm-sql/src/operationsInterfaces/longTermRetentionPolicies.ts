/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  LongTermRetentionPolicy,
  LongTermRetentionPoliciesListByDatabaseOptionalParams,
  LongTermRetentionPolicyName,
  LongTermRetentionPoliciesGetOptionalParams,
  LongTermRetentionPoliciesGetResponse,
  LongTermRetentionPoliciesCreateOrUpdateOptionalParams,
  LongTermRetentionPoliciesCreateOrUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LongTermRetentionPolicies. */
export interface LongTermRetentionPolicies {
  /**
   * Gets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: LongTermRetentionPoliciesListByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<LongTermRetentionPolicy>;
  /**
   * Gets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: LongTermRetentionPolicyName,
    options?: LongTermRetentionPoliciesGetOptionalParams,
  ): Promise<LongTermRetentionPoliciesGetResponse>;
  /**
   * Set or update a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param parameters The long term retention policy info.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: LongTermRetentionPolicyName,
    parameters: LongTermRetentionPolicy,
    options?: LongTermRetentionPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LongTermRetentionPoliciesCreateOrUpdateResponse>,
      LongTermRetentionPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Set or update a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param policyName The policy name. Should always be Default.
   * @param parameters The long term retention policy info.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    policyName: LongTermRetentionPolicyName,
    parameters: LongTermRetentionPolicy,
    options?: LongTermRetentionPoliciesCreateOrUpdateOptionalParams,
  ): Promise<LongTermRetentionPoliciesCreateOrUpdateResponse>;
}
