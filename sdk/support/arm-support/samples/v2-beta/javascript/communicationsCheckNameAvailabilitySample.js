/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftSupport } = require("@azure/arm-support");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Check the availability of a resource name. This API should be used to check the uniqueness of the name for adding a new communication to the support ticket.
 *
 * @summary Check the availability of a resource name. This API should be used to check the uniqueness of the name for adding a new communication to the support ticket.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/preview/2023-06-01-preview/examples/CheckNameAvailabilityForSupportTicketCommunication.json
 */
async function checksWhetherNameIsAvailableForSubscriptionScopedCommunicationResource() {
  const subscriptionId = process.env["SUPPORT_SUBSCRIPTION_ID"] || "subid";
  const supportTicketName = "testticket";
  const checkNameAvailabilityInput = {
    name: "sampleName",
    type: "Microsoft.Support/communications",
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.communications.checkNameAvailability(
    supportTicketName,
    checkNameAvailabilityInput,
  );
  console.log(result);
}

async function main() {
  checksWhetherNameIsAvailableForSubscriptionScopedCommunicationResource();
}

main().catch(console.error);
