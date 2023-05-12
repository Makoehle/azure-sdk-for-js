/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a Kusto pool principalAssignment.
 *
 * @summary Gets a Kusto pool principalAssignment.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolPrincipalAssignmentsGet.json
 */
async function kustoPoolPrincipalAssignmentsGet() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const principalAssignmentName = "kustoprincipal1";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "kustorptest";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolPrincipalAssignments.get(
    workspaceName,
    kustoPoolName,
    principalAssignmentName,
    resourceGroupName
  );
  console.log(result);
}

async function main() {
  kustoPoolPrincipalAssignmentsGet();
}

main().catch(console.error);