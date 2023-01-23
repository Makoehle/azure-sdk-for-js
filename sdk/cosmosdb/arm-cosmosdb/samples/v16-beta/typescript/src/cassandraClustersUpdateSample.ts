/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ClusterResource, CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates some of the properties of a managed Cassandra cluster.
 *
 * @summary Updates some of the properties of a managed Cassandra cluster.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBManagedCassandraClusterPatch.json
 */
async function cosmosDbManagedCassandraClusterPatch() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "cassandra-prod-rg";
  const clusterName = "cassandra-prod";
  const body: ClusterResource = {
    properties: {
      authenticationMethod: "None",
      externalGossipCertificates: [
        {
          pem:
            "-----BEGIN CERTIFICATE-----\n...Base64 encoded certificate...\n-----END CERTIFICATE-----"
        }
      ],
      externalSeedNodes: [
        { ipAddress: "10.52.221.2" },
        { ipAddress: "10.52.221.3" },
        { ipAddress: "10.52.221.4" }
      ],
      hoursBetweenBackups: 12
    },
    tags: { owner: "mike" }
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraClusters.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    body
  );
  console.log(result);
}

async function main() {
  cosmosDbManagedCassandraClusterPatch();
}

main().catch(console.error);
