export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peu y accéder
["disconnected"] -> Réserver au utilisateur déconnecter
["client"] -> Réserver au utilisateur avec le role client
["admin"] -> Réserver au utilisateur avec le role admin
["admin", "client"] -> Réserver au utilisateur avec le role client ou admin
*/

