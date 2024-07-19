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
  ManagedLedgerDigestUploads,
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
 *
 * @summary Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ManagedLedgerDigestUploadsEnable.json
 */
async function enablesManagedLedgerDigestUploadConfigurationForADatabase() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "ledgertestrg";
  const managedInstanceName = "ledgertestserver";
  const databaseName = "testdb";
  const ledgerDigestUploads = "current";
  const parameters: ManagedLedgerDigestUploads = {
    digestStorageEndpoint: "https://MyAccount.blob.core.windows.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.managedLedgerDigestUploadsOperations.beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      ledgerDigestUploads,
      parameters,
    );
  console.log(result);
}

async function main() {
  enablesManagedLedgerDigestUploadConfigurationForADatabase();
}

main().catch(console.error);
