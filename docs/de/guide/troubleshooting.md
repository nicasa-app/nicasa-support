# Fehlerbehebung

## Häufige Probleme

### App startet nicht

**Symptome**: Nicasa startet nicht oder stürzt sofort ab

**Lösungen**:
1. Stelle sicher, dass du macOS 10.13 oder neuer verwendest
2. Prüfe, ob du mindestens 4 GB RAM hast
3. Starte deinen Mac neu
4. Installiere Nicasa aus dem Mac App Store neu
5. Prüfe, ob konkurrierende Apps laufen

### Screenshots funktionieren nicht

**Symptome**: Die Screenshot-Funktion funktioniert nicht

**Lösungen**:
1. **Berechtigung zur Bildschirmaufnahme erteilen**:
   - Gehe zu Systemeinstellungen > Datenschutz & Sicherheit > Bildschirmaufnahme
   - Setze ein Häkchen neben Nicasa
   - Starte Nicasa neu
2. Stelle sicher, dass keine anderen Screenshot-Werkzeuge laufen
3. Versuche, deinen Mac neu zu starten

### Chrome-Erweiterung funktioniert nicht

**Symptome**: Die Erweiterung erscheint nicht oder extrahiert keine Bilder

**Lösungen**:
1. Stelle sicher, dass die Erweiterung in Chrome aktiviert ist
2. Prüfe, ob du eine kompatible Chrome-Version verwendest
3. Lade die Webseite neu
4. Installiere die Erweiterung neu
5. Leere Browser-Cache und Cookies

### Bilder werden nicht geladen

**Symptome**: Miniaturansichten erscheinen nicht oder Bilder lassen sich nicht öffnen

**Lösungen**:
1. Prüfe die Dateiberechtigungen der Bilddateien
2. Stelle sicher, dass die Bilder nicht beschädigt sind
3. Prüfe, ob das Format unterstützt wird (JPEG, PNG, GIF, BMP, TIFF, WebP)
4. Öffne den Ordner erneut
5. Starte Nicasa neu

### Langsame Leistung

**Symptome**: Die App reagiert träge oder Miniaturansichten laden langsam

**Lösungen**:
1. Schließe andere speicherintensive Apps
2. Stelle ausreichend freien RAM sicher (8 GB empfohlen)
3. Verringere die Rastergröße der Miniaturansichten in den Einstellungen
4. Leere den App-Cache
5. Starte deinen Mac neu

### KI-Editor funktioniert nicht

**Symptome**: KI-Bearbeitungswerkzeuge sind nicht verfügbar oder funktionieren nicht

**Lösungen**:
1. Stelle eine stabile Internetverbindung sicher (für einige Funktionen)
2. Prüfe, ob dein Mac die Mindestanforderungen erfüllt
3. Starte Nicasa neu
4. Aktualisiere auf die neueste Version
5. Kontaktiere den Support, wenn das Problem bleibt

### Berechtigungsprobleme

**Symptome**: Die App fragt nach Berechtigungen oder bestimmte Funktionen funktionieren nicht

**Lösungen**:
1. **Bildschirmaufnahme**: Systemeinstellungen > Datenschutz & Sicherheit > Bildschirmaufnahme
2. **Bedienungshilfen**: Systemeinstellungen > Datenschutz & Sicherheit > Bedienungshilfen (für den Overlay-Modus)
3. **Dateien und Ordner**: Systemeinstellungen > Datenschutz & Sicherheit > Dateien und Ordner
4. Starte Nicasa nach dem Erteilen der Berechtigungen neu

### Probleme mit dem Overlay-Modus

**Symptome**: Der transparente Overlay-Modus funktioniert nicht richtig

**Lösungen**:
1. Erteile die Berechtigung für Bedienungshilfen in den Systemeinstellungen
2. Stelle sicher, dass keine anderen Overlay-Werkzeuge laufen
3. Schalte den Overlay-Modus aus und wieder ein
4. Starte Nicasa neu

## Fehlermeldungen

### „Berechtigung zur Bildschirmaufnahme erforderlich“

**Lösung**: Erteile die Berechtigung zur Bildschirmaufnahme wie oben im Abschnitt „Screenshots funktionieren nicht“ beschrieben.

### „Bild konnte nicht geladen werden“

**Mögliche Ursachen**:
- Die Datei ist beschädigt
- Nicht unterstütztes Format
- Problem mit den Dateiberechtigungen
- Die Datei ist zu groß

**Lösungen**:
1. Öffne die Datei mit „Vorschau“, um zu prüfen, ob sie gültig ist
2. Konvertiere sie in ein unterstütztes Format
3. Prüfe die Dateiberechtigungen
4. Stelle sicher, dass die Dateigröße angemessen ist

### „Erweiterung reagiert nicht“

**Lösung**: Lade die Webseite neu und versuche es erneut. Wenn das Problem bleibt, installiere die Erweiterung neu.

## Hilfe erhalten

Wenn die Probleme weiterhin bestehen:

1. Lies diese Anleitung zur Fehlerbehebung
2. Besuche unsere [FAQ](/de/guide/faq)
3. Reiche ein Issue auf [GitHub](https://github.com/nicasa-app/nicasa-support/issues) ein
4. Gib deine macOS-Version, die Nicasa-Version und die genauen Schritte zur Reproduktion an

## Systeminformationen

Wenn du Probleme meldest, gib bitte an:

- macOS-Version (Apple-Menü > Über diesen Mac)
- Nicasa-Version (Nicasa > Über Nicasa)
- Mac-Modell und Chip (Apple Silicon oder Intel)
- Schritte zur Reproduktion des Problems
- Eventuelle Fehlermeldungen

Das bedeutet normalerweise, dass die Bilddatei verschoben oder gelöscht wurde. Öffne den Ordner erneut oder wähle ein anderes Verzeichnis.

### „Nicht unterstütztes Format“

Das Bildformat wird nicht erkannt. Prüfe unsere Liste der [unterstützten Formate](/de/guide/usage) oder konvertiere das Bild in ein kompatibles Format.

### „Nicht genügend Speicher“

Dein System hat nicht genügend RAM. Schließe andere Apps oder erweitere deinen Arbeitsspeicher.

## Erweiterte Fehlerbehebung

### Protokolle anzeigen

Zugriff auf die App-Protokolle:

1. Gehe zu Hilfe > Protokolle anzeigen
2. Oder finde die Protokolle unter:
   - Windows: `%APPDATA%\Nicasa\logs`
   - macOS: `~/Library/Application Support/Nicasa/logs`
   - Linux: `~/.config/Nicasa/logs`

### App zurücksetzen

Um alle Einstellungen auf die Standardwerte zurückzusetzen:

1. Schließe Nicasa
2. Lösche den Datenordner der App
3. Starte Nicasa neu

### Kommandozeilenoptionen

Für fortgeschrittene Nutzer unterstützt Nicasa Kommandozeilenargumente:

```bash
nicasa --verbose          # Ausführliche Protokollierung aktivieren
nicasa --reset-settings   # Alle Einstellungen zurücksetzen
nicasa /path/to/folder    # Bestimmten Ordner öffnen
```

## Weitere Hilfe

Wenn diese Lösungen dein Problem nicht beheben:

1. Besuche unsere [FAQ](/de/guide/faq)
2. Durchsuche bestehende [Issues](https://github.com/nicasa-project/nicasa-support/issues)
3. Erstelle ein neues Issue mit:
   - Deinem Betriebssystem und der Version
   - Der Nicasa-Version
   - Den Schritten zur Reproduktion des Problems
   - Eventuellen Fehlermeldungen oder Screenshots
