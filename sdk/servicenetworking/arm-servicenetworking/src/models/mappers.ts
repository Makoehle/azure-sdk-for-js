/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
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
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const TrafficControllerListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficControllerListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrafficController"
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

export const TrafficControllerProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficControllerProperties",
    modelProperties: {
      configurationEndpoints: {
        serializedName: "configurationEndpoints",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      frontends: {
        serializedName: "frontends",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceId"
            }
          }
        }
      },
      associations: {
        serializedName: "associations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceId"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceId: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceId",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
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

export const TrafficControllerUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficControllerUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const AssociationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Association"
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

export const AssociationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationProperties",
    modelProperties: {
      associationType: {
        serializedName: "associationType",
        required: true,
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "AssociationSubnet"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AssociationSubnet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationSubnet",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AssociationUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AssociationUpdateProperties"
        }
      }
    }
  }
};

export const AssociationUpdateProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationUpdateProperties",
    modelProperties: {
      associationType: {
        serializedName: "associationType",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "subnet",
        type: {
          name: "Composite",
          className: "AssociationSubnetUpdate"
        }
      }
    }
  }
};

export const AssociationSubnetUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationSubnetUpdate",
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

export const FrontendListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FrontendListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Frontend"
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

export const FrontendProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FrontendProperties",
    modelProperties: {
      fqdn: {
        serializedName: "fqdn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FrontendUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FrontendUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrafficController: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficController",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "TrafficControllerProperties"
        }
      }
    }
  }
};

export const Association: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Association",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "AssociationProperties"
        }
      }
    }
  }
};

export const Frontend: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Frontend",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "FrontendProperties"
        }
      }
    }
  }
};

export const TrafficControllerInterfaceCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficControllerInterfaceCreateOrUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TrafficControllerInterfaceDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficControllerInterfaceDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AssociationsInterfaceCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationsInterfaceCreateOrUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AssociationsInterfaceDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssociationsInterfaceDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FrontendsInterfaceCreateOrUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FrontendsInterfaceCreateOrUpdateHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FrontendsInterfaceDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FrontendsInterfaceDeleteHeaders",
    modelProperties: {
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
