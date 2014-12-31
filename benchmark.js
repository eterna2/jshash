var jshash = require('./jshash.js');

function benchmark(fn,numLoop,arg)
{
	var hrstart = process.hrtime();
	
	for (var i=0; i<numLoop; ++i) fn(arg);

	var hrend = process.hrtime(hrstart);
    console.info("x"+numLoop+": %ds %dms : "+fn.name, hrend[0], hrend[1]/1000000);
}

var numLoop = 10000000, arg = "qwertyuiop";

benchmark(jshash.pearson,numLoop,arg);
benchmark(jshash.djb2,numLoop,arg);
benchmark(jshash.sdbm,numLoop,arg);
benchmark(jshash.loselose,numLoop,arg);
benchmark(jshash.fnv1a,numLoop,arg);
benchmark(jshash.murmur3,numLoop,arg);


