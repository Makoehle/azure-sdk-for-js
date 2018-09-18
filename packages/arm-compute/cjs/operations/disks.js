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
const Mappers = __importStar(require("../models/disksMappers"));
const Parameters = __importStar(require("../models/parameters"));
/** Class representing a Disks. */
class Disks {
    /**
     * Create a Disks.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates or updates a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdate(resourceGroupName, diskName, disk, options) {
        return this.beginCreateOrUpdate(resourceGroupName, diskName, disk, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    /**
     * Updates (patches) a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    update(resourceGroupName, diskName, disk, options) {
        return this.beginUpdate(resourceGroupName, diskName, disk, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    get(resourceGroupName, diskName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName,
            diskName,
            options
        }, getOperationSpec, callback);
    }
    /**
     * Deletes a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethod(resourceGroupName, diskName, options) {
        return this.beginDeleteMethod(resourceGroupName, diskName, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
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
     * Grants access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
     * access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    grantAccess(resourceGroupName, diskName, grantAccessData, options) {
        return this.beginGrantAccess(resourceGroupName, diskName, grantAccessData, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    /**
     * Revokes access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    revokeAccess(resourceGroupName, diskName, options) {
        return this.beginRevokeAccess(resourceGroupName, diskName, options)
            .then(lroPoller => lroPoller.pollUntilFinished());
    }
    /**
     * Creates or updates a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdate(resourceGroupName, diskName, disk, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            diskName,
            disk,
            options
        }, beginCreateOrUpdateOperationSpec, options);
    }
    /**
     * Updates (patches) a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdate(resourceGroupName, diskName, disk, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            diskName,
            disk,
            options
        }, beginUpdateOperationSpec, options);
    }
    /**
     * Deletes a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethod(resourceGroupName, diskName, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            diskName,
            options
        }, beginDeleteMethodOperationSpec, options);
    }
    /**
     * Grants access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
     * access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGrantAccess(resourceGroupName, diskName, grantAccessData, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            diskName,
            grantAccessData,
            options
        }, beginGrantAccessOperationSpec, options);
    }
    /**
     * Revokes access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRevokeAccess(resourceGroupName, diskName, options) {
        return this.client.sendLRORequest({
            resourceGroupName,
            diskName,
            options
        }, beginRevokeAccessOperationSpec, options);
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
exports.Disks = Disks;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.diskName
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.Disk
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listByResourceGroupOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.DiskList
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks",
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
            bodyMapper: Mappers.DiskList
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginCreateOrUpdateOperationSpec = {
    httpMethod: "PUT",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.diskName
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "disk",
        mapper: Object.assign({}, Mappers.Disk, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Disk
        },
        202: {
            bodyMapper: Mappers.Disk
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginUpdateOperationSpec = {
    httpMethod: "PATCH",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.diskName
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "disk",
        mapper: Object.assign({}, Mappers.DiskUpdate, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.Disk
        },
        202: {
            bodyMapper: Mappers.Disk
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginDeleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.diskName
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
const beginGrantAccessOperationSpec = {
    httpMethod: "POST",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.diskName
    ],
    queryParameters: [
        Parameters.apiVersion0
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "grantAccessData",
        mapper: Object.assign({}, Mappers.GrantAccessData, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.AccessUri
        },
        202: {},
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
const beginRevokeAccessOperationSpec = {
    httpMethod: "POST",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess",
    urlParameters: [
        Parameters.subscriptionId,
        Parameters.resourceGroupName,
        Parameters.diskName
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
            bodyMapper: Mappers.DiskList
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
            bodyMapper: Mappers.DiskList
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
//# sourceMappingURL=disks.js.map