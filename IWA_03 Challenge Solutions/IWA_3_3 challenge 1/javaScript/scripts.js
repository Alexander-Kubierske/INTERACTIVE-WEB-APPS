// scripts.js

import {company} from './configuration.js'
import {year} from './configuration.js'

// here we have multiple errors:
// 1. the const tag is not in {}
// 2. the word from is misspelled as form
// 3. we need to actually specify the location of configuration thus giving the relative path ./ and declaring it as a .js file type
// we can also solve this problem by importing the configuration.js file instead of importing/exporting each item 

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message