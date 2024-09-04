/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ScVmm } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deregisters the ScVmm fabric cloud from Azure.
 *
 * @summary Deregisters the ScVmm fabric cloud from Azure.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/Clouds_Delete_MaximumSet_Gen.json
 */
async function cloudsDeleteMaximumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const force = "true";
  const cloudResourceName = "-";
  const options = { force };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.clouds.beginDeleteAndWait(
    resourceGroupName,
    cloudResourceName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deregisters the ScVmm fabric cloud from Azure.
 *
 * @summary Deregisters the ScVmm fabric cloud from Azure.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/Clouds_Delete_MinimumSet_Gen.json
 */
async function cloudsDeleteMinimumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] || "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const cloudResourceName = "1";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.clouds.beginDeleteAndWait(resourceGroupName, cloudResourceName);
  console.log(result);
}

async function main() {
  cloudsDeleteMaximumSet();
  cloudsDeleteMinimumSet();
}

main().catch(console.error);
