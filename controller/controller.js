var mongoose = require("mongoose");
var stringSimilarity = require('string-similarity');
var _similarity = {
    similarity: function(req, res) {
        // var similarity = stringSimilarity.compareTwoStrings('lead', 'sealed');
        var similarity = stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.',
            'For sale: table in very good  condition, olive green in colour.');
        var bestmatch = stringSimilarity.findBestMatch('Olive-green table for sale, in extremely good condition.', [
            'For sale: green Subaru Impreza, 210,000 miles',
            'For sale: table in very good condition, olive green in colour.',
            'Wanted: mountain bike with at least 21 gears.'
        ]);
        var bestmatchJson = bestmatch;
        console.log("bestmatch", bestmatch.bestMatch);
        res.status(200).json({
            status: 200,
            message: "similarity check :" + similarity + " " + bestmatch.bestMatch,
            data: similarity + " " + bestmatchJson.bestMatch
        }).end();
    }
}
module.exports = user;
