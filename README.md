##phantom-jsproxy

####Just a simple http-proxy for scraping sites that require javascript to run in order to render properly. phantomjs loads the site, runs all the scripts and returns the DOM to the caller.

>####Prerequisities:
+ phantomjs
+ phantomjs added to path

>####Start:
>phantomjs phantom-jsproxy port

>####Usage:
>localhost<port>/?url=your-url-here

>####Example:
>localhost:99/?url=http://www.google.com/
