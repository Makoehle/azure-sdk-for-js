/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a recoverable managed database.
 *
 * @summary Gets a recoverable managed database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/GetRecoverableManagedDatabase.json
 */
async function getsARecoverableDatabasesByManagedInstances() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Test1";
  const managedInstanceName = "managedInstance";
  const recoverableDatabaseName = "testdb";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.recoverableManagedDatabases.get(
    resourceGroupName,
    managedInstanceName,
    recoverableDatabaseName,
  );
  console.log(result);
}

async function main() {
  getsARecoverableDatabasesByManagedInstances();
}

main().catch(console.error);
