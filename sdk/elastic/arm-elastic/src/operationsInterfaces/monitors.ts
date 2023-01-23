/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ElasticMonitorResource,
  MonitorsListOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsGetOptionalParams,
  MonitorsGetResponse,
  MonitorsCreateOptionalParams,
  MonitorsCreateResponse,
  MonitorsUpdateOptionalParams,
  MonitorsUpdateResponse,
  MonitorsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Monitors. */
export interface Monitors {
  /**
   * List all monitors under the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: MonitorsListOptionalParams
  ): PagedAsyncIterableIterator<ElasticMonitorResource>;
  /**
   * List all monitors under the specified resource group.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: MonitorsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ElasticMonitorResource>;
  /**
   * Get the properties of a specific monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetOptionalParams
  ): Promise<MonitorsGetResponse>;
  /**
   * Create a monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<MonitorsCreateResponse>,
      MonitorsCreateResponse
    >
  >;
  /**
   * Create a monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsCreateOptionalParams
  ): Promise<MonitorsCreateResponse>;
  /**
   * Update a monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsUpdateOptionalParams
  ): Promise<MonitorsUpdateResponse>;
  /**
   * Delete a monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a monitor resource.
   * @param resourceGroupName The name of the resource group to which the Elastic resource belongs.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams
  ): Promise<void>;
}
