function proxy() {
  var system = require('system');
  var server = require('webserver').create();
  var page = require('webpage').create();
  page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
  var host, port;

  if (system.args.length !== 2) {
      console.log('Usage: server.js <some port>');
      console.log('Request format = http://server-name:port/?url=http://your-url-here');
      phantom.exit(1);
  }
  port = system.args[1];

  var listening = server.listen(port, function (request, response) {
        var requestUrl = decodeURIComponent(request.url.slice(6));
        console.log("Got request");
        console.log('Fetching: ' + requestUrl);
        page.open(requestUrl, function(status) {
          if (status !== 'success') {
            response.statusCode = 400;
            response.close();
          }
            response.statusCode = 200;
            response.headers = {"Cache": "no-cache", "Content-Type": "text/html"};
            response.write(page.content);
            response.close();
        });
  });
  if (!listening) {
      console.log("could not create web server listening on port " + port);
      phantom.exit();
  };
};

proxy();
