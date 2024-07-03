// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** Load test model. */
export interface TestOutput {
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteriaOutput;
  /** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
  autoStopCriteria?: AutoStopCriteriaOutput;
  /**
   * Secrets can be stored in an Azure Key Vault or any other secret store. If the
   * secret is stored in an Azure Key Vault, the value should be the secret
   * identifier and the type should be AKV_SECRET_URI. If the secret is stored
   * elsewhere, the secret value should be provided directly and the type should be
   * SECRET_VALUE.
   */
  secrets?: Record<string, SecretOutput>;
  /** Certificates metadata. */
  certificate?: CertificateMetadataOutput;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfigurationOutput;
  /** Id of the test run to be marked as baseline to view trends of client-side metrics from recent test runs */
  baselineTestRunId?: string;
  /** The input artifacts for the test. */
  readonly inputArtifacts?: TestInputArtifactsOutput;
  /** Unique test identifier for the load test, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testId: string;
  /** The test description. */
  description?: string;
  /** Display name of a test. */
  displayName?: string;
  /** Subnet ID on which the load test instances should run. */
  subnetId?: string;
  /** Kind of test. */
  kind?: TestKindOutput;
  /** Inject load test engines without deploying public IP for outbound access */
  publicIPDisabled?: boolean;
  /** Type of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityType?: string;
  /** Resource Id of the managed identity referencing the Key vault. */
  keyvaultReferenceIdentityId?: string;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Pass fail criteria for a test. */
export interface PassFailCriteriaOutput {
  /** Map of id and pass fail metrics { id  : pass fail metrics }. */
  passFailMetrics?: Record<string, PassFailMetricOutput>;
}

/** Pass fail metric */
export interface PassFailMetricOutput {
  /** The client metric on which the criteria should be applied. */
  clientMetric?: PFMetricsOutput;
  /**
   * The aggregation function to be applied on the client metric. Allowed functions
   * - ‘percentage’ - for error metric , ‘avg’, percentiles like ‘p50’, ‘p90’, & so on, ‘min’,
   * ‘max’ - for response_time_ms and latency metric, ‘avg’ - for requests_per_sec,
   * ‘count’ - for requests
   */
  aggregate?: PFAgFuncOutput;
  /** The comparison operator. Supported types ‘>’, ‘<’ */
  condition?: string;
  /** Request name for which the Pass fail criteria has to be applied */
  requestName?: string;
  /**
   * The value to compare with the client metric. Allowed values - ‘error : [0.0 ,
   * 100.0] unit- % ’, response_time_ms and latency : any integer value unit- ms.
   */
  value?: number;
  /** Action taken after the threshold is met. Default is ‘continue’. */
  action?: PFActionOutput;
  /** The actual value of the client metric for the test run. */
  readonly actualValue?: number;
  /** Outcome of the test run. */
  readonly result?: PFResultOutput;
}

/** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
export interface AutoStopCriteriaOutput {
  /** Whether auto-stop should be disabled. The default value is false. */
  autoStopDisabled?: boolean;
  /** Threshold percentage of errors on which test run should be automatically stopped. Allowed values are in range of 0.0-100.0 */
  errorRate?: number;
  /** Time window during which the error percentage should be evaluated in seconds. */
  errorRateTimeWindowInSeconds?: number;
}

/** Secret */
export interface SecretOutput {
  /** The value of the secret for the respective type */
  value?: string;
  /** Type of secret */
  type?: SecretTypeOutput;
}

/** Certificates metadata */
export interface CertificateMetadataOutput {
  /** The value of the certificate for respective type */
  value?: string;
  /** Type of certificate */
  type?: CertificateTypeOutput;
  /** Name of the certificate. */
  name?: string;
}

/** Configurations for the load test. */
export interface LoadTestConfigurationOutput {
  /** The number of engine instances to execute load test. Supported values are in range of 1-400. Required for creating a new test. */
  engineInstances?: number;
  /**
   * If false, Azure Load Testing copies and processes your input files unmodified
   * across all test engine instances. If true, Azure Load Testing splits the CSV
   * input data evenly across all engine instances. If you provide multiple CSV
   * files, each file will be split evenly.
   */
  splitAllCSVs?: boolean;
  /**
   * If true, optionalLoadTestConfig is required and JMX script for the load test is
   * not required to upload.
   */
  quickStartTest?: boolean;
  /** Configuration for quick load test */
  optionalLoadTestConfig?: OptionalLoadTestConfigOutput;
  /** Region distribution configuration for the load test. */
  regionalLoadTestConfig?: Array<RegionalConfigurationOutput>;
}

