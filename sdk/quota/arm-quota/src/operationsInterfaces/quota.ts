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
  CurrentQuotaLimitBase,
  QuotaListOptionalParams,
  QuotaGetOptionalParams,
  QuotaGetResponse,
  QuotaCreateOrUpdateOptionalParams,
  QuotaCreateOrUpdateResponse,
  QuotaUpdateOptionalParams,
  QuotaUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Quota. */
export interface Quota {
  /**
   * Get a list of current quota limits of all resources for the specified scope. The response from this
   * GET operation can be leveraged to submit requests to update a quota.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  list(
    scope: string,
    options?: QuotaListOptionalParams,
  ): PagedAsyncIterableIterator<CurrentQuotaLimitBase>;
  /**
   * Get the quota limit of a resource. The response can be used to determine the remaining quota to
   * calculate a new quota limit that can be submitted with a PUT request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    scope: string,
    options?: QuotaGetOptionalParams,
  ): Promise<QuotaGetResponse>;
  /**
   * Create or update the quota limit for the specified resource with the requested value. To update the
   * quota, follow these steps:
   * 1. Use the GET operation for quotas and usages to determine how much quota remains for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota request payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<QuotaCreateOrUpdateResponse>, QuotaCreateOrUpdateResponse>
  >;
  /**
   * Create or update the quota limit for the specified resource with the requested value. To update the
   * quota, follow these steps:
   * 1. Use the GET operation for quotas and usages to determine how much quota remains for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota request payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaCreateOrUpdateOptionalParams,
  ): Promise<QuotaCreateOrUpdateResponse>;
  /**
   * Update the quota limit for a specific resource to the specified value:
   * 1. Use the Usages-GET and Quota-GET operations to determine the remaining quota for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota requests payload.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaUpdateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<QuotaUpdateResponse>, QuotaUpdateResponse>>;
  /**
   * Update the quota limit for a specific resource to the specified value:
   * 1. Use the Usages-GET and Quota-GET operations to determine the remaining quota for the specific
   * resource and to calculate the new quota limit. These steps are detailed in [this
   * example](https://techcommunity.microsoft.com/t5/azure-governance-and-management/using-the-new-quota-rest-api/ba-p/2183670).
   * 2. Use this PUT operation to update the quota limit. Please check the URI in location header for the
   * detailed status of the request.
   * @param resourceName Resource name for a given resource provider. For example:
   *                     - SKU name for Microsoft.Compute
   *                     - SKU or TotalLowPriorityCores for Microsoft.MachineLearningServices
   *                      For Microsoft.Network PublicIPAddresses.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param createQuotaRequest Quota requests payload.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceName: string,
    scope: string,
    createQuotaRequest: CurrentQuotaLimitBase,
    options?: QuotaUpdateOptionalParams,
  ): Promise<QuotaUpdateResponse>;
}
