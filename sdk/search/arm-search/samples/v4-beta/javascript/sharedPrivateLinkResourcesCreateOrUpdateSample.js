/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SearchManagementClient } = require("@azure/arm-search");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Initiates the creation or update of a shared private link resource managed by the search service in the given resource group.
 *
 * @summary Initiates the creation or update of a shared private link resource managed by the search service in the given resource group.
 * x-ms-original-file: specification/search/resource-manager/Microsoft.Search/preview/2024-06-01-preview/examples/CreateOrUpdateSharedPrivateLinkResource.json
 */
async function sharedPrivateLinkResourceCreateOrUpdate() {
  const subscriptionId = process.env["SEARCH_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["SEARCH_RESOURCE_GROUP"] || "rg1";
  const searchServiceName = "mysearchservice";
  const sharedPrivateLinkResourceName = "testResource";
  const sharedPrivateLinkResource = {
    properties: {
      groupId: "blob",
      privateLinkResourceId:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Storage/storageAccounts/storageAccountName",
      requestMessage: "please approve",
      resourceRegion: undefined,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SearchManagementClient(credential, subscriptionId);
  const result = await client.sharedPrivateLinkResources.beginCreateOrUpdateAndWait(
    resourceGroupName,
    searchServiceName,
    sharedPrivateLinkResourceName,
    sharedPrivateLinkResource,
  );
  console.log(result);
}

async function main() {
  sharedPrivateLinkResourceCreateOrUpdate();
}

main().catch(console.error);
