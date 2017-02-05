var lt = require('libtorrent');

module.exports.addTorrent = function (infohash) {
	var s = new lt.session();
	s.listen_on(6881, 6889);
	var ti = new lt.torrent_info('magnet:?xt=urn:btih:' + infohash);
	var th = s.add_torrent({
		ti: ti,
		save_path: './' + infohash
	});

	var st = th.status();
	return st;
}
