# Contribuer

Nous accueillons avec plaisir les contributions pour améliorer la documentation d'assistance Nicasa ! Que vous corrigiez une faute de frappe, ajoutiez un nouveau guide ou amélioriez le contenu existant, votre aide est appréciée.

## Façons de contribuer

### Améliorations de la documentation
- corriger les fautes de frappe ou de grammaire
- clarifier des instructions ambiguës
- ajouter des informations manquantes
- mettre à jour du contenu obsolète
- améliorer la mise en forme et la lisibilité

### Nouveau contenu
- créer des guides pour des problèmes courants
- ajouter des tutoriels ou des exemples
- traduire la documentation dans d'autres langues
- rédiger des entrées de FAQ

### Contributions techniques
- améliorer le processus de compilation
- ajouter de nouvelles fonctionnalités au site de documentation
- corriger des bugs dans le flux de déploiement

## Premiers pas

### Prérequis
- Node.js 18 ou version ultérieure
- gestionnaire de paquets pnpm
- Git

### Mise en place de l'environnement de développement

1. **Forkez le dépôt** sur GitHub
2. **Clonez votre fork** :
   ```bash
   git clone https://github.com/YOUR_USERNAME/nicasa-support.git
   cd nicasa-support
   ```
3. **Installez les dépendances** :
   ```bash
   pnpm install
   ```
4. **Lancez le serveur de développement** :
   ```bash
   pnpm docs:dev
   ```
5. **Ouvrez** `http://localhost:5173` dans votre navigateur

### Apporter des modifications

1. Créez une nouvelle branche pour vos modifications :
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Apportez vos modifications aux fichiers de documentation dans `docs/`
3. Testez vos modifications en compilant le site :
   ```bash
   pnpm docs:build
   ```
4. Validez vos modifications :
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Soumettre des modifications

1. **Poussez votre branche** sur votre fork :
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Créez une Pull Request** sur GitHub
3. **Attendez la relecture** et répondez aux retours

## Directives

### Style de rédaction
- utilisez un langage clair et concis
- privilégiez la voix active
- soyez inclusif et accueillant
- utilisez une mise en forme cohérente
- incluez des exemples de code lorsque c'est utile

### Structure des fichiers
- les pages de documentation vont dans `docs/`
- les guides vont dans `docs/guide/`
- utilisez des noms de fichiers en minuscules avec des tirets : `my-new-guide.md`
- le frontmatter n'est pas obligatoire mais peut servir aux métadonnées

### Liens
- utilisez des liens relatifs pour la documentation interne
- liez vers des ressources externes lorsque c'est utile
- assurez-vous que tous les liens fonctionnent

### Images et ressources
- placez les images dans `docs/public/` ou ses sous-dossiers
- utilisez des noms de fichiers descriptifs
- optimisez les images pour le web (moins de 500 Ko de préférence)

## Multilingue

Le site prend en charge 7 langues : anglais (`docs/`), espagnol (`es`), chinois simplifié (`zh-CN`), chinois traditionnel (`zh-TW`), japonais (`ja`), allemand (`de`) et français (`fr`).

- les pages de chaque langue vont dans `docs/<lang>/`, avec une structure de dossiers qui correspond un à un à la version anglaise
- les liens internes des traductions doivent inclure le préfixe de langue, par exemple `/fr/guide/usage`
- les textes de la page d'accueil se trouvent dans le frontmatter `home:` de `index.md`
- lors de l'ajout d'une langue, mettez à jour simultanément `STR`, `MD` et `locales` dans `docs/.vitepress/config.ts`

## Code de conduite

Ce projet suit un code de conduite. En participant, vous acceptez de :
- être respectueux et inclusif
- privilégier les retours constructifs
- assumer la responsabilité de vos erreurs

Consultez [CODE_OF_CONDUCT.md](https://github.com/nicasa-project/nicasa-support/blob/main/CODE_OF_CONDUCT.md) pour plus de détails.

## Des questions ?

Si vous avez des questions sur la contribution :
- consultez les [tickets](https://github.com/nicasa-project/nicasa-support/issues) et [discussions](https://github.com/nicasa-project/nicasa-support/discussions) existants
- créez un nouveau ticket si nécessaire
- contactez les mainteneurs

Merci d'aider à améliorer la documentation d'assistance Nicasa ! 🎉
