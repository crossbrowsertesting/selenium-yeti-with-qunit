## selenium-parallel-javascript
### Runs selenium scripts in parallel on Crossbrowsertesting.com
#### Written in Javascript

Tests are ran using Yeti http://yeti.cx  
You can install Yeti with NPM:
<pre><code>
	npm install -g yeti
</code></pre>
In this sample, the javascript unit testing uses QUnit http://qunitjs.com

Enable Local Connection with CrossBrowserTesting.com using the cbttunnel.jar
<pre><code>
	java -jar bin/cbttunnel.jar -authkey \<API_KEY\>
</code></pre>

capabilities are passed to Yeti via:
<pre><code>
	yeti -wd-url "http://<USERNAME>:\<API_KEY\>@hub.crossbrowsertesting.com:80/wd/hub" -caps "browser_api_name=IE10;os_api_name=Win7x64-C2;screen_resolution=1024x768;" sample.html
</code></pre>

to run multiple browsers in parallel, pass multiple capabilities:
<pre><code>                
	yeti -wd-url "http://\<USERNAME\>:\<API_KEY\>@hub.crossbrowsertesting.com:80/wd/hub" -caps "browser_api_name=IE10;os_api_name=Win7x64-C2;screen_resolution=1024x768;" -caps "browser_api_name=Chrome44;os_api_name=Win8.1;screen_resolution=1024x768;" sample.html
</code></pre>

#### Known Issues
There is a known issue with the Yeti server running on an IPv6 address.  
The workaround for the issue is in the "fixes" directory
