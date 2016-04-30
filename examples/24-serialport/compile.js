#!/usr/bin/env node

/* eslint no-process-exit:0 */

"use strict";

var flags = [];
var enclose = require("../../").exec;
var modules = process.versions.modules;
if (modules) flags.push("--version", "modules" + modules);

try {
  require.resolve("serialport");
} catch (error) {
  console.log("Failed to require('serialport')");
  console.log("Please run 'npm install' here");
  process.exit(1);
}

flags.push("./index.js");
enclose(flags);
