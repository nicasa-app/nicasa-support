# Dépannage

## Problèmes courants

### L'application ne démarre pas

**Symptômes** : Nicasa ne se lance pas ou plante immédiatement

**Solutions** :
1. Vérifiez que vous utilisez macOS 10.13 ou version ultérieure
2. Vérifiez que vous disposez d'au moins 4 Go de RAM
3. Redémarrez votre Mac
4. Réinstallez Nicasa depuis le Mac App Store
5. Vérifiez la présence d'applications en conflit

### Les captures d'écran ne fonctionnent pas

**Symptômes** : la fonction de capture d'écran ne fonctionne pas

**Solutions** :
1. **Accordez l'autorisation d'enregistrement de l'écran** :
   - Allez dans Réglages Système > Confidentialité et sécurité > Enregistrement de l'écran
   - Cochez la case en face de Nicasa
   - Redémarrez Nicasa
2. Vérifiez qu'aucun autre outil de capture n'est en cours d'exécution
3. Essayez de redémarrer votre Mac

### L'extension Chrome ne fonctionne pas

**Symptômes** : l'extension n'apparaît pas ou n'extrait pas d'images

**Solutions** :
1. Vérifiez que l'extension est activée dans Chrome
2. Vérifiez que vous utilisez une version compatible de Chrome
3. Essayez d'actualiser la page web
4. Réinstallez l'extension
5. Videz le cache et les cookies du navigateur

### Les images ne se chargent pas

**Symptômes** : les miniatures n'apparaissent pas ou les images ne s'ouvrent pas

**Solutions** :
1. Vérifiez les autorisations des fichiers image
2. Assurez-vous que les images ne sont pas corrompues
3. Vérifiez que le format est pris en charge (JPEG, PNG, GIF, BMP, TIFF, WebP)
4. Essayez de rouvrir le dossier
5. Redémarrez Nicasa

### Performances lentes

**Symptômes** : l'application est lente ou les miniatures se chargent lentement

**Solutions** :
1. Fermez les autres applications gourmandes en mémoire
2. Vérifiez que vous disposez de suffisamment de RAM libre (8 Go recommandés)
3. Réduisez la taille de la grille de miniatures dans les préférences
4. Videz le cache de l'application
5. Redémarrez votre Mac

### L'éditeur IA ne fonctionne pas

**Symptômes** : les outils d'édition par IA sont indisponibles ou ne fonctionnent pas

**Solutions** :
1. Vérifiez que votre connexion internet est stable (pour certaines fonctions)
2. Vérifiez que votre Mac répond à la configuration minimale
3. Redémarrez Nicasa
4. Mettez à jour vers la dernière version
5. Contactez l'assistance si le problème persiste

### Problèmes d'autorisations

**Symptômes** : l'application demande des autorisations ou certaines fonctions ne marchent pas

**Solutions** :
1. **Enregistrement de l'écran** : Réglages Système > Confidentialité et sécurité > Enregistrement de l'écran
2. **Accessibilité** : Réglages Système > Confidentialité et sécurité > Accessibilité (pour le mode superposition)
3. **Fichiers et dossiers** : Réglages Système > Confidentialité et sécurité > Fichiers et dossiers
4. Redémarrez Nicasa après avoir accordé les autorisations

### Problèmes avec le mode superposition

**Symptômes** : le mode superposition transparente ne fonctionne pas correctement

**Solutions** :
1. Accordez l'autorisation d'accessibilité dans Réglages Système
2. Vérifiez qu'aucun autre outil de superposition n'est en cours d'exécution
3. Essayez de désactiver puis réactiver le mode superposition
4. Redémarrez Nicasa

## Messages d'erreur

### « Autorisation d'enregistrement de l'écran requise »

**Solution** : accordez l'autorisation d'enregistrement de l'écran comme décrit ci-dessus dans la section « Les captures d'écran ne fonctionnent pas ».

### « Impossible de charger l'image »

**Causes possibles** :
- Le fichier est corrompu
- Format non pris en charge
- Problème d'autorisations du fichier
- Le fichier est trop volumineux

**Solutions** :
1. Essayez d'ouvrir le fichier avec Aperçu pour vérifier qu'il est valide
2. Convertissez-le dans un format pris en charge
3. Vérifiez les autorisations du fichier
4. Vérifiez que la taille du fichier est raisonnable

### « L'extension ne répond pas »

**Solution** : actualisez la page web et réessayez. Si le problème persiste, réinstallez l'extension.

## Obtenir de l'aide

Si les problèmes persistent :

1. Consultez ce guide de dépannage
2. Rendez-vous sur notre [FAQ](/fr/guide/faq)
3. Ouvrez un ticket sur [GitHub](https://github.com/nicasa-app/nicasa-support/issues)
4. Indiquez votre version de macOS, la version de Nicasa et les étapes détaillées pour reproduire le problème

## Informations système

Lors d'un signalement, veuillez inclure :

- Version de macOS (menu Apple > À propos de ce Mac)
- Version de Nicasa (Nicasa > À propos de Nicasa)
- Modèle et puce du Mac (Apple Silicon ou Intel)
- Étapes pour reproduire le problème
- Tous les messages d'erreur

Cela signifie généralement que le fichier image a été déplacé ou supprimé. Essayez de rouvrir le dossier ou de sélectionner un autre répertoire.

### « Format non pris en charge »

Le format de l'image n'est pas reconnu. Consultez notre liste des [formats pris en charge](/fr/guide/usage) ou convertissez l'image dans un format compatible.

### « Mémoire insuffisante »

Votre système manque de RAM. Fermez d'autres applications ou augmentez votre mémoire.

## Dépannage avancé

### Consulter les journaux

Pour accéder aux journaux de l'application :

1. Allez dans Aide > Afficher les journaux
2. Ou trouvez les journaux dans :
   - Windows : `%APPDATA%\Nicasa\logs`
   - macOS : `~/Library/Application Support/Nicasa/logs`
   - Linux : `~/.config/Nicasa/logs`

### Réinitialiser l'application

Pour rétablir tous les réglages par défaut :

1. Fermez Nicasa
2. Supprimez le dossier de données de l'application
3. Redémarrez Nicasa

### Options de ligne de commande

Pour les utilisateurs avancés, Nicasa prend en charge les arguments de ligne de commande :

```bash
nicasa --verbose          # Activer la journalisation détaillée
nicasa --reset-settings   # Réinitialiser tous les réglages
nicasa /path/to/folder    # Ouvrir un dossier précis
```

## Obtenir plus d'aide

Si ces solutions ne résolvent pas votre problème :

1. Consultez notre [FAQ](/fr/guide/faq)
2. Recherchez dans les [tickets](https://github.com/nicasa-project/nicasa-support/issues) existants
3. Créez un nouveau ticket avec :
   - Votre système d'exploitation et sa version
   - La version de Nicasa
   - Les étapes pour reproduire le problème
   - Tous les messages d'erreur ou captures d'écran
