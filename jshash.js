var lookupTable = [187, 79, 48, 203, 166, 3, 218, 175, 53, 50, 82, 194, 40, 4, 60, 165, 13, 240, 139, 130, 35, 37, 106, 147, 144, 88, 208, 0, 55, 201, 250, 167, 14, 238, 206, 15, 183, 248, 243, 209, 58, 18, 47, 226, 134, 105, 20, 20, 160, 226, 154, 122, 105, 33, 127, 2, 48, 129, 187, 11, 176, 114, 12, 29, 185, 226, 121, 199, 35, 191, 213, 171, 243, 115, 225, 38, 199, 169, 15, 61, 227, 120, 109, 210, 100, 115, 208, 85, 24, 233, 133, 207, 131, 16, 194, 74, 230, 171, 190, 86, 132, 228, 193, 188, 247, 245, 171, 118, 208, 143, 240, 225, 183, 1, 83, 22, 220, 165, 174, 51, 62, 49, 132, 17, 239, 101, 168, 89, 200, 81, 125, 244, 193, 220, 41, 49, 217, 127, 21, 151, 88, 208, 210, 98, 173, 110, 233, 176, 248, 213, 178, 239, 36, 164, 229, 163, 251, 212, 132, 83, 155, 171, 61, 229, 251, 72, 119, 7, 139, 155, 232, 16, 231, 177, 85, 0, 30, 13, 36, 107, 97, 177, 230, 13, 64, 142, 241, 216, 98, 130, 200, 161, 62, 160, 231, 2, 217, 153, 220, 169, 68, 73, 116, 88, 194, 35, 124, 10, 76, 124, 221, 154, 223, 165, 170, 214, 245, 49, 80, 9, 200, 214, 225, 63, 9, 145, 27, 46, 55, 115, 71, 70, 87, 240, 225, 93, 155, 6, 156, 186, 6, 86, 106, 23, 38, 253, 237, 119, 103, 204, 10, 107, 243, 48, 118];

function pearson(str)
{
	var hash = 0, i = str.length, j;
	while(i)
	{
		j = hash ^ str.charCodeAt(--i);
		hash = lookupTable[j];
	}
	
	return hash >>> 0;
}

function djb2(str) {
	var hash = 5381, i = str.length;
	while (i)	hash = (hash * 33) ^ str.charCodeAt(--i);
	return hash >>> 0;
}

function sdbm(str) {
	var hash = 0, i = str.length;
	while (i) hash = str.charCodeAt(--i) + (hash << 6) + (hash << 16) - hash;
	return hash >>> 0;
}

function loselose(str) {
	var hash = 0, i = str.length;
	while (i) hash += str.charCodeAt(--i);
	return hash >>> 0;
}

function fnv1a(str) {
	var hash = 0x811C9DC5, i = str.length;

	while (i)
	{
		hash ^= str.charCodeAt(--i);
		hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
	}
	return hash >>> 0;
}


function _murmur3_hash1(k)
{
	k = ((((k & 0xffff) * 0xcc9e2d51) + ((((k >>> 16) * 0xcc9e2d51) & 0xffff) << 16))) & 0xffffffff;
	k = (k << 15) | (k >>> 17);
	k = ((((k & 0xffff) * 0x1b873593) + ((((k >>> 16) * 0x1b873593) & 0xffff) << 16))) & 0xffffffff;
	return k;
}

function murmur3(str) {
	var c1 = 0xcc9e2d51,
		c2 = 0x1b873593;

	var k,
		hash = 1, 
		remainder = str.length & 3, 
		c = str.length - remainder,
		i = 0;
 
	
	while (i<c)
	{
		k =
          ((str.charCodeAt(i) & 0xff)) |
          ((str.charCodeAt(++i) & 0xff) << 8) |
          ((str.charCodeAt(++i) & 0xff) << 16) |
          ((str.charCodeAt(++i) & 0xff) << 24);

		++i;
		
		hash ^= _murmur3_hash1(k);
		hash = (hash << 13) | (hash >>> 19);
		var _hash = ((((hash & 0xffff) * 5) + ((((hash >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		hash = (((_hash & 0xffff) + 0x6b64) + ((((_hash >>> 16) + 0xe654) & 0xffff) << 16));
	}
	k = 0;
	
    switch (remainder) {
		case 3: k ^= (str.charCodeAt(i+2) & 0xff) << 16;
		case 2: k ^= (str.charCodeAt(i+1) & 0xff) << 8;
		case 1: k ^= (str.charCodeAt(i) & 0xff);

		hash ^= _murmur3_hash1(k);
    }
	
	hash ^= str.length;
	hash ^= (hash >>> 16);
	hash = (((hash & 0xffff) * 0x85ebca6b) + ((((hash >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    hash ^= hash >>> 13;
    hash = ((((hash & 0xffff) * 0xc2b2ae35) + ((((hash >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	hash ^= (hash >>> 16);

	return hash >>> 0;
}

// expose module methods
exports.pearson = pearson;
exports.djb2 = djb2;
exports.sdbm = sdbm;
exports.loselose = loselose;
exports.fnv1a = fnv1a;
exports.murmur3 = murmur3;
