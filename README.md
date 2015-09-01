## selenium-parallel-javascript
### Runs selenium scripts in parallel on CrossBrowserTesting.com
#### Written in Javascript

Tests are ran using Yeti http://yeti.cx   
In this example, the javascript unit testing uses QUnit http://qunitjs.com  
Yeti can also run unit testing with Jasmine, Mocha, and YUI

1. Install Yeti with NPM:   
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`npm install -g yeti`

2. Start a Yeti Server:   
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`yeti --server`

3. Enable Local Connection with CrossBrowserTesting.com using the cbttunnel.jar to allow CrossBrowserTesting.com to connect to your Yeti Server   
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`java -jar bin/cbttunnel.jar -authkey <API_KEY>`   

4. Pass Capabilities to Yeti:    
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`yeti -wd-url "http://<USERNAME>:<API_KEY>@hub.crossbrowsertesting.com:80/wd/hub" -caps "browser_api_name=IE10;os_api_name=Win7x64-C2;screen_resolution=1024x768;" sample.html`    
<br>to run multiple browsers in parallel, pass multiple capabilities:    
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`yeti -wd-url "http://<USERNAME>:<API_KEY>@hub.crossbrowsertesting.com:80/wd/hub" -caps "browser_api_name=IE10;os_api_name=Win7x64-C2;screen_resolution=1024x768;" -caps "browser_api_name=Chrome44;os_api_name=Win8.1;screen_resolution=1024x768;" sample.html`    

#### Known Issues
There is a known issue with the Yeti server running on an IPv6 address.  
The workaround for the issue is in the "fixes" directory
