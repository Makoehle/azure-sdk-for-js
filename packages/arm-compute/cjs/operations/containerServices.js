"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = __importStar(require("ms-rest-js"));
const Mappers = __importStar(require("../models/containerServicesMappers"));
const Parameters = __importStar(require("../models/parameters"));
/** Class representing a ContainerServices. */
class ContainerServices {
    /**
     * Create a ContainerServices.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    list(options, callback) {
        return this.client.sendOperationRequest({
            options
        }, listOperationSpec, callback);
    }
    /**
     * @summary Creates or updates a container service.
     *
     * Creates or updates a container service with the specified configuration of orchestrator,
     * masters, and agents.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} containerServiceName The name of the container service in the specified
     * subscription and resource group.
     *
     * @param {ContainerService} parameters Parameters supplied to the Create or Update a Container
     * Service operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdate(resourceGroupName, containerServiceName, parameters, options) {
        return this.beginCreateOrUpdate(resourceGroupName, containerServiceName, parameters, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    get(resourceGroupName, containerServiceName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName,
            containerServiceName,
            options
        }, getOperationSpec, callback);
    }
    /**
     * @summary Deletes the specified container service.
     *
     * Deletes the specified container service in the specified subscription and resource group. The
     * operation does not delete other resources created as part of creating a container service,
     * including storage accounts, VMs, and availability sets. All the other resources created with the
     * container service are part of the same resource group and can be deleted individually.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} containerServiceName The name of the container service in the specified
     * subscription and resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethod(resourceGroupName, containerServiceName, options) {
        return this.beginDeleteMethod(resourceGroupName, containerServiceName, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    listByResourceGroup(resourceGroupName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName,
            options
        }, listByResourceGroupOperationSpec, callback);
    }
    /**
     * @summary Creates or updates a container service.
     *
     * Creates or updates a container service with the specified configuration of orchestrator,
     * masters, and agents.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} containerServiceName The name of the container service in the specified
     * subscription and resource group.
     *
     * @param {ContainerService} parameters Parameters supplied to the Create or Update a Container
     * Service operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdate(resourceGroupName, containerServiceName, parameters, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            containerServiceName,
            parameters,
            options
        }, beginCreateOrUpdateOperationSpec, options);
    }
    /**
     * @summary Deletes the specified container service.
     *
     * Deletes the specified container service in the specified subscription and resource group. The
     * operation does not delete other resources created as part of creating a container service,
     * including storage accounts, VMs, and availability sets. All the other resources created with the
     * container service are part of the same resource group and can be deleted individually.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} containerServiceName The name of the container service in the specified
     * subscription and resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethod(resourceGroupName, containerServiceName, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            containerServiceName,
            options
        }, beginDeleteMethodOperationSpec, options);
    }
    listNext(nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink,
            options
        }, listNextOperationSpec, callback);
    }
    listByResourceGroupNext(nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink,
            options
        }, listByResourceGroupNextOperationSpec, callback);
    }
}
exports.ContainerServices = ContainerServices;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/containerServices",
    urlParameters: [
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion2
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ContainerServiceListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.containerServiceName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion2
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ContainerService
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listByResourceGroupOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion2
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ContainerServiceListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginCreateOrUpdateOperationSpec = {
    httpMethod: "PUT",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.containerServiceName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion2
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "parameters",
        mapper: Object.assign({}, Mappers.ContainerService, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.ContainerService
        },
        201: {
            bodyMapper: Mappers.ContainerService
        },
        202: {
            bodyMapper: Mappers.ContainerService
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginDeleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/containerServices/{containerServiceName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.containerServiceName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion2
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        202: {},
        204: {},
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listNextOperationSpec = {
    httpMethod: "GET",
    baseUrl: "https://management.azure.com",
    path: "{nextLink}",
    urlParameters: [
        Parameters.nextPageLink
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ContainerServiceListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listByResourceGroupNextOperationSpec = {
    httpMethod: "GET",
    baseUrl: "https://management.azure.com",
    path: "{nextLink}",
    urlParameters: [
        Parameters.nextPageLink
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ContainerServiceListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
//# sourceMappingURL=containerServices.js.map