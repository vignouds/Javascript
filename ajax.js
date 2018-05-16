function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.addEventListener("load", function () {

        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(data);
}

function Afficher(reponse) {
  loisirs = JSON.parse(reponse);
  for(loisir in loisirs) {
    console.log(loisirs[loisir].name);
  }
}

ajaxGet("http://loisirs-web-backend.cleverapps.io/users", Afficher);
var newUser = new FormData();
newUser.append("id",4);
newUser.append("name", "toto");
newUser.append("password", "aaze");
ajaxGet("http://loisirs-web-backend.cleverapps.io/db", newUser, function(reponse) {

});
