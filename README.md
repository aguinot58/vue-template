# Template projet en Vuejs intégrant les packages vee-validate / vue-router / pinia / axios

Arborescence en partie déjà créée dans src avec les sous-dossiers suivants :

    - components
        + Header.vue
        + Footer.vue
        /Home
            + index.vue
        /PageNotFound
            + index.vue
    - pages
        Home.js
        PageNotFound.js
        index.js
    - stores
        exampleStore.js
    - router
        + index.js
    - assets
        logo.svg


Le projet importe la bibliothèque Bootstrap dans le fichier index.html.

Le Header et le Footer sont déjà intégrés et ont une redirection vers Home
(le header contient également un premier lien de navigation vers Home)

La route vers Home est déjà mise en place dans le router, ainsi qu'une redirection vers
le composant PageNotFound affichant une page 404 dans le cas où l'utilisateur tenterait
d'aller sur une route non-prévue dans le router.

Une example de store Pinia est intégré avec un example d'import dans le composant Home.

Le package vee-validate pour la validation de formulaire est intégré. 
Le package axios pour requêtes HTTP est intégré.
        
    