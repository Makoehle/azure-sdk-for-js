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
  ProfileResourceFormat,
  CustomerInsightsManagementClient
} from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a profile within a Hub, or updates an existing profile.
 *
 * @summary Creates a profile within a Hub, or updates an existing profile.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/ProfilesCreateOrUpdate.json
 */
async function profilesCreateOrUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const profileName = "TestProfileType396";
  const parameters: ProfileResourceFormat = {
    apiEntitySetName: "TestProfileType396",
    fields: [
      {
        fieldName: "Id",
        fieldType: "Edm.String",
        isArray: false,
        isRequired: true
      },
      {
        fieldName: "ProfileId",
        fieldType: "Edm.String",
        isArray: false,
        isRequired: true
      },
      {
        fieldName: "LastName",
        fieldType: "Edm.String",
        isArray: false,
        isRequired: true
      },
      {
        fieldName: "TestProfileType396",
        fieldType: "Edm.String",
        isArray: false,
        isRequired: true
      },
      {
        fieldName: "SavingAccountBalance",
        fieldType: "Edm.Int32",
        isArray: false,
        isRequired: true
      }
    ],
    largeImage: "\\\\Images\\\\LargeImage",
    mediumImage: "\\\\Images\\\\MediumImage",
    schemaItemTypeLink: "SchemaItemTypeLink",
    smallImage: "\\\\Images\\\\smallImage",
    strongIds: [
      { keyPropertyNames: ["Id", "SavingAccountBalance"], strongIdName: "Id" },
      { keyPropertyNames: ["ProfileId", "LastName"], strongIdName: "ProfileId" }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.profiles.beginCreateOrUpdateAndWait(
    resourceGroupName,
    hubName,
    profileName,
    parameters
  );
  console.log(result);
}

profilesCreateOrUpdate().catch(console.error);