/** Configuration for quick load test */
export interface OptionalLoadTestConfigOutput {
  /** Test URL. Provide the complete HTTP URL. For example, https://contoso-app.azurewebsites.net/login */
  endpointUrl?: string;
  /** Target throughput (requests per second). This may not be necessarily achieved. The actual throughput will be lower if the application is not capable of handling it. */
  requestsPerSecond?: number;
  /** Maximum response time in milliseconds of the API/endpoint. */
  maxResponseTimeInMs?: number;
  /** No of concurrent virtual users. */
  virtualUsers?: number;
  /** Ramp up time in seconds. */
  rampUpTime?: number;
  /** Test run duration in seconds. */
  duration?: number;
}

/** Region distribution configuration for the load test. */
export interface RegionalConfigurationOutput {
  /**   The number of engine instances to execute load test in specified region. Supported values are in range of 1-400. */
  engineInstances: number;
  /**
   * Azure region name.
   * The region name should of format accepted by ARM, and should be a region supported by Azure Load Testing. For example, East US should be passed as "eastus".
   * The region name must match one of the strings in the "Name" column returned from running the "az account list-locations -o table" Azure CLI command.
   */
  region: string;
}

/** The input artifacts for the test. */
export interface TestInputArtifactsOutput {
  /** File info */
  configFileInfo?: TestFileInfoOutput;
  /** File info */
  testScriptFileInfo?: TestFileInfoOutput;
  /** File info */
  userPropFileInfo?: TestFileInfoOutput;
  /** File info */
  inputArtifactsZipFileInfo?: TestFileInfoOutput;
  /** The config json file for url based test */
  urlTestConfigFileInfo?: TestFileInfoOutput;
  /** Additional supported files for the test run */
  readonly additionalFileInfo?: Array<TestFileInfoOutput>;
}

/** Test file info. */
export interface TestFileInfoOutput {
  /** Name of the file. */
  fileName: string;
  /** File URL. */
  readonly url?: string;
  /** File type */
  readonly fileType?: FileTypeOutput;
  /** Expiry time of the file (RFC 3339 literal format) */
  readonly expireDateTime?: string;
  /** Validation status of the file */
  readonly validationStatus?: FileStatusOutput;
  /** Validation failure error details */
  readonly validationFailureDetails?: string;
}

