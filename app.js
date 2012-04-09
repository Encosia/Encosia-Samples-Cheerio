var request = require('request'),
    cheerio = require('cheerio');

request('http://encosia.com', function(error, response, body) {
  var $ = cheerio.load(body);

  $('h2').each(function() {
    console.log($(this).text());
  });
});