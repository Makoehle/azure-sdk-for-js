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
  BenefitUtilizationSummariesListByBillingProfileIdOptionalParams,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists savings plan utilization summaries for billing profile. Supported at grain values: 'Daily' and 'Monthly'.
 *
 * @summary Lists savings plan utilization summaries for billing profile. Supported at grain values: 'Daily' and 'Monthly'.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/BenefitUtilizationSummaries/SavingsPlan-BillingProfile.json
 */
async function savingsPlanUtilizationSummariesBillingProfile() {
  const billingAccountId =
    "c0a00000-0e04-5ee3-000e-f0c6e00000ec:c0a00000-0e04-5ee3-000e-f0c6e00000ec";
  const billingProfileId = "200e5e90-000e-4960-8dcd-8d00a02db000";
  const filter =
    "properties/usageDate ge 2022-10-15 and properties/usageDate le 2022-10-18";
  const options: BenefitUtilizationSummariesListByBillingProfileIdOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.benefitUtilizationSummaries.listByBillingProfileId(
    billingAccountId,
    billingProfileId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  savingsPlanUtilizationSummariesBillingProfile();
}

main().catch(console.error);