/** Test app components */
export interface TestAppComponentsOutput {
  /**
   * Azure resource collection { resource id (fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName})
   * : resource object }
   */
  components: Record<string, AppComponentOutput>;
  /** Test identifier */
  readonly testId?: string;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** An Azure resource object (Refer azure generic resource model :https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id#genericresource) */
export interface AppComponentOutput {
  /** fully qualified resource Id e.g subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName} */
  readonly resourceId: string;
  /** Azure resource name, required while creating the app component. */
  resourceName: string;
  /** Azure resource type, required while creating the app component. */
  resourceType: string;
  /** Azure resource display name */
  displayName?: string;
  /** Resource group name of the Azure resource */
  readonly resourceGroup?: string;
  /** Subscription Id of the Azure resource */
  readonly subscriptionId?: string;
  /** Kind of Azure resource type */
  kind?: string;
}

/** Test server metrics configuration */
export interface TestServerMetricConfigOutput {
  /** Test identifier */
  readonly testId?: string;
  /**
   * Azure resource metrics collection {metric id : metrics object} (Refer :
   * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition
   * for metric id).
   */
  metrics: Record<string, ResourceMetricOutput>;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/**
 * Associated metric definition for particular metrics of the azure resource (
 * Refer :
 * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition).
 */
export interface ResourceMetricOutput {
  /** Unique name for metric. */
  readonly id?: string;
  /** Azure resource id. */
  resourceId: string;
  /** Metric name space. */
  metricNamespace: string;
  /** Metric description. */
  displayDescription?: string;
  /** The invariant value of metric name */
  name: string;
  /** Metric aggregation. */
  aggregation: string;
  /** Metric unit. */
  unit?: string;
  /** Azure resource type. */
  resourceType: string;
}

/** Load test run model */
export interface TestRunOutput {
  /** Unique test run identifier for the load test run, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testRunId: string;
  /** Pass fail criteria for a test. */
  passFailCriteria?: PassFailCriteriaOutput;
  /** Auto stop criteria for a test. This will automatically stop a load test if the error percentage is high for a certain time window. */
  autoStopCriteria?: AutoStopCriteriaOutput;
  /**
   * Secrets can be stored in an Azure Key Vault or any other secret store. If the
   * secret is stored in an Azure Key Vault, the value should be the secret
   * identifier and the type should be AKV_SECRET_URI. If the secret is stored
   * elsewhere, the secret value should be provided directly and the type should be
   * SECRET_VALUE.
   */
  secrets?: Record<string, SecretOutput>;
  /** Certificates metadata */
  certificate?: CertificateMetadataOutput;
  /** Environment variables which are defined as a set of <name,value> pairs. */
  environmentVariables?: Record<string, string>;
  /** Error details if there is any failure in load test run */
  readonly errorDetails?: Array<ErrorDetailsOutput>;
  /**
   * Test run statistics. Key is the sampler name and value is the set of statistics for performance metrics like response time, throughput, etc. from the load test run.
   * The sampler name is the same as the name mentioned in the test script.
   * Sampler name "Total" represents the aggregated statistics of all the samplers.
   */
  readonly testRunStatistics?: Record<string, TestRunStatisticsOutput>;
  /**
   * Regional statistics. Key is the Azure region name and value is the test run statistics.
   * The region name should of format accepted by ARM, and should be a region supported by Azure Load Testing. For example, East US should be passed as "eastus".
   * The region name must match one of the strings in the "Name" column returned from running the "az account list-locations -o table" Azure CLI command.
   */
  readonly regionalStatistics?: Record<string, TestRunStatisticsOutput>;
  /** The load test configuration. */
  loadTestConfiguration?: LoadTestConfigurationOutput;
  /** Collection of test run artifacts */
  readonly testArtifacts?: TestRunArtifactsOutput;
  /** Test result for pass/Fail criteria used during the test run. */
  readonly testResult?: PFTestResultOutput;
  /** Number of virtual users, for which test has been run. */
  readonly virtualUsers?: number;
  /** Display name of a testRun. */
  displayName?: string;
  /** Associated test Id. */
  testId?: string;
  /** The test run description. */
  description?: string;
  /** The test run status. */
  readonly status?: StatusOutput;
  /** The test run start DateTime(RFC 3339 literal format). */
  readonly startDateTime?: string;
  /** The test run end DateTime(RFC 3339 literal format). */
  readonly endDateTime?: string;
  /** Test run initiated time. */
  readonly executedDateTime?: string;
  /** Portal url. */
  readonly portalUrl?: string;
  /** Test run duration in milliseconds. */
  readonly duration?: number;
  /** Subnet ID on which the load test instances should run. */
  readonly subnetId?: string;
  /** Type of test. */
  readonly kind?: TestKindOutput;
  /** Request data collection level for test run */
  requestDataLevel?: RequestDataLevelOutput;
  /** Enable or disable debug level logging. True if debug logs are enabled for the test run. False otherwise */
  debugLogsEnabled?: boolean;
  /** Inject load test engines without deploying public IP for outbound access */
  readonly publicIPDisabled?: boolean;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Error details if there is any failure in load test run */
export interface ErrorDetailsOutput {
  /** Error details in case test run was not successfully run. */
  readonly message?: string;
}

/** Test run statistics. */
export interface TestRunStatisticsOutput {
  /** Transaction name. */
  readonly transaction?: string;
  /** Sampler count. */
  readonly sampleCount?: number;
  /** Error count. */
  readonly errorCount?: number;
  /** Error percentage. */
  readonly errorPct?: number;
  /** Mean response time. */
  readonly meanResTime?: number;
  /** Median response time. */
  readonly medianResTime?: number;
  /** Max response time. */
  readonly maxResTime?: number;
  /** Minimum response time. */
  readonly minResTime?: number;
  /** 90 percentile response time. */
  readonly pct1ResTime?: number;
  /** 95 percentile response time. */
  readonly pct2ResTime?: number;
  /** 99 percentile response time. */
  readonly pct3ResTime?: number;
  /** 75 percentile response time. */
  readonly pct75ResTime?: number;
  /** 96 percentile response time. */
  readonly pct96ResTime?: number;
  /** 97 percentile response time. */
  readonly pct97ResTime?: number;
  /** 98 percentile response time. */
  readonly pct98ResTime?: number;
  /** 99.9 percentile response time. */
  readonly pct999ResTime?: number;
  /** 99.99 percentile response time. */
  readonly pct9999ResTime?: number;
  /** Throughput. */
  readonly throughput?: number;
  /** Received network bytes. */
  readonly receivedKBytesPerSec?: number;
  /** Send network bytes. */
  readonly sentKBytesPerSec?: number;
}

/** Collection of test run artifacts */
export interface TestRunArtifactsOutput {
  /** The input artifacts for the test run. */
  readonly inputArtifacts?: TestRunInputArtifactsOutput;
  /** The output artifacts for the test run. */
  outputArtifacts?: TestRunOutputArtifactsOutput;
}

/** The input artifacts for the test run. */
export interface TestRunInputArtifactsOutput {
  /** File info */
  configFileInfo?: TestRunFileInfoOutput;
  /** File info */
  testScriptFileInfo?: TestRunFileInfoOutput;
  /** File info */
  userPropFileInfo?: TestRunFileInfoOutput;
  /** File info */
  inputArtifactsZipFileInfo?: TestRunFileInfoOutput;
  /** The config json file for url based test */
  urlTestConfigFileInfo?: TestRunFileInfoOutput;
  /** Additional supported files for the test run */
  readonly additionalFileInfo?: Array<TestRunFileInfoOutput>;
}

/** Test run file info. */
export interface TestRunFileInfoOutput {
  /** Name of the file. */
  fileName: string;
  /** File URL. */
  readonly url?: string;
  /** File type */
  readonly fileType?: FileTypeOutput;
  /** Expiry time of the file (RFC 3339 literal format) */
  readonly expireDateTime?: string;
  /** Validation status of the file */
  readonly validationStatus?: FileStatusOutput;
  /** Validation failure error details */
  readonly validationFailureDetails?: string;
}

/** The output artifacts for the test run. */
export interface TestRunOutputArtifactsOutput {
  /** File info */
  resultFileInfo?: TestRunFileInfoOutput;
  /** File info */
  logsFileInfo?: TestRunFileInfoOutput;
  /** The container for test run artifacts. */
  artifactsContainerInfo?: ArtifactsContainerInfoOutput;
  /** The report file for the test run. */
  reportFileInfo?: TestRunFileInfoOutput;
}

/** Artifacts container info. */
export interface ArtifactsContainerInfoOutput {
  /** This is a SAS URI to an Azure Storage Container that contains the test run artifacts. */
  url?: string;
  /** Expiry time of the container (RFC 3339 literal format) */
  expireDateTime?: string;
}

/** Represents collection of metric namespaces. */
export interface MetricNamespaceCollectionOutput {
  /** The values for the metric namespaces. */
  value: Array<MetricNamespaceOutput>;
}

/** Metric namespace class specifies the metadata for a metric namespace. */
export interface MetricNamespaceOutput {
  /** The namespace description. */
  description?: string;
  /** The metric namespace name. */
  name?: string;
}

/** Represents collection of metric definitions. */
export interface MetricDefinitionCollectionOutput {
  /** the values for the metric definitions. */
  value: Array<MetricDefinitionOutput>;
}

/** Metric definition */
export interface MetricDefinitionOutput {
  /** List of dimensions */
  dimensions?: Array<NameAndDescOutput>;
  /** The metric description */
  description?: string;
  /** The metric name */
  name?: string;
  /** The namespace the metric belongs to. */
  namespace?: string;
  /** The primary aggregation type value defining how to use the values for display. */
  primaryAggregationType?: AggregationTypeOutput;
  /** The collection of what all aggregation types are supported. */
  supportedAggregationTypes?: string[];
  /** The unit of the metric. */
  unit?: MetricUnitOutput;
  /**
   * Metric availability specifies the time grain (aggregation interval or
   * frequency).
   */
  metricAvailabilities?: Array<MetricAvailabilityOutput>;
}

/** The name and description */
export interface NameAndDescOutput {
  /** The description */
  description?: string;
  /** The name */
  name?: string;
}

/** Metric availability specifies the time grain (aggregation interval or frequency) */
export interface MetricAvailabilityOutput {
  /**
   * The time grain specifies the aggregation interval for the metric. Expressed as
   * a duration 'PT1M', 'PT1H', etc.
   */
  timeGrain?: TimeGrainOutput;
}

/** The time series returned when a data query is performed. */
export interface TimeSeriesElementOutput {
  /** An array of data points representing the metric values. */
  data?: Array<MetricValueOutput>;
  /** The dimension values */
  dimensionValues?: Array<DimensionValueOutput>;
}

/** Represents a metric value. */
export interface MetricValueOutput {
  /** The timestamp for the metric value in RFC 3339 format. */
  timestamp?: string;
  /** The metric value. */
  value?: number;
}

/** Represents a metric dimension value. */
export interface DimensionValueOutput {
  /** The name of the dimension. */
  name?: string;
  /** The value of the dimension. */
  value?: string;
}

/** Metrics dimension values. */
export interface DimensionValueListOutput {
  /** The dimension name */
  readonly name?: string;
  /** The dimension value */
  value?: string[];
  /** Link for the next set of values in case of paginated results, if applicable. */
  nextLink?: string;
}

/** Test run app component */
export interface TestRunAppComponentsOutput {
  /**
   * Azure resource collection { resource id (fully qualified resource Id e.g
   * subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.LoadTestService/loadtests/{resName})
   * : resource object }
   */
  components: Record<string, AppComponentOutput>;
  /** Test run identifier */
  readonly testRunId?: string;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Test run server metrics configuration */
export interface TestRunServerMetricConfigOutput {
  /** Test run identifier */
  readonly testRunId?: string;
  /**
   * Azure resource metrics collection {metric id : metrics object} (Refer :
   * https://docs.microsoft.com/en-us/rest/api/monitor/metric-definitions/list#metricdefinition
   * for metric id).
   */
  metrics?: Record<string, ResourceMetricOutput>;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** The Test Profile Model. A Test Profile resource enables you to set up a test profile which contains various configurations for a supported resource type and a load test to execute on that resource. */
export interface TestProfileOutput {
  /** Unique identifier for the test profile, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testProfileId: string;
  /** Display name of the test profile. */
  displayName?: string;
  /** Description for the test profile. */
  description?: string;
  /** Associated test ID for the test profile. This property is required for creating a Test Profile and it's not allowed to be updated. */
  testId?: string;
  /** Target resource ID on which the test profile is created. This property is required for creating a Test Profile and it's not allowed to be updated. */
  targetResourceId?: string;
  /** Configurations of the target resource on which testing would be done. */
  targetResourceConfigurations?: TargetResourceConfigurationsOutput;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Configurations of a target resource. This varies with the kind of resource. */
export interface TargetResourceConfigurationsOutputParent {
  kind: ResourceKindOutput;
}

/** Configurations for a Function App using Flex Consumption Plan. */
export interface FunctionFlexConsumptionTargetResourceConfigurationsOutput
  extends TargetResourceConfigurationsOutputParent {
  /**
   * The kind value to use when providing configuration.
   * This should typically be not changed from its value.
   */
  kind: "FunctionsFlexConsumption";
  /** A map of configurations for a Function app using Flex Consumption Plan. */
  configurations?: Record<
    string,
    FunctionFlexConsumptionResourceConfigurationOutput
  >;
}

/** Resource configuration instance for a Flex Consumption based Azure Function App. */
export interface FunctionFlexConsumptionResourceConfigurationOutput {
  /** Memory size of the instance. Supported values are 2048, 4096. */
  instanceMemoryMB: number;
  /** HTTP Concurrency for the function app. */
  httpConcurrency: number;
}

/** The Test Profile Run Model. Test Profile Run resource enables you to instantiate an already created test profile and run load tests to get recommendations on the optimal configuration for the target resource. */
export interface TestProfileRunOutput {
  /** Unique identifier for the test profile run, must contain only lower-case alphabetic, numeric, underscore or hyphen characters. */
  readonly testProfileRunId: string;
  /** Display name for the test profile run. */
  displayName?: string;
  /** The test profile run description */
  description?: string;
  /** Associated test profile ID for the test profile run. This is required to create a test profile run and can't be updated. */
  testProfileId?: string;
  /** Target resource ID on which the test profile run is created */
  readonly targetResourceId?: string;
  /** Configurations of the target resource on which the test profile ran. */
  readonly targetResourceConfigurations?: TargetResourceConfigurationsOutput;
  /** The test profile run status. */
  readonly status?: TestProfileRunStatusOutput;
  /** Error details if there is any failure in test profile run. These errors are specific to the Test Profile Run. */
  readonly errorDetails?: Array<ErrorDetailsOutput>;
  /** The test profile run start DateTime(RFC 3339 literal format). */
  readonly startDateTime?: string;
  /** The test profile run end DateTime(RFC 3339 literal format). */
  readonly endDateTime?: string;
  /** Test profile run duration in seconds. */
  readonly durationInSeconds?: number;
  /**
   * Details of the test runs ran as part of the test profile run.
   * Key is the testRunId of the corresponding testRun.
   */
  readonly testRunDetails?: Record<string, TestRunDetailOutput>;
  /** Recommendations provided based on a successful test profile run. */
  readonly recommendations?: Array<TestProfileRunRecommendationOutput>;
  /** The creation datetime(RFC 3339 literal format). */
  readonly createdDateTime?: string;
  /** The user that created. */
  readonly createdBy?: string;
  /** The last Modified datetime(RFC 3339 literal format). */
  readonly lastModifiedDateTime?: string;
  /** The user that last modified. */
  readonly lastModifiedBy?: string;
}

/** Details of a particular test run for a test profile run. */
export interface TestRunDetailOutput {
  /** Status of the test run. */
  status: StatusOutput;
  /** ID of the configuration on which the test ran. */
  configurationId: string;
  /** Key value pair of extra properties associated with the test run. */
  properties: Record<string, string>;
}

/** A recommendation object that provides a list of configuration that optimizes its category. */
export interface TestProfileRunRecommendationOutput {
  /** Category of the recommendation. */
  category: RecommendationCategoryOutput;
  /** List of configurations IDs for which the recommendation is applicable. These are a subset of the provided target resource configurations. */
  configurations?: string[];
}

/** Configurations of a target resource. This varies with the kind of resource. */
export type TargetResourceConfigurationsOutput =
  | TargetResourceConfigurationsOutputParent
  | FunctionFlexConsumptionTargetResourceConfigurationsOutput;
/** Alias for PFMetricsOutput */
export type PFMetricsOutput = string;
/** Alias for PFAgFuncOutput */
export type PFAgFuncOutput = string;
/** Alias for PFActionOutput */
export type PFActionOutput = string;
/** Alias for PFResultOutput */
export type PFResultOutput = string;
/** Alias for SecretTypeOutput */
export type SecretTypeOutput = string;
/** Alias for CertificateTypeOutput */
export type CertificateTypeOutput = string;
/** Alias for FileTypeOutput */
export type FileTypeOutput = string;
/** Alias for FileStatusOutput */
export type FileStatusOutput = string;
/** Alias for TestKindOutput */
export type TestKindOutput = string;
/** Paged collection of Test items */
export type PagedTestOutput = Paged<TestOutput>;
/** Paged collection of TestFileInfo items */
export type PagedTestFileInfoOutput = Paged<TestFileInfoOutput>;
/** Alias for PFTestResultOutput */
export type PFTestResultOutput = string;
/** Alias for StatusOutput */
export type StatusOutput = string;
/** Alias for RequestDataLevelOutput */
export type RequestDataLevelOutput = string;
/** Paged collection of TestRun items */
export type PagedTestRunOutput = Paged<TestRunOutput>;
/** Alias for AggregationTypeOutput */
export type AggregationTypeOutput = string;
/** Alias for MetricUnitOutput */
export type MetricUnitOutput = string;
/** Alias for TimeGrainOutput */
export type TimeGrainOutput = string;
/** The response to a metrics query. */
export type MetricsOutput = Paged<TimeSeriesElementOutput>;
/** Alias for ResourceKindOutput */
export type ResourceKindOutput = string;
/** Paged collection of TestProfile items */
export type PagedTestProfileOutput = Paged<TestProfileOutput>;
/** Alias for TestProfileRunStatusOutput */
export type TestProfileRunStatusOutput = string;
/** Alias for RecommendationCategoryOutput */
export type RecommendationCategoryOutput = string;
/** Paged collection of TestProfileRun items */
export type PagedTestProfileRunOutput = Paged<TestProfileRunOutput>;
