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
const Mappers = __importStar(require("../models/imagesMappers"));
const Parameters = __importStar(require("../models/parameters"));
/** Class representing a Images. */
class Images {
    /**
     * Create a Images.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Create or update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {Image} parameters Parameters supplied to the Create Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdate(resourceGroupName, imageName, parameters, options) {
        return this.beginCreateOrUpdate(resourceGroupName, imageName, parameters, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    /**
     * Update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {ImageUpdate} parameters Parameters supplied to the Update Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    update(resourceGroupName, imageName, parameters, options) {
        return this.beginUpdate(resourceGroupName, imageName, parameters, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    /**
     * Deletes an Image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethod(resourceGroupName, imageName, options) {
        return this.beginDeleteMethod(resourceGroupName, imageName, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    get(resourceGroupName, imageName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName,
            imageName,
            options
        }, getOperationSpec, callback);
    }
    listByResourceGroup(resourceGroupName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName,
            options
        }, listByResourceGroupOperationSpec, callback);
    }
    list(options, callback) {
        return this.client.sendOperationRequest({
            options
        }, listOperationSpec, callback);
    }
    /**
     * Create or update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {Image} parameters Parameters supplied to the Create Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdate(resourceGroupName, imageName, parameters, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            imageName,
            parameters,
            options
        }, beginCreateOrUpdateOperationSpec, options);
    }
    /**
     * Update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {ImageUpdate} parameters Parameters supplied to the Update Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdate(resourceGroupName, imageName, parameters, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            imageName,
            parameters,
            options
        }, beginUpdateOperationSpec, options);
    }
    /**
     * Deletes an Image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethod(resourceGroupName, imageName, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            imageName,
            options
        }, beginDeleteMethodOperationSpec, options);
    }
    listByResourceGroupNext(nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink,
            options
        }, listByResourceGroupNextOperationSpec, callback);
    }
    listNext(nextPageLink, options, callback) {
        return this.client.sendOperationRequest({
            nextPageLink,
            options
        }, listNextOperationSpec, callback);
    }
}
exports.Images = Images;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.imageName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.expand0,
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.Image
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listByResourceGroupOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ImageListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/images",
    urlParameters: [
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ImageListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginCreateOrUpdateOperationSpec = {
    httpMethod: "PUT",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.imageName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "parameters",
        mapper: Object.assign({}, Mappers.Image, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Image
        },
        201: {
            bodyMapper: Mappers.Image
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginUpdateOperationSpec = {
    httpMethod: "PATCH",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.imageName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "parameters",
        mapper: Object.assign({}, Mappers.ImageUpdate, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Image
        },
        201: {
            bodyMapper: Mappers.Image
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginDeleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.imageName,
        Parameters.subscriptionId
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {},
        202: {},
        204: {},
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
            bodyMapper: Mappers.ImageListResult
        },
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
            bodyMapper: Mappers.ImageListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
//# sourceMappingURL=images.js.map