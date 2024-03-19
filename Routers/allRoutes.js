import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allDevis", "Vos devis", "/pages/devis/allDevis.html"),
    new Route("/demandeDevis", "Demande de devis", "/pages/devis/demandeDevis.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Mon site Web";