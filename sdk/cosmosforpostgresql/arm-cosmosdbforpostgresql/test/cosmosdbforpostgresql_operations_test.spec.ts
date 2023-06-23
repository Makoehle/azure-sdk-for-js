/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { CosmosDBForPostgreSQL } from "../src/cosmosDBForPostgreSQL";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("CosmosDBForPostgreSQL test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: CosmosDBForPostgreSQL;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new CosmosDBForPostgreSQL(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";

  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("clusters create test", async function () {
    const res = await client.clusters.beginCreateAndWait(
      resourceGroup,
      resourcename,
      {
        administratorLoginPassword: "*******",
        citusVersion: "11.1",
        coordinatorEnablePublicIpAccess: true,
        coordinatorServerEdition: "GeneralPurpose",
        coordinatorStorageQuotaInMb: 524288,
        coordinatorVCores: 4,
        enableHa: true,
        enableShardsOnCoordinator: false,
        location,
        nodeCount: 3,
        nodeEnablePublicIpAccess: false,
        nodeServerEdition: "MemoryOptimized",
        nodeStorageQuotaInMb: 524288,
        nodeVCores: 8,
        postgresqlVersion: "15",
        preferredPrimaryZone: "1",
        tags: {}
      },
      testPollingOptions);
    assert.equal(res.name, resourcename);
  });

  it("clusters get test", async function () {
    const res = await client.clusters.get(resourceGroup,
      resourcename);
    assert.equal(res.name, resourcename);
  });

  it("clusters list test", async function () {
    const resArray = new Array();
    for await (let item of client.clusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("clusters delete test", async function () {
    const resArray = new Array();
    const res = await client.clusters.beginDeleteAndWait(resourceGroup, resourcename
    )
    for await (let item of client.clusters.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})