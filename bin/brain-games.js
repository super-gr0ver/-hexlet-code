#!/usr/bin/env node

import { welcomeName } from '../src/cli.js';

const welcomeText = 'Welcome to the Brain Games!';
console.log(`${welcomeText}`);
console.log(`Hello, ${welcomeName()}!`);
