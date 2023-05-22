/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete the baseboard management controller key set of the provided cluster.
 *
 * @summary Delete the baseboard management controller key set of the provided cluster.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/BmcKeySets_Delete.json
 */
async function deleteBaseboardManagementControllerKeySetOfCluster() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const bmcKeySetName = "bmcKeySetName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bmcKeySets.beginDeleteAndWait(
    resourceGroupName,
    clusterName,
    bmcKeySetName
  );
  console.log(result);
}

async function main() {
  deleteBaseboardManagementControllerKeySetOfCluster();
}

main().catch(console.error);