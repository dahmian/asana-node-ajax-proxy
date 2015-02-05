# asana-node-ajax-proxy
A proxy to allow communication with Asana without revealing API key

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
