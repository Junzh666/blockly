/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @file Generating JavaScript for variable blocks.
 */

// Former goog.module ID: Blockly.JavaScript.variables

import type {Block} from '../../core/block.js';
import type {CGenerator} from './c_generator.js';
import {Order} from './c_generator.js';

export function variables_get(
  block: Block,
  generator: CGenerator,
): [string, Order] {
  // Variable getter.
  const code = generator.getVariableName(block.getFieldValue('VAR'));
  return [code, Order.ATOMIC];
}

export function variables_set(block: Block, generator: CGenerator) {
  // Variable setter.
  const argument0 =
    generator.valueToCode(block, 'VALUE', Order.ASSIGNMENT) || '0';
  const varName = generator.getVariableName(block.getFieldValue('VAR'));
  return varName + ' = ' + argument0 + ';\n';
}
