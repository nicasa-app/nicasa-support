# Leitfaden zur Berechtigung für Bildschirmaufnahme (macOS)

## Warum benötigt Nicasa die Berechtigung zur Bildschirmaufnahme?

Unter macOS müssen Screenshot- und Bildschirmaufnahme-Apps die Berechtigung zur Bildschirmaufnahme erhalten, um Pixel vom Display lesen zu dürfen.

Seit macOS 10.15 Catalina hat Apple strengere Datenschutzvorkehrungen eingeführt. Jede App, die Bildschirminhalte erfasst – einschließlich Screenshots – muss vom Nutzer ausdrücklich genehmigt werden.

Das gilt für alle Apps, auch für solche aus dem Mac App Store.

**Ohne diese Berechtigung kann Nicasa keine Screenshots erstellen und keine Bildschirminhalte aufnehmen.**

## So aktivierst du die Berechtigung zur Bildschirmaufnahme

Folge diesen Schritten:

1. Öffne die **Systemeinstellungen**
2. Gehe zu **Datenschutz & Sicherheit**
3. Wähle **Bildschirmaufnahme**
4. Suche **Nicasa** in der Liste und setze ein Häkchen

Wenn die App bereits lief, starte Nicasa nach dem Erteilen der Berechtigung neu.

## Wenn der Berechtigungsdialog nicht erschienen ist

Der Dialog erscheint normalerweise, wenn die App zum ersten Mal versucht, den Bildschirm zu erfassen.

Wenn du den Dialog nicht gesehen hast, kann das daran liegen, dass:

- die Berechtigungsanfrage zuvor abgelehnt wurde
- macOS den Berechtigungsstatus zwischengespeichert hat
- die App die Erfassung versucht hat, bevor der Dialog erscheinen konnte

In diesem Fall musst du die Berechtigung möglicherweise zurücksetzen.

## Berechtigung zur Bildschirmaufnahme zurücksetzen

Du kannst die Berechtigung mit folgendem Befehl im Terminal zurücksetzen:

```bash
tccutil reset ScreenCapture com.nicasa.nue
```

Nach dem Ausführen des Befehls:

1. Starte Nicasa neu
2. Löse die Screenshot-Funktion erneut aus
3. macOS sollte den Berechtigungsdialog erneut anzeigen

## Wenn das Zurücksetzen nicht hilft

In seltenen Fällen behält macOS einen ungültigen Berechtigungsstatus bei.

Wenn das Zurücksetzen der Berechtigung das Problem nicht löst, versuche folgende Schritte:

1. Beende Nicasa
2. Lösche Nicasa aus deinem Programme-Ordner
3. Installiere die neueste Version aus dem Mac App Store neu
4. Starte die App erneut
5. Wähle **Erlauben**, wenn macOS nach der Berechtigung zur Bildschirmaufnahme fragt

Eine Neuinstallation kann macOS dazu bringen, den Berechtigungseintrag neu anzulegen.

## Alternative manuelle Lösung

Du kannst die Berechtigung auch manuell umschalten:

1. Öffne die **Systemeinstellungen**
2. Gehe zu **Datenschutz & Sicherheit**
3. Öffne **Bildschirmaufnahme**
4. Entferne das Häkchen bei Nicasa und setze es erneut
5. Starte Nicasa neu

## Sicherheitshinweis

Die Berechtigung zur Bildschirmaufnahme erlaubt Nicasa nicht, dein System zu steuern.

Sie erlaubt der App lediglich, Bildschirmpixel für die Screenshot- und Aufnahmefunktionen zu lesen.

Du kannst diese Berechtigung jederzeit widerrufen unter:
**Systemeinstellungen → Datenschutz & Sicherheit → Bildschirmaufnahme**
