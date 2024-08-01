// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LoadTestAdministrationCreateOrUpdateTest200Response,
  LoadTestAdministrationCreateOrUpdateTest201Response,
  LoadTestAdministrationCreateOrUpdateTestDefaultResponse,
  LoadTestAdministrationDeleteTest204Response,
  LoadTestAdministrationDeleteTestDefaultResponse,
  LoadTestAdministrationGetTest200Response,
  LoadTestAdministrationGetTestDefaultResponse,
  LoadTestAdministrationListTests200Response,
  LoadTestAdministrationListTestsDefaultResponse,
  LoadTestAdministrationUploadTestFile201Response,
  LoadTestAdministrationUploadTestFileDefaultResponse,
  LoadTestAdministrationGetTestFile200Response,
  LoadTestAdministrationGetTestFileDefaultResponse,
  LoadTestAdministrationDeleteTestFile204Response,
  LoadTestAdministrationDeleteTestFileDefaultResponse,
  LoadTestAdministrationListTestFiles200Response,
  LoadTestAdministrationListTestFilesDefaultResponse,
  LoadTestAdministrationCreateOrUpdateAppComponents200Response,
  LoadTestAdministrationCreateOrUpdateAppComponents201Response,
  LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse,
  LoadTestAdministrationGetAppComponents200Response,
  LoadTestAdministrationGetAppComponentsDefaultResponse,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response,
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse,
  LoadTestAdministrationGetServerMetricsConfig200Response,
  LoadTestAdministrationGetServerMetricsConfigDefaultResponse,
  LoadTestRunGetTestRun200Response,
  LoadTestRunGetTestRunDefaultResponse,
  LoadTestRunCreateOrUpdateTestRun200Response,
  LoadTestRunCreateOrUpdateTestRun201Response,
  LoadTestRunCreateOrUpdateTestRunDefaultResponse,
  LoadTestRunDeleteTestRun204Response,
  LoadTestRunDeleteTestRunDefaultResponse,
  LoadTestRunListTestRuns200Response,
  LoadTestRunListTestRunsDefaultResponse,
  LoadTestRunGetTestRunFile200Response,
  LoadTestRunGetTestRunFileDefaultResponse,
  LoadTestRunStop200Response,
  LoadTestRunStopDefaultResponse,
  LoadTestRunListMetricNamespaces200Response,
  LoadTestRunListMetricNamespacesDefaultResponse,
  LoadTestRunListMetricDefinitions200Response,
  LoadTestRunListMetricDefinitionsDefaultResponse,
  LoadTestRunListMetrics200Response,
  LoadTestRunListMetricsDefaultResponse,
  LoadTestRunListMetricDimensionValues200Response,
  LoadTestRunListMetricDimensionValuesDefaultResponse,
  LoadTestRunCreateOrUpdateAppComponents200Response,
  LoadTestRunCreateOrUpdateAppComponents201Response,
  LoadTestRunCreateOrUpdateAppComponentsDefaultResponse,
  LoadTestRunGetAppComponents200Response,
  LoadTestRunGetAppComponentsDefaultResponse,
  LoadTestRunCreateOrUpdateServerMetricsConfig200Response,
  LoadTestRunCreateOrUpdateServerMetricsConfig201Response,
  LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse,
  LoadTestRunGetServerMetricsConfig200Response,
  LoadTestRunGetServerMetricsConfigDefaultResponse,
  TestProfileAdministrationCreateOrUpdateTestProfile200Response,
  TestProfileAdministrationCreateOrUpdateTestProfile201Response,
  TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse,
  TestProfileAdministrationDeleteTestProfile204Response,
  TestProfileAdministrationDeleteTestProfileDefaultResponse,
  TestProfileAdministrationGetTestProfile200Response,
  TestProfileAdministrationGetTestProfileDefaultResponse,
  TestProfileAdministrationListTestProfiles200Response,
  TestProfileAdministrationListTestProfilesDefaultResponse,
  TestProfileRunAdministrationGetTestProfileRun200Response,
  TestProfileRunAdministrationGetTestProfileRunDefaultResponse,
  TestProfileRunAdministrationCreateOrUpdateTestProfileRun200Response,
  TestProfileRunAdministrationCreateOrUpdateTestProfileRun201Response,
  TestProfileRunAdministrationCreateOrUpdateTestProfileRunDefaultResponse,
  TestProfileRunAdministrationDeleteTestProfileRun204Response,
  TestProfileRunAdministrationDeleteTestProfileRunDefaultResponse,
  TestProfileRunAdministrationStop200Response,
  TestProfileRunAdministrationStopDefaultResponse,
  TestProfileRunAdministrationListTestProfileRuns200Response,
  TestProfileRunAdministrationListTestProfileRunsDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "PATCH /tests/{testId}": ["200", "201"],
  "DELETE /tests/{testId}": ["204"],
  "GET /tests/{testId}": ["200"],
  "GET /tests": ["200"],
  "PUT /tests/{testId}/files/{fileName}": ["201"],
  "GET /tests/{testId}/files/{fileName}": ["200"],
  "DELETE /tests/{testId}/files/{fileName}": ["204"],
  "GET /tests/{testId}/files": ["200"],
  "PATCH /tests/{testId}/app-components": ["200", "201"],
  "GET /tests/{testId}/app-components": ["200"],
  "PATCH /tests/{testId}/server-metrics-config": ["200", "201"],
  "GET /tests/{testId}/server-metrics-config": ["200"],
  "GET /test-runs/{testRunId}": ["200"],
  "PATCH /test-runs/{testRunId}": ["200", "201"],
  "DELETE /test-runs/{testRunId}": ["204"],
  "GET /test-runs": ["200"],
  "GET /test-runs/{testRunId}/files/{fileName}": ["200"],
  "POST /test-runs/{testRunId}:stop": ["200"],
  "GET /test-runs/{testRunId}/metric-namespaces": ["200"],
  "GET /test-runs/{testRunId}/metric-definitions": ["200"],
  "POST /test-runs/{testRunId}/metrics": ["200"],
  "GET /test-runs/{testRunId}/metric-dimensions/{name}/values": ["200"],
  "PATCH /test-runs/{testRunId}/app-components": ["200", "201"],
  "GET /test-runs/{testRunId}/app-components": ["200"],
  "PATCH /test-runs/{testRunId}/server-metrics-config": ["200", "201"],
  "GET /test-runs/{testRunId}/server-metrics-config": ["200"],
  "PATCH /test-profiles/{testProfileId}": ["200", "201"],
  "DELETE /test-profiles/{testProfileId}": ["204"],
  "GET /test-profiles/{testProfileId}": ["200"],
  "GET /test-profiles": ["200"],
  "GET /test-profile-runs/{testProfileRunId}": ["200"],
  "PATCH /test-profile-runs/{testProfileRunId}": ["200", "201"],
  "DELETE /test-profile-runs/{testProfileRunId}": ["204"],
  "POST /test-profile-runs/{testProfileRunId}:stop": ["200"],
  "GET /test-profile-runs": ["200"],
};

