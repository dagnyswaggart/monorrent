var express = require('express');
var router = express.Router();
var torrentutils = require('../utils/torrent');

router.post('/addtorrent', function (req, res, next) {
	var torrent = torrentutils.addTorrent(req.body.infohash);
	res.send(torrent.toString());
});

module.exports = router;
