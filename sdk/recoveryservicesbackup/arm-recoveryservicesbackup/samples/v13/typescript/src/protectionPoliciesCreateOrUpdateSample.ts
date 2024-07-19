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
  ProtectionPolicyResource,
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureStorage/ProtectionPolicies_CreateOrUpdate_Hardened.json
 */
async function createOrUpdateAzureStorageVaultStandardProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "swaggertestvault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "newPolicyV2";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureStorage",
      schedulePolicy: {
        schedulePolicyType: "SimpleSchedulePolicy",
        scheduleRunFrequency: "Daily",
        scheduleRunTimes: [new Date("2023-07-18T09:30:00.000Z")],
      },
      timeZone: "UTC",
      vaultRetentionPolicy: {
        snapshotRetentionInDays: 5,
        vaultRetention: {
          dailySchedule: {
            retentionDuration: { count: 30, durationType: "Days" },
            retentionTimes: [new Date("2023-07-18T09:30:00.000Z")],
          },
          monthlySchedule: {
            retentionDuration: { count: 60, durationType: "Months" },
            retentionScheduleDaily: {},
            retentionScheduleFormatType: "Weekly",
            retentionScheduleWeekly: {
              daysOfTheWeek: ["Sunday"],
              weeksOfTheMonth: ["First"],
            },
            retentionTimes: [new Date("2023-07-18T09:30:00.000Z")],
          },
          retentionPolicyType: "LongTermRetentionPolicy",
          weeklySchedule: {
            daysOfTheWeek: ["Sunday"],
            retentionDuration: { count: 12, durationType: "Weeks" },
            retentionTimes: [new Date("2023-07-18T09:30:00.000Z")],
          },
          yearlySchedule: {
            monthsOfYear: ["January"],
            retentionDuration: { count: 10, durationType: "Years" },
            retentionScheduleDaily: {},
            retentionScheduleFormatType: "Weekly",
            retentionScheduleWeekly: {
              daysOfTheWeek: ["Sunday"],
              weeksOfTheMonth: ["First"],
            },
            retentionTimes: [new Date("2023-07-18T09:30:00.000Z")],
          },
        },
      },
      workLoadType: "AzureFileShare",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureStorage/ProtectionPolicies_CreateOrUpdate_Daily.json
 */
async function createOrUpdateDailyAzureStorageProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "swaggertestvault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "dailyPolicy2";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureStorage",
      retentionPolicy: {
        dailySchedule: {
          retentionDuration: { count: 5, durationType: "Days" },
          retentionTimes: [new Date("2021-09-29T08:00:00.000Z")],
        },
        monthlySchedule: {
          retentionDuration: { count: 60, durationType: "Months" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [new Date("2021-09-29T08:00:00.000Z")],
        },
        retentionPolicyType: "LongTermRetentionPolicy",
        weeklySchedule: {
          daysOfTheWeek: ["Sunday"],
          retentionDuration: { count: 12, durationType: "Weeks" },
          retentionTimes: [new Date("2021-09-29T08:00:00.000Z")],
        },
        yearlySchedule: {
          monthsOfYear: ["January"],
          retentionDuration: { count: 10, durationType: "Years" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [new Date("2021-09-29T08:00:00.000Z")],
        },
      },
      schedulePolicy: {
        schedulePolicyType: "SimpleSchedulePolicy",
        scheduleRunFrequency: "Daily",
        scheduleRunTimes: [new Date("2021-09-29T08:00:00.000Z")],
      },
      timeZone: "UTC",
      workLoadType: "AzureFileShare",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/V2Policy/IaaS_v2_hourly.json
 */
async function createOrUpdateEnhancedAzureVMProtectionPolicyWithHourlyBackup() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "v2-daily-sample";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureIaasVM",
      instantRpRetentionRangeInDays: 30,
      policyType: "V2",
      retentionPolicy: {
        dailySchedule: {
          retentionDuration: { count: 180, durationType: "Days" },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
        monthlySchedule: {
          retentionDuration: { count: 60, durationType: "Months" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
        retentionPolicyType: "LongTermRetentionPolicy",
        weeklySchedule: {
          daysOfTheWeek: ["Sunday"],
          retentionDuration: { count: 12, durationType: "Weeks" },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
        yearlySchedule: {
          monthsOfYear: ["January"],
          retentionDuration: { count: 10, durationType: "Years" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
      },
      schedulePolicy: {
        hourlySchedule: {
          interval: 4,
          scheduleWindowDuration: 16,
          scheduleWindowStartTime: new Date("2021-12-17T08:00:00Z"),
        },
        schedulePolicyType: "SimpleSchedulePolicyV2",
        scheduleRunFrequency: "Hourly",
      },
      snapshotConsistencyType: "OnlyCrashConsistent",
      timeZone: "India Standard Time",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/V2Policy/IaaS_v2_daily.json
 */
async function createOrUpdateEnhancedAzureVMProtectionPolicyWithDailyBackup() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "v2-daily-sample";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureIaasVM",
      instantRpRetentionRangeInDays: 30,
      policyType: "V2",
      retentionPolicy: {
        dailySchedule: {
          retentionDuration: { count: 180, durationType: "Days" },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
        monthlySchedule: {
          retentionDuration: { count: 60, durationType: "Months" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
        retentionPolicyType: "LongTermRetentionPolicy",
        weeklySchedule: {
          daysOfTheWeek: ["Sunday"],
          retentionDuration: { count: 12, durationType: "Weeks" },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
        yearlySchedule: {
          monthsOfYear: ["January"],
          retentionDuration: { count: 10, durationType: "Years" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [new Date("2021-12-17T08:00:00+00:00")],
        },
      },
      schedulePolicy: {
        dailySchedule: { scheduleRunTimes: [new Date("2018-01-24T10:00:00Z")] },
        schedulePolicyType: "SimpleSchedulePolicyV2",
        scheduleRunFrequency: "Daily",
      },
      snapshotConsistencyType: "OnlyCrashConsistent",
      timeZone: "India Standard Time",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/ProtectionPolicies_CreateOrUpdate_Complex.json
 */
async function createOrUpdateFullAzureVMProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "testPolicy1";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureIaasVM",
      retentionPolicy: {
        monthlySchedule: {
          retentionDuration: { count: 2, durationType: "Months" },
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Wednesday", "Thursday"],
            weeksOfTheMonth: ["First", "Third"],
          },
          retentionTimes: [new Date("2018-01-24T10:00:00Z")],
        },
        retentionPolicyType: "LongTermRetentionPolicy",
        weeklySchedule: {
          daysOfTheWeek: ["Monday", "Wednesday", "Thursday"],
          retentionDuration: { count: 1, durationType: "Weeks" },
          retentionTimes: [new Date("2018-01-24T10:00:00Z")],
        },
        yearlySchedule: {
          monthsOfYear: ["February", "November"],
          retentionDuration: { count: 4, durationType: "Years" },
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Monday", "Thursday"],
            weeksOfTheMonth: ["Fourth"],
          },
          retentionTimes: [new Date("2018-01-24T10:00:00Z")],
        },
      },
      schedulePolicy: {
        schedulePolicyType: "SimpleSchedulePolicy",
        scheduleRunDays: ["Monday", "Wednesday", "Thursday"],
        scheduleRunFrequency: "Weekly",
        scheduleRunTimes: [new Date("2018-01-24T10:00:00Z")],
      },
      timeZone: "Pacific Standard Time",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureWorkload/ProtectionPolicies_CreateOrUpdate_Complex.json
 */
async function createOrUpdateFullAzureWorkloadProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "testPolicy1";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureWorkload",
      settings: { issqlcompression: false, timeZone: "Pacific Standard Time" },
      subProtectionPolicy: [
        {
          policyType: "Full",
          retentionPolicy: {
            monthlySchedule: {
              retentionDuration: { count: 1, durationType: "Months" },
              retentionScheduleFormatType: "Weekly",
              retentionScheduleWeekly: {
                daysOfTheWeek: ["Sunday"],
                weeksOfTheMonth: ["Second"],
              },
              retentionTimes: [new Date("2018-01-24T10:00:00Z")],
            },
            retentionPolicyType: "LongTermRetentionPolicy",
            weeklySchedule: {
              daysOfTheWeek: ["Sunday", "Tuesday"],
              retentionDuration: { count: 2, durationType: "Weeks" },
              retentionTimes: [new Date("2018-01-24T10:00:00Z")],
            },
            yearlySchedule: {
              monthsOfYear: ["January", "June", "December"],
              retentionDuration: { count: 1, durationType: "Years" },
              retentionScheduleFormatType: "Weekly",
              retentionScheduleWeekly: {
                daysOfTheWeek: ["Sunday"],
                weeksOfTheMonth: ["Last"],
              },
              retentionTimes: [new Date("2018-01-24T10:00:00Z")],
            },
          },
          schedulePolicy: {
            schedulePolicyType: "SimpleSchedulePolicy",
            scheduleRunDays: ["Sunday", "Tuesday"],
            scheduleRunFrequency: "Weekly",
            scheduleRunTimes: [new Date("2018-01-24T10:00:00Z")],
          },
        },
        {
          policyType: "Differential",
          retentionPolicy: {
            retentionDuration: { count: 8, durationType: "Days" },
            retentionPolicyType: "SimpleRetentionPolicy",
          },
          schedulePolicy: {
            schedulePolicyType: "SimpleSchedulePolicy",
            scheduleRunDays: ["Friday"],
            scheduleRunFrequency: "Weekly",
            scheduleRunTimes: [new Date("2018-01-24T10:00:00Z")],
          },
        },
        {
          policyType: "Log",
          retentionPolicy: {
            retentionDuration: { count: 7, durationType: "Days" },
            retentionPolicyType: "SimpleRetentionPolicy",
          },
          schedulePolicy: {
            scheduleFrequencyInMins: 60,
            schedulePolicyType: "LogSchedulePolicy",
          },
        },
      ],
      workLoadType: "SQLDataBase",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureStorage/ProtectionPolicies_CreateOrUpdate_Hourly.json
 */
async function createOrUpdateHourlyAzureStorageProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "swaggertestvault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "newPolicy2";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureStorage",
      retentionPolicy: {
        dailySchedule: {
          retentionDuration: { count: 5, durationType: "Days" },
          retentionTimes: [],
        },
        monthlySchedule: {
          retentionDuration: { count: 60, durationType: "Months" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [],
        },
        retentionPolicyType: "LongTermRetentionPolicy",
        weeklySchedule: {
          daysOfTheWeek: ["Sunday"],
          retentionDuration: { count: 12, durationType: "Weeks" },
          retentionTimes: [],
        },
        yearlySchedule: {
          monthsOfYear: ["January"],
          retentionDuration: { count: 10, durationType: "Years" },
          retentionScheduleDaily: {},
          retentionScheduleFormatType: "Weekly",
          retentionScheduleWeekly: {
            daysOfTheWeek: ["Sunday"],
            weeksOfTheMonth: ["First"],
          },
          retentionTimes: [],
        },
      },
      schedulePolicy: {
        hourlySchedule: {
          interval: 4,
          scheduleWindowDuration: 12,
          scheduleWindowStartTime: new Date("2021-09-29T08:00:00.000Z"),
        },
        schedulePolicyType: "SimpleSchedulePolicy",
        scheduleRunFrequency: "Hourly",
      },
      timeZone: "UTC",
      workLoadType: "AzureFileShare",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/ProtectionPolicies_CreateOrUpdate_Simple.json
 */
async function createOrUpdateSimpleAzureVMProtectionPolicy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const policyName = "testPolicy1";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureIaasVM",
      retentionPolicy: {
        dailySchedule: {
          retentionDuration: { count: 1, durationType: "Days" },
          retentionTimes: [new Date("2018-01-24T02:00:00Z")],
        },
        retentionPolicyType: "LongTermRetentionPolicy",
      },
      schedulePolicy: {
        schedulePolicyType: "SimpleSchedulePolicy",
        scheduleRunFrequency: "Daily",
        scheduleRunTimes: [new Date("2018-01-24T02:00:00Z")],
      },
      timeZone: "Pacific Standard Time",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createOrUpdateAzureStorageVaultStandardProtectionPolicy();
  createOrUpdateDailyAzureStorageProtectionPolicy();
  createOrUpdateEnhancedAzureVMProtectionPolicyWithHourlyBackup();
  createOrUpdateEnhancedAzureVMProtectionPolicyWithDailyBackup();
  createOrUpdateFullAzureVMProtectionPolicy();
  createOrUpdateFullAzureWorkloadProtectionPolicy();
  createOrUpdateHourlyAzureStorageProtectionPolicy();
  createOrUpdateSimpleAzureVMProtectionPolicy();
}

main().catch(console.error);
