/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MaintenanceManagementClient } = require("@azure/arm-maintenance");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Unregister configuration for resource.
 *
 * @summary Unregister configuration for resource.
 * x-ms-original-file: specification/maintenance/resource-manager/Microsoft.Maintenance/preview/2023-10-01-preview/examples/ConfigurationAssignments_DeleteParent.json
 */
async function configurationAssignmentsDeleteParent() {
  const subscriptionId =
    process.env["MAINTENANCE_SUBSCRIPTION_ID"] || "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = process.env["MAINTENANCE_RESOURCE_GROUP"] || "examplerg";
  const providerName = "Microsoft.Compute";
  const resourceParentType = "virtualMachineScaleSets";
  const resourceParentName = "smdtest1";
  const resourceType = "virtualMachines";
  const resourceName = "smdvm1";
  const configurationAssignmentName = "workervmConfiguration";
  const credential = new DefaultAzureCredential();
  const client = new MaintenanceManagementClient(credential, subscriptionId);
  const result = await client.configurationAssignments.deleteParent(
    resourceGroupName,
    providerName,
    resourceParentType,
    resourceParentName,
    resourceType,
    resourceName,
    configurationAssignmentName,
  );
  console.log(result);
}

async function main() {
  configurationAssignmentsDeleteParent();
}

main().catch(console.error);
