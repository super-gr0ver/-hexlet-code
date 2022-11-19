#!/usr/bin/env node
import { welcome } from '../src/greeting.js';
import { game } from '../src/even.js';

console.log(`Hello, ${welcome()}!`);
console.log(`${game()}`);
