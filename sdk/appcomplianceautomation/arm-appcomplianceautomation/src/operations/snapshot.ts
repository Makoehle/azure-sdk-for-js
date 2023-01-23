/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Snapshot } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppComplianceAutomationToolForMicrosoft365 } from "../appComplianceAutomationToolForMicrosoft365";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SnapshotGetOptionalParams,
  SnapshotGetResponse,
  SnapshotDownloadRequest,
  SnapshotDownloadOptionalParams,
  SnapshotDownloadResponse
} from "../models";

/** Class containing Snapshot operations. */
export class SnapshotImpl implements Snapshot {
  private readonly client: AppComplianceAutomationToolForMicrosoft365;

  /**
   * Initialize a new instance of the class Snapshot class.
   * @param client Reference to the service client
   */
  constructor(client: AppComplianceAutomationToolForMicrosoft365) {
    this.client = client;
  }

  /**
   * Get the AppComplianceAutomation snapshot and its properties.
   * @param reportName Report Name.
   * @param snapshotName Snapshot Name.
   * @param options The options parameters.
   */
  get(
    reportName: string,
    snapshotName: string,
    options?: SnapshotGetOptionalParams
  ): Promise<SnapshotGetResponse> {
    return this.client.sendOperationRequest(
      { reportName, snapshotName, options },
      getOperationSpec
    );
  }

  /**
   * Download compliance needs from snapshot, like: Compliance Report, Resource List.
   * @param reportName Report Name.
   * @param snapshotName Snapshot Name.
   * @param parameters Parameters for the query operation
   * @param options The options parameters.
   */
  async beginDownload(
    reportName: string,
    snapshotName: string,
    parameters: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SnapshotDownloadResponse>,
      SnapshotDownloadResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SnapshotDownloadResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { reportName, snapshotName, parameters, options },
      downloadOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Download compliance needs from snapshot, like: Compliance Report, Resource List.
   * @param reportName Report Name.
   * @param snapshotName Snapshot Name.
   * @param parameters Parameters for the query operation
   * @param options The options parameters.
   */
  async beginDownloadAndWait(
    reportName: string,
    snapshotName: string,
    parameters: SnapshotDownloadRequest,
    options?: SnapshotDownloadOptionalParams
  ): Promise<SnapshotDownloadResponse> {
    const poller = await this.beginDownload(
      reportName,
      snapshotName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.reportName,
    Parameters.snapshotName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const downloadOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/snapshots/{snapshotName}/download",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DownloadResponse
    },
    201: {
      bodyMapper: Mappers.DownloadResponse
    },
    202: {
      bodyMapper: Mappers.DownloadResponse
    },
    204: {
      bodyMapper: Mappers.DownloadResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.reportName,
    Parameters.snapshotName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
