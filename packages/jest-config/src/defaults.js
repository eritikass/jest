/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {DefaultOptions} from 'types/Config';

import {replacePathSepForRegex} from 'jest-regex-util';
import {NODE_MODULES} from './constants';
import getCacheDirectory from './get_cache_directory';

const NODE_MODULES_REGEXP = replacePathSepForRegex(NODE_MODULES);

export default ({
  automock: false,
  bail: false,
  browser: false,
  cache: true,
  cacheDirectory: getCacheDirectory(),
  changedFilesWithAncestor: false,
  clearMocks: false,
  collectCoverage: false,
  collectCoverageFrom: null,
  coverageDirectory: null,
  coveragePathIgnorePatterns: [NODE_MODULES_REGEXP],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  coverageThreshold: null,
  detectLeaks: false,
  detectOpenHandles: false,
  errorOnDeprecated: false,
  expand: false,
  filter: null,
  forceCoverageMatch: [],
  globalSetup: null,
  globalTeardown: null,
  globals: {},
  haste: {
    providesModuleNodeModules: [],
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleNameMapper: {},
  modulePathIgnorePatterns: [],
  noStackTrace: false,
  notify: false,
  notifyMode: 'always',
  preset: null,
  prettierPath: 'prettier',
  projects: null,
  resetMocks: false,
  resetModules: false,
  resolver: null,
  restoreMocks: false,
  rootDir: null,
  roots: ['<rootDir>'],
  runTestsByPath: false,
  runner: 'jest-runner',
  setupFiles: [],
  setupTestFrameworkScriptFile: null,
  skipFilter: false,
  snapshotSerializers: [],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {},
  testFailureExitCode: 1,
  testLocationInResults: false,
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [NODE_MODULES_REGEXP],
  testRegex: '',
  testResultsProcessor: null,
  testRunner: 'jasmine2',
  testURL: 'about:blank',
  timers: 'real',
  transform: null,
  transformIgnorePatterns: [NODE_MODULES_REGEXP],
  useStderr: false,
  verbose: null,
  watch: false,
  watchPathIgnorePatterns: [],
  watchman: true,
}: DefaultOptions);
