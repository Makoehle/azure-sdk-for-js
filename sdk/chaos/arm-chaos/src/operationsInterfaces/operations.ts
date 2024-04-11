/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operation, OperationsListAllOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Get a list all available Operations.
   * @param options The options parameters.
   */
  listAll(
    options?: OperationsListAllOptionalParams,
  ): PagedAsyncIterableIterator<Operation>;
}
