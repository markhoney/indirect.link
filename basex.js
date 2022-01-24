const dict = {
	base16: '0123456789ABCDEF',
	base32: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
	base64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	base64url: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
	base66url: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.\\-',
	base85uri: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;%=",
};

function add(x, y, base) {
	var _m = Math.max(x.length, y.length);
	for (var _c = _n = 0,_r = []; _n < _m || _c; _c = Math.floor(_z / base)) {
		var _z = _c + (_n < x.length ? x[_n] : 0) + (_n < y.length ? y[_n] : 0);
		var _n = _r.push(_z % base);
	}
	return _r;
}

function mul(x, pow, base) {
	for(var _r = x < 0 ? null : []; x > 0; x = x >> 1) {
		if(x & 1) _r = add(_r, pow, base);
		pow = add(pow, pow, base);
	}
	return _r;
}

function convert(str, from, to) {
	if (!str) return;
	if (typeof from === 'string') from = from.split('');
	if (typeof to === 'string') to = to.split('');
	for (var _a = [0], str = str.split(''); str.length > 0 && _a[_a.push(from.indexOf(str.pop())) - 1] >= 0;);
	var _d = _a.shift() + _a[_a.length - 1] >= 0 ? _a : null;
	if (_d === null) return null;
	for (var _n = 0,_a = [],_p = [1]; _n < _d.length; _n++) {
		_a = add(_a, mul(_d[_n], _p, to.length), to.length);
		_p = mul(from.length, _p, to.length);
	}
	for (var _n = _a.length - 1, _o = ''; _n >= 0; _o += to[_a[_n--]]);
	return _o.length === 0 ? to[0] : _o;
}

// export {convert, dict};
