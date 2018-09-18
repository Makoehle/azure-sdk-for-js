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
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptLanguage = {
    parameterPath: "acceptLanguage",
    mapper: {
        serializedName: "accept-language",
        defaultValue: 'en-US',
        type: {
            name: "String"
        }
    }
};
exports.apiVersion0 = {
    parameterPath: "apiVersion",
    mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2018-06-01',
        type: {
            name: "String"
        }
    }
};
exports.apiVersion1 = {
    parameterPath: "apiVersion",
    mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2017-09-01',
        type: {
            name: "String"
        }
    }
};
exports.apiVersion2 = {
    parameterPath: "apiVersion",
    mapper: {
        required: true,
        isConstant: true,
        serializedName: "api-version",
        defaultValue: '2017-01-31',
        type: {
            name: "String"
        }
    }
};
exports.availabilitySetName = {
    parameterPath: "availabilitySetName",
    mapper: {
        required: true,
        serializedName: "availabilitySetName",
        type: {
            name: "String"
        }
    }
};
exports.commandId = {
    parameterPath: "commandId",
    mapper: {
        required: true,
        serializedName: "commandId",
        type: {
            name: "String"
        }
    }
};
exports.containerServiceName = {
    parameterPath: "containerServiceName",
    mapper: {
        required: true,
        serializedName: "containerServiceName",
        type: {
            name: "String"
        }
    }
};
exports.diskName = {
    parameterPath: "diskName",
    mapper: {
        required: true,
        serializedName: "diskName",
        type: {
            name: "String"
        }
    }
};
exports.expand0 = {
    parameterPath: [
        "options",
        "expand"
    ],
    mapper: {
        serializedName: "$expand",
        type: {
            name: "String"
        }
    }
};
exports.expand1 = {
    parameterPath: [
        "options",
        "expand"
    ],
    mapper: {
        serializedName: "$expand",
        type: {
            name: "Enum",
            allowedValues: [
                "instanceView"
            ]
        }
    }
};
exports.filter = {
    parameterPath: [
        "options",
        "filter"
    ],
    mapper: {
        serializedName: "$filter",
        type: {
            name: "String"
        }
    }
};
exports.imageName = {
    parameterPath: "imageName",
    mapper: {
        required: true,
        serializedName: "imageName",
        type: {
            name: "String"
        }
    }
};
exports.instanceId = {
    parameterPath: "instanceId",
    mapper: {
        required: true,
        serializedName: "instanceId",
        type: {
            name: "String"
        }
    }
};
exports.location0 = {
    parameterPath: "location",
    mapper: {
        required: true,
        serializedName: "location",
        type: {
            name: "String"
        }
    }
};
exports.location1 = {
    parameterPath: "location",
    mapper: {
        required: true,
        serializedName: "location",
        constraints: {
            Pattern: /^[-\w\._]+$/
        },
        type: {
            name: "String"
        }
    }
};
exports.nextPageLink = {
    parameterPath: "nextPageLink",
    mapper: {
        required: true,
        serializedName: "nextLink",
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
exports.offer = {
    parameterPath: "offer",
    mapper: {
        required: true,
        serializedName: "offer",
        type: {
            name: "String"
        }
    }
};
exports.orderby = {
    parameterPath: [
        "options",
        "orderby"
    ],
    mapper: {
        serializedName: "$orderby",
        type: {
            name: "String"
        }
    }
};
exports.platformUpdateDomain = {
    parameterPath: "platformUpdateDomain",
    mapper: {
        required: true,
        serializedName: "platformUpdateDomain",
        type: {
            name: "Number"
        }
    }
};
exports.publisherName = {
    parameterPath: "publisherName",
    mapper: {
        required: true,
        serializedName: "publisherName",
        type: {
            name: "String"
        }
    }
};
exports.resourceGroupName = {
    parameterPath: "resourceGroupName",
    mapper: {
        required: true,
        serializedName: "resourceGroupName",
        type: {
            name: "String"
        }
    }
};
exports.select = {
    parameterPath: [
        "options",
        "select"
    ],
    mapper: {
        serializedName: "$select",
        type: {
            name: "String"
        }
    }
};
exports.skus = {
    parameterPath: "skus",
    mapper: {
        required: true,
        serializedName: "skus",
        type: {
            name: "String"
        }
    }
};
exports.snapshotName = {
    parameterPath: "snapshotName",
    mapper: {
        required: true,
        serializedName: "snapshotName",
        type: {
            name: "String"
        }
    }
};
exports.subscriptionId = {
    parameterPath: "subscriptionId",
    mapper: {
        required: true,
        serializedName: "subscriptionId",
        type: {
            name: "String"
        }
    }
};
exports.top = {
    parameterPath: [
        "options",
        "top"
    ],
    mapper: {
        serializedName: "$top",
        type: {
            name: "Number"
        }
    }
};
exports.type = {
    parameterPath: "type",
    mapper: {
        required: true,
        serializedName: "type",
        type: {
            name: "String"
        }
    }
};
exports.version = {
    parameterPath: "version",
    mapper: {
        required: true,
        serializedName: "version",
        type: {
            name: "String"
        }
    }
};
exports.virtualMachineScaleSetName = {
    parameterPath: "virtualMachineScaleSetName",
    mapper: {
        required: true,
        serializedName: "virtualMachineScaleSetName",
        type: {
            name: "String"
        }
    }
};
exports.vmExtensionName = {
    parameterPath: "vmExtensionName",
    mapper: {
        required: true,
        serializedName: "vmExtensionName",
        type: {
            name: "String"
        }
    }
};
exports.vmName = {
    parameterPath: "vmName",
    mapper: {
        required: true,
        serializedName: "vmName",
        type: {
            name: "String"
        }
    }
};
exports.vmScaleSetName = {
    parameterPath: "vmScaleSetName",
    mapper: {
        required: true,
        serializedName: "vmScaleSetName",
        type: {
            name: "String"
        }
    }
};
exports.vmssExtensionName = {
    parameterPath: "vmssExtensionName",
    mapper: {
        required: true,
        serializedName: "vmssExtensionName",
        type: {
            name: "String"
        }
    }
};
//# sourceMappingURL=parameters.js.map