export function isUnexpected(
  response:
    | LoadTestAdministrationCreateOrUpdateTest200Response
    | LoadTestAdministrationCreateOrUpdateTest201Response
    | LoadTestAdministrationCreateOrUpdateTestDefaultResponse,
): response is LoadTestAdministrationCreateOrUpdateTestDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationDeleteTest204Response
    | LoadTestAdministrationDeleteTestDefaultResponse,
): response is LoadTestAdministrationDeleteTestDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationGetTest200Response
    | LoadTestAdministrationGetTestDefaultResponse,
): response is LoadTestAdministrationGetTestDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationListTests200Response
    | LoadTestAdministrationListTestsDefaultResponse,
): response is LoadTestAdministrationListTestsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationUploadTestFile201Response
    | LoadTestAdministrationUploadTestFileDefaultResponse,
): response is LoadTestAdministrationUploadTestFileDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationGetTestFile200Response
    | LoadTestAdministrationGetTestFileDefaultResponse,
): response is LoadTestAdministrationGetTestFileDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationDeleteTestFile204Response
    | LoadTestAdministrationDeleteTestFileDefaultResponse,
): response is LoadTestAdministrationDeleteTestFileDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationListTestFiles200Response
    | LoadTestAdministrationListTestFilesDefaultResponse,
): response is LoadTestAdministrationListTestFilesDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationCreateOrUpdateAppComponents200Response
    | LoadTestAdministrationCreateOrUpdateAppComponents201Response
    | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse,
): response is LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationGetAppComponents200Response
    | LoadTestAdministrationGetAppComponentsDefaultResponse,
): response is LoadTestAdministrationGetAppComponentsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse,
): response is LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationGetServerMetricsConfig200Response
    | LoadTestAdministrationGetServerMetricsConfigDefaultResponse,
): response is LoadTestAdministrationGetServerMetricsConfigDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunGetTestRun200Response
    | LoadTestRunGetTestRunDefaultResponse,
): response is LoadTestRunGetTestRunDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunCreateOrUpdateTestRun200Response
    | LoadTestRunCreateOrUpdateTestRun201Response
    | LoadTestRunCreateOrUpdateTestRunDefaultResponse,
): response is LoadTestRunCreateOrUpdateTestRunDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunDeleteTestRun204Response
    | LoadTestRunDeleteTestRunDefaultResponse,
): response is LoadTestRunDeleteTestRunDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunListTestRuns200Response
    | LoadTestRunListTestRunsDefaultResponse,
): response is LoadTestRunListTestRunsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunGetTestRunFile200Response
    | LoadTestRunGetTestRunFileDefaultResponse,
): response is LoadTestRunGetTestRunFileDefaultResponse;
export function isUnexpected(
  response: LoadTestRunStop200Response | LoadTestRunStopDefaultResponse,
): response is LoadTestRunStopDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunListMetricNamespaces200Response
    | LoadTestRunListMetricNamespacesDefaultResponse,
): response is LoadTestRunListMetricNamespacesDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunListMetricDefinitions200Response
    | LoadTestRunListMetricDefinitionsDefaultResponse,
): response is LoadTestRunListMetricDefinitionsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunListMetrics200Response
    | LoadTestRunListMetricsDefaultResponse,
): response is LoadTestRunListMetricsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunListMetricDimensionValues200Response
    | LoadTestRunListMetricDimensionValuesDefaultResponse,
): response is LoadTestRunListMetricDimensionValuesDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunCreateOrUpdateAppComponents200Response
    | LoadTestRunCreateOrUpdateAppComponents201Response
    | LoadTestRunCreateOrUpdateAppComponentsDefaultResponse,
): response is LoadTestRunCreateOrUpdateAppComponentsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunGetAppComponents200Response
    | LoadTestRunGetAppComponentsDefaultResponse,
): response is LoadTestRunGetAppComponentsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunCreateOrUpdateServerMetricsConfig200Response
    | LoadTestRunCreateOrUpdateServerMetricsConfig201Response
    | LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse,
): response is LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestRunGetServerMetricsConfig200Response
    | LoadTestRunGetServerMetricsConfigDefaultResponse,
): response is LoadTestRunGetServerMetricsConfigDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileAdministrationCreateOrUpdateTestProfile200Response
    | TestProfileAdministrationCreateOrUpdateTestProfile201Response
    | TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse,
): response is TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileAdministrationDeleteTestProfile204Response
    | TestProfileAdministrationDeleteTestProfileDefaultResponse,
): response is TestProfileAdministrationDeleteTestProfileDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileAdministrationGetTestProfile200Response
    | TestProfileAdministrationGetTestProfileDefaultResponse,
): response is TestProfileAdministrationGetTestProfileDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileAdministrationListTestProfiles200Response
    | TestProfileAdministrationListTestProfilesDefaultResponse,
): response is TestProfileAdministrationListTestProfilesDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileRunAdministrationGetTestProfileRun200Response
    | TestProfileRunAdministrationGetTestProfileRunDefaultResponse,
): response is TestProfileRunAdministrationGetTestProfileRunDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileRunAdministrationCreateOrUpdateTestProfileRun200Response
    | TestProfileRunAdministrationCreateOrUpdateTestProfileRun201Response
    | TestProfileRunAdministrationCreateOrUpdateTestProfileRunDefaultResponse,
): response is TestProfileRunAdministrationCreateOrUpdateTestProfileRunDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileRunAdministrationDeleteTestProfileRun204Response
    | TestProfileRunAdministrationDeleteTestProfileRunDefaultResponse,
): response is TestProfileRunAdministrationDeleteTestProfileRunDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileRunAdministrationStop200Response
    | TestProfileRunAdministrationStopDefaultResponse,
): response is TestProfileRunAdministrationStopDefaultResponse;
export function isUnexpected(
  response:
    | TestProfileRunAdministrationListTestProfileRuns200Response
    | TestProfileRunAdministrationListTestProfileRunsDefaultResponse,
): response is TestProfileRunAdministrationListTestProfileRunsDefaultResponse;
export function isUnexpected(
  response:
    | LoadTestAdministrationCreateOrUpdateTest200Response
    | LoadTestAdministrationCreateOrUpdateTest201Response
    | LoadTestAdministrationCreateOrUpdateTestDefaultResponse
    | LoadTestAdministrationDeleteTest204Response
    | LoadTestAdministrationDeleteTestDefaultResponse
    | LoadTestAdministrationGetTest200Response
    | LoadTestAdministrationGetTestDefaultResponse
    | LoadTestAdministrationListTests200Response
    | LoadTestAdministrationListTestsDefaultResponse
    | LoadTestAdministrationUploadTestFile201Response
    | LoadTestAdministrationUploadTestFileDefaultResponse
    | LoadTestAdministrationGetTestFile200Response
    | LoadTestAdministrationGetTestFileDefaultResponse
    | LoadTestAdministrationDeleteTestFile204Response
    | LoadTestAdministrationDeleteTestFileDefaultResponse
    | LoadTestAdministrationListTestFiles200Response
    | LoadTestAdministrationListTestFilesDefaultResponse
    | LoadTestAdministrationCreateOrUpdateAppComponents200Response
    | LoadTestAdministrationCreateOrUpdateAppComponents201Response
    | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse
    | LoadTestAdministrationGetAppComponents200Response
    | LoadTestAdministrationGetAppComponentsDefaultResponse
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig200Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfig201Response
    | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse
    | LoadTestAdministrationGetServerMetricsConfig200Response
    | LoadTestAdministrationGetServerMetricsConfigDefaultResponse
    | LoadTestRunGetTestRun200Response
    | LoadTestRunGetTestRunDefaultResponse
    | LoadTestRunCreateOrUpdateTestRun200Response
    | LoadTestRunCreateOrUpdateTestRun201Response
    | LoadTestRunCreateOrUpdateTestRunDefaultResponse
    | LoadTestRunDeleteTestRun204Response
    | LoadTestRunDeleteTestRunDefaultResponse
    | LoadTestRunListTestRuns200Response
    | LoadTestRunListTestRunsDefaultResponse
    | LoadTestRunGetTestRunFile200Response
    | LoadTestRunGetTestRunFileDefaultResponse
    | LoadTestRunStop200Response
    | LoadTestRunStopDefaultResponse
    | LoadTestRunListMetricNamespaces200Response
    | LoadTestRunListMetricNamespacesDefaultResponse
    | LoadTestRunListMetricDefinitions200Response
    | LoadTestRunListMetricDefinitionsDefaultResponse
    | LoadTestRunListMetrics200Response
    | LoadTestRunListMetricsDefaultResponse
    | LoadTestRunListMetricDimensionValues200Response
    | LoadTestRunListMetricDimensionValuesDefaultResponse
    | LoadTestRunCreateOrUpdateAppComponents200Response
    | LoadTestRunCreateOrUpdateAppComponents201Response
    | LoadTestRunCreateOrUpdateAppComponentsDefaultResponse
    | LoadTestRunGetAppComponents200Response
    | LoadTestRunGetAppComponentsDefaultResponse
    | LoadTestRunCreateOrUpdateServerMetricsConfig200Response
    | LoadTestRunCreateOrUpdateServerMetricsConfig201Response
    | LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse
    | LoadTestRunGetServerMetricsConfig200Response
    | LoadTestRunGetServerMetricsConfigDefaultResponse
    | TestProfileAdministrationCreateOrUpdateTestProfile200Response
    | TestProfileAdministrationCreateOrUpdateTestProfile201Response
    | TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse
    | TestProfileAdministrationDeleteTestProfile204Response
    | TestProfileAdministrationDeleteTestProfileDefaultResponse
    | TestProfileAdministrationGetTestProfile200Response
    | TestProfileAdministrationGetTestProfileDefaultResponse
    | TestProfileAdministrationListTestProfiles200Response
    | TestProfileAdministrationListTestProfilesDefaultResponse
    | TestProfileRunAdministrationGetTestProfileRun200Response
    | TestProfileRunAdministrationGetTestProfileRunDefaultResponse
    | TestProfileRunAdministrationCreateOrUpdateTestProfileRun200Response
    | TestProfileRunAdministrationCreateOrUpdateTestProfileRun201Response
    | TestProfileRunAdministrationCreateOrUpdateTestProfileRunDefaultResponse
    | TestProfileRunAdministrationDeleteTestProfileRun204Response
    | TestProfileRunAdministrationDeleteTestProfileRunDefaultResponse
    | TestProfileRunAdministrationStop200Response
    | TestProfileRunAdministrationStopDefaultResponse
    | TestProfileRunAdministrationListTestProfileRuns200Response
    | TestProfileRunAdministrationListTestProfileRunsDefaultResponse,
): response is
  | LoadTestAdministrationCreateOrUpdateTestDefaultResponse
  | LoadTestAdministrationDeleteTestDefaultResponse
  | LoadTestAdministrationGetTestDefaultResponse
  | LoadTestAdministrationListTestsDefaultResponse
  | LoadTestAdministrationUploadTestFileDefaultResponse
  | LoadTestAdministrationGetTestFileDefaultResponse
  | LoadTestAdministrationDeleteTestFileDefaultResponse
  | LoadTestAdministrationListTestFilesDefaultResponse
  | LoadTestAdministrationCreateOrUpdateAppComponentsDefaultResponse
  | LoadTestAdministrationGetAppComponentsDefaultResponse
  | LoadTestAdministrationCreateOrUpdateServerMetricsConfigDefaultResponse
  | LoadTestAdministrationGetServerMetricsConfigDefaultResponse
  | LoadTestRunGetTestRunDefaultResponse
  | LoadTestRunCreateOrUpdateTestRunDefaultResponse
  | LoadTestRunDeleteTestRunDefaultResponse
  | LoadTestRunListTestRunsDefaultResponse
  | LoadTestRunGetTestRunFileDefaultResponse
  | LoadTestRunStopDefaultResponse
  | LoadTestRunListMetricNamespacesDefaultResponse
  | LoadTestRunListMetricDefinitionsDefaultResponse
  | LoadTestRunListMetricsDefaultResponse
  | LoadTestRunListMetricDimensionValuesDefaultResponse
  | LoadTestRunCreateOrUpdateAppComponentsDefaultResponse
  | LoadTestRunGetAppComponentsDefaultResponse
  | LoadTestRunCreateOrUpdateServerMetricsConfigDefaultResponse
  | LoadTestRunGetServerMetricsConfigDefaultResponse
  | TestProfileAdministrationCreateOrUpdateTestProfileDefaultResponse
  | TestProfileAdministrationDeleteTestProfileDefaultResponse
  | TestProfileAdministrationGetTestProfileDefaultResponse
  | TestProfileAdministrationListTestProfilesDefaultResponse
  | TestProfileRunAdministrationGetTestProfileRunDefaultResponse
  | TestProfileRunAdministrationCreateOrUpdateTestProfileRunDefaultResponse
  | TestProfileRunAdministrationDeleteTestProfileRunDefaultResponse
  | TestProfileRunAdministrationStopDefaultResponse
  | TestProfileRunAdministrationListTestProfileRunsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
