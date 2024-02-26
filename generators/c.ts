/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @file Instantiate a CGenerator and populate it with the
 * complete set of block generator functions for JavaScript.  This is
 * the entrypoint for c_compressed.js.
 */

// Former goog.module ID: Blockly.JavaScript.all

import {CGenerator} from './c/c_generator.js';
import * as colour from './c/colour.js';
import * as lists from './c/lists.js';
import * as logic from './c/logic.js';
import * as loops from './c/loops.js';
import * as math from './c/math.js';
import * as procedures from './c/procedures.js';
import * as text from './c/text.js';
import * as variables from './c/variables.js';
import * as variablesDynamic from './c/variables_dynamic.js';

export * from './c/c_generator.js';

/**
 * JavaScript code generator instance.
 * @type {!CGenerator}
 */
export const cGenerator = new CGenerator();

// Install per-block-type generator functions:
const generators: typeof cGenerator.forBlock = {
  ...colour,
  ...lists,
  ...logic,
  ...loops,
  ...math,
  ...procedures,
  ...text,
  ...variables,
  ...variablesDynamic,
};
for (const name in generators) {
  cGenerator.forBlock[name] = generators[name];
}
