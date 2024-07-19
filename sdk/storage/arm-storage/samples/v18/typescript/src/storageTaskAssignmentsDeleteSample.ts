/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete the storage task assignment sub-resource
 *
 * @summary Delete the storage task assignment sub-resource
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/storageTaskAssignmentsCrud/DeleteStorageTaskAssignment.json
 */
async function deleteStorageTaskAssignment() {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] ||
    "1f31ba14-ce16-4281-b9b4-3e78da6e1616";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res4228";
  const accountName = "sto4445";
  const storageTaskAssignmentName = "myassignment1";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageTaskAssignments.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    storageTaskAssignmentName,
  );
  console.log(result);
}

async function main() {
  deleteStorageTaskAssignment();
}

main().catch(console.error);
