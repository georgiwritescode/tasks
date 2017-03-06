/**
 * This is only the Javascript 2 task:
 * 2.Make an AJAX request to www.ipify.org API to retrieve your machine's public IP. Log only the IP address to the console.
 */

function getPublicIP() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
        function (json) {
           console.log(json.ip);
        });
}

getPublicIP();