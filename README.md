# Node [jshash](https://www.npmjs.org/package/jshash)

JS implementation of various non-crypto hash functions.

[![NPM](https://nodei.co/npm/jshash.png?downloadRank=true&downloads=true)](https://nodei.co/npm/jshash.png?downloadRank=true&downloads=true)
[![NPM Download Graph for mrcluster](https://nodei.co/npm-dl/jshash.png?months=6&height=3)](https://npmjs.org/package/jshash)

### Installation
```
npm install jshash
```

### Quick Start
---
All hash functions take in a `String` and returns a `Number` (Unsigned 32bit Integer).
```
var jshash = require('jshash');
var Unsigned32bitInteger = jshash.djb2("someStringKey");
```

### Available Hash Functions

* `jshash.loselose`: Naive hashing where the Unicode char are summed.

* `jshash.pearson`: [Pearson](http://en.wikipedia.org/wiki/Pearson_hashing) 8-bit hash function.

* `jshash.djb2`: [Bernstein's](http://en.wikipedia.org/wiki/Daniel_J._Bernstein) (djb2)[http://www.cse.yorku.ca/~oz/hash.html] hash function.

* `jshash.sdbm`: [Hash function](http://www.cse.yorku.ca/~oz/hash.html) used in [sdbm](http://wiki.call-cc.org/eggref/4/sdbm).

* `jshash.fnv1a`: [Fowler–Noll–Vo](http://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) hash function variant 1a.

* `jshash.murmur3`: [Murmur](http://en.wikipedia.org/wiki/MurmurHash) hash function version 3.


## License ##

(The MIT License)

Copyright (c) 201X eterna2;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.