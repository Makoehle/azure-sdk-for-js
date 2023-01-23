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
  ProjectEnvironmentTypeUpdate,
  DevCenterClient
} from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Partially updates a project environment type.
 *
 * @summary Partially updates a project environment type.
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/preview/2022-11-11-preview/examples/ProjectEnvironmentTypes_Patch.json
 */
async function projectEnvironmentTypesUpdate() {
  const subscriptionId = "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = "rg1";
  const projectName = "ContosoProj";
  const environmentTypeName = "DevTest";
  const body: ProjectEnvironmentTypeUpdate = {
    deploymentTargetId: "/subscriptions/00000000-0000-0000-0000-000000000000",
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000000000000000000000000000/resourcegroups/identityGroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/testidentity1": {}
      }
    },
    status: "Enabled",
    tags: { costCenter: "RnD" },
    userRoleAssignments: {
      e45e3m7c176e416aB4660c5ec8298f8a: {
        roles: { "4cbf0b6cE750441c98a710da8387e4d6": {} }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.projectEnvironmentTypes.update(
    resourceGroupName,
    projectName,
    environmentTypeName,
    body
  );
  console.log(result);
}

projectEnvironmentTypesUpdate().catch(console.error);
