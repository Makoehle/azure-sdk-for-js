/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SiteRecoveryManagementClient } = require("@azure/arm-recoveryservices-siterecovery");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Operation to switch protection from one container to another or one replication provider to another.
 *
 * @summary Operation to switch protection from one container to another or one replication provider to another.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationProtectionContainers_SwitchProtection.json
 */
async function switchesProtectionFromOneContainerToAnotherOrOneReplicationProviderToAnother() {
  const subscriptionId = "42195872-7e70-4f8a-837f-84b28ecbb78b";
  const resourceName = "priyanponeboxvault";
  const resourceGroupName = "priyanprg";
  const fabricName = "CentralUSCanSite";
  const protectionContainerName = "CentralUSCancloud";
  const switchInput = {
    properties: { providerSpecificDetails: { instanceType: "A2A" } },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationProtectionContainers.beginSwitchProtectionAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    switchInput
  );
  console.log(result);
}

switchesProtectionFromOneContainerToAnotherOrOneReplicationProviderToAnother().catch(console.error);
