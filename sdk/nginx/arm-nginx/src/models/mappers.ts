/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const NginxCertificate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxCertificate",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "NginxCertificateProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const NginxCertificateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxCertificateProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      keyVirtualPath: {
        serializedName: "keyVirtualPath",
        type: {
          name: "String"
        }
      },
      certificateVirtualPath: {
        serializedName: "certificateVirtualPath",
        type: {
          name: "String"
        }
      },
      keyVaultSecretId: {
        serializedName: "keyVaultSecretId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ResourceProviderDefaultErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceProviderDefaultErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponseBody"
        }
      }
    }
  }
};

export const ErrorResponseBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseBody"
            }
          }
        }
      }
    }
  }
};

export const NginxCertificateListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxCertificateListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxCertificate"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxConfigurationListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxConfigurationListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxConfiguration"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxConfiguration",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "NginxConfigurationProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const NginxConfigurationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxConfigurationProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      files: {
        serializedName: "files",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxConfigurationFile"
            }
          }
        }
      },
      protectedFiles: {
        serializedName: "protectedFiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxConfigurationFile"
            }
          }
        }
      },
      package: {
        serializedName: "package",
        type: {
          name: "Composite",
          className: "NginxConfigurationPackage"
        }
      },
      rootFile: {
        serializedName: "rootFile",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxConfigurationFile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxConfigurationFile",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      virtualPath: {
        serializedName: "virtualPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxConfigurationPackage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxConfigurationPackage",
    modelProperties: {
      data: {
        serializedName: "data",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxDeployment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxDeployment",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityProperties"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "NginxDeploymentProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const IdentityProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IdentityProperties",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "UserIdentityProperties" }
          }
        }
      }
    }
  }
};

export const UserIdentityProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserIdentityProperties",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxDeploymentProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxDeploymentProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      nginxVersion: {
        serializedName: "nginxVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      managedResourceGroup: {
        serializedName: "managedResourceGroup",
        type: {
          name: "String"
        }
      },
      networkProfile: {
        serializedName: "networkProfile",
        type: {
          name: "Composite",
          className: "NginxNetworkProfile"
        }
      },
      ipAddress: {
        serializedName: "ipAddress",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      enableDiagnosticsSupport: {
        serializedName: "enableDiagnosticsSupport",
        type: {
          name: "Boolean"
        }
      },
      logging: {
        serializedName: "logging",
        type: {
          name: "Composite",
          className: "NginxLogging"
        }
      }
    }
  }
};

export const NginxNetworkProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxNetworkProfile",
    modelProperties: {
      frontEndIPConfiguration: {
        serializedName: "frontEndIPConfiguration",
        type: {
          name: "Composite",
          className: "NginxFrontendIPConfiguration"
        }
      },
      networkInterfaceConfiguration: {
        serializedName: "networkInterfaceConfiguration",
        type: {
          name: "Composite",
          className: "NginxNetworkInterfaceConfiguration"
        }
      }
    }
  }
};

export const NginxFrontendIPConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxFrontendIPConfiguration",
    modelProperties: {
      publicIPAddresses: {
        serializedName: "publicIPAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxPublicIPAddress"
            }
          }
        }
      },
      privateIPAddresses: {
        serializedName: "privateIPAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxPrivateIPAddress"
            }
          }
        }
      }
    }
  }
};

export const NginxPublicIPAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxPublicIPAddress",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxPrivateIPAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxPrivateIPAddress",
    modelProperties: {
      privateIPAddress: {
        serializedName: "privateIPAddress",
        type: {
          name: "String"
        }
      },
      privateIPAllocationMethod: {
        serializedName: "privateIPAllocationMethod",
        type: {
          name: "String"
        }
      },
      subnetId: {
        serializedName: "subnetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxNetworkInterfaceConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxNetworkInterfaceConfiguration",
    modelProperties: {
      subnetId: {
        serializedName: "subnetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxLogging: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxLogging",
    modelProperties: {
      storageAccount: {
        serializedName: "storageAccount",
        type: {
          name: "Composite",
          className: "NginxStorageAccount"
        }
      }
    }
  }
};

export const NginxStorageAccount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxStorageAccount",
    modelProperties: {
      accountName: {
        serializedName: "accountName",
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "containerName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NginxDeploymentUpdateParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxDeploymentUpdateParameters",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "IdentityProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "NginxDeploymentUpdateProperties"
        }
      }
    }
  }
};

export const NginxDeploymentUpdateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxDeploymentUpdateProperties",
    modelProperties: {
      enableDiagnosticsSupport: {
        serializedName: "enableDiagnosticsSupport",
        type: {
          name: "Boolean"
        }
      },
      logging: {
        serializedName: "logging",
        type: {
          name: "Composite",
          className: "NginxLogging"
        }
      }
    }
  }
};

export const NginxDeploymentListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NginxDeploymentListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NginxDeployment"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationResult"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};
