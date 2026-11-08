# Guide de l'autorisation d'enregistrement de l'écran (macOS)

## Pourquoi Nicasa a-t-il besoin de l'autorisation d'enregistrement de l'écran ?

Sous macOS, les applications de capture d'écran doivent disposer de l'autorisation d'enregistrement de l'écran pour pouvoir lire les pixels de l'affichage.

Depuis macOS 10.15 Catalina, Apple a introduit des protections de confidentialité plus strictes. Toute application qui capture le contenu de l'écran — y compris les captures d'écran — doit être explicitement approuvée par l'utilisateur.

Cela s'applique à toutes les applications, y compris celles téléchargées depuis le Mac App Store.

**Sans cette autorisation, Nicasa ne peut ni prendre de captures d'écran ni enregistrer le contenu de l'écran.**

## Comment activer l'autorisation d'enregistrement de l'écran

Suivez ces étapes :

1. Ouvrez **Réglages Système**
2. Allez dans **Confidentialité et sécurité**
3. Sélectionnez **Enregistrement de l'écran**
4. Trouvez **Nicasa** dans la liste et cochez la case

Si l'application était déjà en cours d'exécution, redémarrez Nicasa après avoir accordé l'autorisation.

## Si la demande d'autorisation n'est pas apparue

La boîte de dialogue apparaît généralement la première fois que l'application tente de capturer l'écran.

Si vous n'avez pas vu la demande, cela peut être dû à :

- une demande d'autorisation précédemment refusée
- un état d'autorisation mis en cache par macOS
- une tentative de capture avant que la boîte de dialogue puisse s'afficher

Dans ce cas, vous devrez peut-être réinitialiser l'autorisation.

## Réinitialiser l'autorisation d'enregistrement de l'écran

Vous pouvez réinitialiser l'autorisation avec la commande suivante dans le Terminal :

```bash
tccutil reset ScreenCapture com.nicasa.nue
```

Après avoir exécuté la commande :

1. Redémarrez Nicasa
2. Déclenchez à nouveau la fonction de capture
3. macOS devrait afficher de nouveau la demande d'autorisation

## Si la réinitialisation ne fonctionne pas

Dans de rares cas, macOS peut conserver un état d'autorisation invalide.

Si la réinitialisation ne résout pas le problème, essayez les étapes suivantes :

1. Quittez Nicasa
2. Supprimez Nicasa de votre dossier Applications
3. Réinstallez la dernière version depuis le Mac App Store
4. Relancez l'application
5. Lorsque macOS demande l'autorisation d'enregistrement de l'écran, sélectionnez **Autoriser**

Réinstaller l'application peut forcer macOS à recréer l'entrée d'autorisation.

## Solution manuelle alternative

Vous pouvez également basculer l'autorisation manuellement :

1. Ouvrez **Réglages Système**
2. Allez dans **Confidentialité et sécurité**
3. Ouvrez **Enregistrement de l'écran**
4. Décochez Nicasa, puis cochez-le à nouveau
5. Redémarrez Nicasa

## Remarque de sécurité

Accorder l'autorisation d'enregistrement de l'écran ne permet pas à Nicasa de contrôler votre système.

Elle permet uniquement à l'application de lire les pixels de l'écran pour les fonctions de capture.

Vous pouvez révoquer cette autorisation à tout moment dans :
**Réglages Système → Confidentialité et sécurité → Enregistrement de l'écran**
