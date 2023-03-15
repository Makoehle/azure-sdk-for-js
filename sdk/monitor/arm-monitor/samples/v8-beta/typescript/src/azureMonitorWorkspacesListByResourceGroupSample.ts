/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all workspaces in the specified resource group
 *
 * @summary Lists all workspaces in the specified resource group
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Monitor/preview/2021-06-03-preview/examples/AzureMonitorWorkspacesListByResourceGroup.json
 */
async function listMonitorWorkspacesByResourceGroup() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "myResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.azureMonitorWorkspaces.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listMonitorWorkspacesByResourceGroup();
}

main().catch(console.error);