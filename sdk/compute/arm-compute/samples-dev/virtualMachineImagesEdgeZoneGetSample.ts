/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a virtual machine image in an edge zone.
 *
 * @summary Gets a virtual machine image in an edge zone.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_Get_MaximumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneGetMaximumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaaaaaaaaaaaaaaaaaaaaaa";
  const edgeZone = "aaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaa";
  const offer = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const skus = "aaaaaaaaaa";
  const version = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImagesEdgeZone.get(
    location,
    edgeZone,
    publisherName,
    offer,
    skus,
    version
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets a virtual machine image in an edge zone.
 *
 * @summary Gets a virtual machine image in an edge zone.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineImageExamples/VirtualMachineImagesEdgeZone_Get_MinimumSet_Gen.json
 */
async function virtualMachineImagesEdgeZoneGetMinimumSetGen() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "aaaaaaaaaaaaaaaaaaaaaaa";
  const edgeZone = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const publisherName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const offer = "aaaaaaaaaaa";
  const skus = "aaaaaaaaaaaaaaaaaa";
  const version = "aa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineImagesEdgeZone.get(
    location,
    edgeZone,
    publisherName,
    offer,
    skus,
    version
  );
  console.log(result);
}

async function main() {
  virtualMachineImagesEdgeZoneGetMaximumSetGen();
  virtualMachineImagesEdgeZoneGetMinimumSetGen();
}

main().catch(console.error);
