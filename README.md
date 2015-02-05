# asana-node-ajax-proxy
A proxy to allow AJAX communication with Asana without revealing API key. While Asana does allow COR AJAX, it requires storing the API key in client side code, which is accesiable by anyone. This is a security risk, this proxy allows the API key to be kept on the server.

#### Installation
```
sudo npm install dahmian/asana-node-ajax-proxy
```

#### Usage
Server code:
```
require("asana-node-ajax-proxy")({
  apikey: "", 
  port: 8080
});
```

Client code:
```
var ajax = new XMLHttpRequest();
ajax.open("GET", "/users/me");
ajax.send();
```
