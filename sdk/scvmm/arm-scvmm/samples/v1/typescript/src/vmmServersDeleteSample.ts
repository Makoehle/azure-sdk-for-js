/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { VmmServersDeleteOptionalParams, ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Removes the SCVmm fabric from Azure.
 *
 * @summary Removes the SCVmm fabric from Azure.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VmmServers_Delete_MaximumSet_Gen.json
 */
async function vmmServersDeleteMaximumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const force = "true";
  const vmmServerName = ".";
  const options: VmmServersDeleteOptionalParams = { force };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.vmmServers.beginDeleteAndWait(
    resourceGroupName,
    vmmServerName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Removes the SCVmm fabric from Azure.
 *
 * @summary Removes the SCVmm fabric from Azure.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VmmServers_Delete_MinimumSet_Gen.json
 */
async function vmmServersDeleteMinimumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const vmmServerName = "8";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.vmmServers.beginDeleteAndWait(
    resourceGroupName,
    vmmServerName,
  );
  console.log(result);
}

async function main() {
  vmmServersDeleteMaximumSet();
  vmmServersDeleteMinimumSet();
}

main().catch(console.error);
