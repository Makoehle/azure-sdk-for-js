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
const Mappers = __importStar(require("../models/virtualMachineSizesMappers"));
const Parameters = __importStar(require("../models/parameters"));
/** Class representing a VirtualMachineSizes. */
class VirtualMachineSizes {
    /**
     * Create a VirtualMachineSizes.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    list(location, options, callback) {
        return this.client.sendOperationRequest({
            location,
            options
        }, listOperationSpec, callback);
    }
}
exports.VirtualMachineSizes = VirtualMachineSizes;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/vmSizes",
    urlParameters: [
        Parameters.location1,
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
            bodyMapper: Mappers.VirtualMachineSizeListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer
};
//# sourceMappingURL=virtualMachineSizes.js.map