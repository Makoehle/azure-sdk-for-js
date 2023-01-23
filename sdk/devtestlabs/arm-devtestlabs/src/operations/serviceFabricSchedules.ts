/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServiceFabricSchedules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Schedule,
  ServiceFabricSchedulesListNextOptionalParams,
  ServiceFabricSchedulesListOptionalParams,
  ServiceFabricSchedulesListResponse,
  ServiceFabricSchedulesGetOptionalParams,
  ServiceFabricSchedulesGetResponse,
  ServiceFabricSchedulesCreateOrUpdateOptionalParams,
  ServiceFabricSchedulesCreateOrUpdateResponse,
  ServiceFabricSchedulesDeleteOptionalParams,
  ScheduleFragment,
  ServiceFabricSchedulesUpdateOptionalParams,
  ServiceFabricSchedulesUpdateResponse,
  ServiceFabricSchedulesExecuteOptionalParams,
  ServiceFabricSchedulesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServiceFabricSchedules operations. */
export class ServiceFabricSchedulesImpl implements ServiceFabricSchedules {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class ServiceFabricSchedules class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List schedules in a given service fabric.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    options?: ServiceFabricSchedulesListOptionalParams
  ): PagedAsyncIterableIterator<Schedule> {
    const iter = this.listPagingAll(
      resourceGroupName,
      labName,
      userName,
      serviceFabricName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          labName,
          userName,
          serviceFabricName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    options?: ServiceFabricSchedulesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Schedule[]> {
    let result: ServiceFabricSchedulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    options?: ServiceFabricSchedulesListOptionalParams
  ): AsyncIterableIterator<Schedule> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      userName,
      serviceFabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List schedules in a given service fabric.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    options?: ServiceFabricSchedulesListOptionalParams
  ): Promise<ServiceFabricSchedulesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, userName, serviceFabricName, options },
      listOperationSpec
    );
  }

  /**
   * Get schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesGetOptionalParams
  ): Promise<ServiceFabricSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        name,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    schedule: Schedule,
    options?: ServiceFabricSchedulesCreateOrUpdateOptionalParams
  ): Promise<ServiceFabricSchedulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        name,
        schedule,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        name,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Allows modifying tags of schedules. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    schedule: ScheduleFragment,
    options?: ServiceFabricSchedulesUpdateOptionalParams
  ): Promise<ServiceFabricSchedulesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        name,
        schedule,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  async beginExecute(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesExecuteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      {
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        name,
        options
      },
      executeOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  async beginExecuteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesExecuteOptionalParams
  ): Promise<void> {
    const poller = await this.beginExecute(
      resourceGroupName,
      labName,
      userName,
      serviceFabricName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    nextLink: string,
    options?: ServiceFabricSchedulesListNextOptionalParams
  ): Promise<ServiceFabricSchedulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        serviceFabricName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    201: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.schedule,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.schedule1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const executeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/servicefabrics/{serviceFabricName}/schedules/{name}/execute",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName,
    Parameters.serviceFabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
