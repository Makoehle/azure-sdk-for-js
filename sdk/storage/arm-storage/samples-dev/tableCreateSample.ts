/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  Table,
  TableCreateOptionalParams,
  StorageManagementClient,
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a new table with the specified table name, under the specified account.
 *
 * @summary Creates a new table with the specified table name, under the specified account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/TableOperationPut.json
 */
async function tableOperationPut() {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res3376";
  const accountName = "sto328";
  const tableName = "table6185";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.tableOperations.create(
    resourceGroupName,
    accountName,
    tableName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a new table with the specified table name, under the specified account.
 *
 * @summary Creates a new table with the specified table name, under the specified account.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/TableOperationPutOrPatchAcls.json
 */
async function tableOperationPutOrPatchAcls() {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res3376";
  const accountName = "sto328";
  const tableName = "table6185";
  const parameters: Table = {
    signedIdentifiers: [
      {
        accessPolicy: {
          expiryTime: new Date("2022-03-20T08:49:37.0000000Z"),
          permission: "raud",
          startTime: new Date("2022-03-17T08:49:37.0000000Z"),
        },
        id: "MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI",
      },
      {
        accessPolicy: {
          expiryTime: new Date("2022-03-20T08:49:37.0000000Z"),
          permission: "rad",
          startTime: new Date("2022-03-17T08:49:37.0000000Z"),
        },
        id: "PTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODklMTI",
      },
    ],
  };
  const options: TableCreateOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.tableOperations.create(
    resourceGroupName,
    accountName,
    tableName,
    options,
  );
  console.log(result);
}

async function main() {
  tableOperationPut();
  tableOperationPutOrPatchAcls();
}

main().catch(console.error);
