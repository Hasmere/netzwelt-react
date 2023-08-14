# netzwelt-react
This repository has been created to partially fulfill the requirements of the technical interview at Netzwelt GmbH.

## Objectives
• Authenticate users with a login page by consuming an external JSON API endpoint from server side (using PHP)
• Restrict unauthenticated users from accessing the home page
• The home page must show a hierarchical tree of regions, cities and barangays, data can be pulled from an external JSON API.

## Cross-Origin Resource Sharing (CORS) Issues for Netzwelt API
• For "preflighted" requests the browser first sends an HTTP request using the OPTIONS method to the resource on the other origin, in order to determine if the actual request is safe to send. 
• This only occurs on browser HTTP requests, so CORS is not required when using POSTMAN or cURL.
To learn more about CORS, read information on https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS.
• Since an HTTP request using the OPTIONS method is not available for Netzwelt API, a bypass is used to access the data from the PHP backend server. 

### Bypassing CORS for Netzwelt API
• To bypass CORS for Netzwelt API, https://cors-anywhere.herokuapp.com/ is added in the base of the URL request of axios.get and axios.post. 
• To get a temporary access for the CORS bypass, visit https://cors-anywhere.herokuapp.com/corsdemo
• Once CORS is available in the Netzwelt API, remove https://cors-anywhere.herokuapp.com/ in the base URL for HTTP requests using POST and GET methods.