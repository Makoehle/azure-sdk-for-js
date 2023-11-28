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
  PreRulesRefreshCountersOptionalParams,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Refresh counters
 *
 * @summary Refresh counters
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PreRules_refreshCounters_MaximumSet_Gen.json
 */
async function preRulesRefreshCountersMaximumSetGen() {
  const globalRulestackName = "lrs1";
  const priority = "1";
  const firewallName = "firewall1";
  const options: PreRulesRefreshCountersOptionalParams = { firewallName };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.preRules.refreshCounters(
    globalRulestackName,
    priority,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Refresh counters
 *
 * @summary Refresh counters
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PreRules_refreshCounters_MinimumSet_Gen.json
 */
async function preRulesRefreshCountersMinimumSetGen() {
  const globalRulestackName = "lrs1";
  const priority = "1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.preRules.refreshCounters(
    globalRulestackName,
    priority
  );
  console.log(result);
}

async function main() {
  preRulesRefreshCountersMaximumSetGen();
  preRulesRefreshCountersMinimumSetGen();
}

main().catch(console.error);
