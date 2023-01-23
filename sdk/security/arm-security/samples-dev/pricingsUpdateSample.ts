/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Pricing, SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates a provided Microsoft Defender for Cloud pricing configuration in the subscription.
 *
 * @summary Updates a provided Microsoft Defender for Cloud pricing configuration in the subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2022-03-01/examples/Pricings/PutPricingByName_example.json
 */
async function updatePricingOnSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const pricingName = "VirtualMachines";
  const pricing: Pricing = { pricingTier: "Standard", subPlan: "P2" };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.pricings.update(pricingName, pricing);
  console.log(result);
}

updatePricingOnSubscription().catch(console.error);
