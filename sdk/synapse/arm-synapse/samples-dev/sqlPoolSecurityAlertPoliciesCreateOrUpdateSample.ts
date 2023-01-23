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
  SqlPoolSecurityAlertPolicy,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a Sql pool's security alert policy.
 *
 * @summary Create or update a Sql pool's security alert policy.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateOrUpdateSqlPoolSecurityAlertWithAllParameters.json
 */
async function updateASqlPoolThreatDetectionPolicyWithAllParameters() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "securityalert-4799";
  const workspaceName = "securityalert-6440";
  const sqlPoolName = "testdb";
  const securityAlertPolicyName = "default";
  const parameters: SqlPoolSecurityAlertPolicy = {
    disabledAlerts: ["Sql_Injection", "Usage_Anomaly"],
    emailAccountAdmins: true,
    emailAddresses: ["test@microsoft.com", "user@microsoft.com"],
    retentionDays: 6,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolSecurityAlertPolicies.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    securityAlertPolicyName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Sql pool's security alert policy.
 *
 * @summary Create or update a Sql pool's security alert policy.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateOrUpdateSqlPoolSecurityAlertWithMinParameters.json
 */
async function updateASqlPoolThreatDetectionPolicyWithMinimalParameters() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "securityalert-4799";
  const workspaceName = "securityalert-6440";
  const sqlPoolName = "testdb";
  const securityAlertPolicyName = "default";
  const parameters: SqlPoolSecurityAlertPolicy = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolSecurityAlertPolicies.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    securityAlertPolicyName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateASqlPoolThreatDetectionPolicyWithAllParameters();
  updateASqlPoolThreatDetectionPolicyWithMinimalParameters();
}

main().catch(console.error);
