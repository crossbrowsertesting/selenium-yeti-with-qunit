// https://github.com/yui/yeti/blob/master/lib/local-ip.js
// ------------------------------------------------------------------------------------------------------------
// Edited by: Michael Hollister
// Edit Date: 31Aug2015
//
// CrossBrowserTesting.com Local Connection only works with IPv4 addresses
// If you run the Yeti server and get a IPv6 address you must hard code you IPv4 address in Yeti's source code
// Then build and run "cli.js" with node
// Yeti's source code can be found at https://github.com/yui/yeti
// ------------------------------------------------------------------------------------------------------------

"use strict";
var os = require("os");

var ipFunction = (function () {
    var cachedIP;

    function queryLocalIP() {
        var name,
            localIP,
            addresses,
            interfaces = os.networkInterfaces(),
            interfaceNames = Object.keys(interfaces);

        function internalOnly(address) {
            return !address.internal;
        }

        function tryAddresses(address) {
            // Prefer IPv4 addresses.
            if (!localIP || address.family === "IPv4") {
                localIP = address.address;
            }
        }

        do {
            name = interfaceNames.pop();

            // Skip Back to My Mac or VPNs.
            if (name.indexOf("utun") === 0) {
                continue;
            }

            interfaces[name]
                .filter(internalOnly)
                .forEach(tryAddresses);
        } while (interfaceNames.length && !localIP);

        if (!localIP) {
            localIP = "localhost";
        }

        return localIP;
    }

    return function getLocalIP() {
        if (!cachedIP) {
            cachedIP = queryLocalIP();
        }
	// -----------------------------------------------------------------------
	// replace the cachedIP variable with you hard coded IPv4 internal address
        // ----------------------------------------------------------------------
	//return cachedIP;
        return "192.168.1.3";
    };
}());
exports.ipFunction = ipFunction;
