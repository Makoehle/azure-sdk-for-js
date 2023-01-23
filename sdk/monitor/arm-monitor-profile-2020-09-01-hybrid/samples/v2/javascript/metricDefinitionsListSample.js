/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor-profile-2020-09-01-hybrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists the metric definitions for the resource.
 *
 * @summary Lists the metric definitions for the resource.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-01-01/examples/GetMetricDefinitionsApplicationInsights.json
 */
async function getApplicationInsightsMetricDefinitionsWithoutFilter() {
  const resourceUri =
    "subscriptions/182c901a-129a-4f5d-86e4-cc6b294590a2/resourceGroups/hyr-log/providers/microsoft.insights/components/f1-bill/providers/microsoft.insights/metricdefinitions";
  const metricnamespace = "microsoft.insights/components";
  const options = { metricnamespace };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const resArray = new Array();
  for await (let item of client.metricDefinitions.list(resourceUri, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the metric definitions for the resource.
 *
 * @summary Lists the metric definitions for the resource.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-01-01/examples/GetMetricDefinitions.json
 */
async function getMetricDefinitionsWithoutFilter() {
  const resourceUri =
    "subscriptions/07c0b09d-9f69-4e6e-8d05-f59f67299cb2/resourceGroups/Rac46PostSwapRG/providers/Microsoft.Web/sites/alertruleTest/providers/microsoft.insights/metricDefinitions";
  const metricnamespace = "Microsoft.Web/sites";
  const options = { metricnamespace };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const resArray = new Array();
  for await (let item of client.metricDefinitions.list(resourceUri, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the metric definitions for the resource.
 *
 * @summary Lists the metric definitions for the resource.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-01-01/examples/GetMetricDefinitionsMetricClass.json
 */
async function getStorageCacheMetricDefinitionsWithMetricClass() {
  const resourceUri =
    "subscriptions/46841c0e-69c8-4b17-af46-6626ecb15fc2/resourceGroups/adgarntptestrg/providers/Microsoft.StorageCache/caches/adgarntptestcache";
  const metricnamespace = "microsoft.storagecache/caches";
  const options = { metricnamespace };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const resArray = new Array();
  for await (let item of client.metricDefinitions.list(resourceUri, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getApplicationInsightsMetricDefinitionsWithoutFilter();
  getMetricDefinitionsWithoutFilter();
  getStorageCacheMetricDefinitionsWithMetricClass();
}

main().catch(console.error);
