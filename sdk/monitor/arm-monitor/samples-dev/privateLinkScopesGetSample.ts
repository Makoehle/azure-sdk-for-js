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
 * This sample demonstrates how to Returns a Azure Monitor PrivateLinkScope.
 *
 * @summary Returns a Azure Monitor PrivateLinkScope.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/PrivateLinkScopesGet.json
 */
async function privateLinkScopeGet() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "86dc51d3-92ed-4d7e-947a-775ea79b4919";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.get(
    resourceGroupName,
    scopeName,
  );
  console.log(result);
}

async function main() {
  privateLinkScopeGet();
}

main().catch(console.error);
