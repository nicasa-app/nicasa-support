# Mitwirken

Wir freuen uns über Beiträge zur Verbesserung der Nicasa-Support-Dokumentation! Ob du einen Tippfehler korrigierst, eine neue Anleitung hinzufügst oder bestehende Inhalte verbesserst – deine Hilfe ist willkommen.

## Wege, beizutragen

### Verbesserungen der Dokumentation
- Tippfehler oder Grammatikfehler korrigieren
- unklare Anweisungen verdeutlichen
- fehlende Informationen ergänzen
- veraltete Inhalte aktualisieren
- Formatierung und Lesbarkeit verbessern

### Neue Inhalte
- Anleitungen für häufige Probleme erstellen
- Tutorials oder Beispiele hinzufügen
- Dokumentation in andere Sprachen übersetzen
- FAQ-Einträge schreiben

### Technische Beiträge
- den Build-Prozess verbessern
- neue Funktionen zur Dokumentationsseite hinzufügen
- Fehler im Deployment-Workflow beheben

## Erste Schritte

### Voraussetzungen
- Node.js 18 oder neuer
- pnpm-Paketmanager
- Git

### Entwicklungsumgebung einrichten

1. **Forke das Repository** auf GitHub
2. **Klone deinen Fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nicasa-support.git
   cd nicasa-support
   ```
3. **Installiere die Abhängigkeiten**:
   ```bash
   pnpm install
   ```
4. **Starte den Entwicklungsserver**:
   ```bash
   pnpm docs:dev
   ```
5. **Öffne** `http://localhost:5173` in deinem Browser

### Änderungen vornehmen

1. Erstelle einen neuen Branch für deine Änderungen:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Nimm deine Änderungen an den Dokumentationsdateien in `docs/` vor
3. Prüfe deine Änderungen, indem du die Seite baust:
   ```bash
   pnpm docs:build
   ```
4. Committe deine Änderungen:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Änderungen einreichen

1. **Pushe deinen Branch** in deinen Fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Erstelle einen Pull Request** auf GitHub
3. **Warte auf das Review** und gehe auf Feedback ein

## Richtlinien

### Schreibstil
- Verwende klare, knappe Sprache
- Schreibe möglichst im Aktiv
- Sei inklusiv und einladend
- Verwende eine einheitliche Formatierung
- Füge Codebeispiele ein, wo sie helfen

### Dateistruktur
- Dokumentationsseiten liegen in `docs/`
- Anleitungen liegen in `docs/guide/`
- Dateinamen in Kleinbuchstaben mit Bindestrichen: `my-new-guide.md`
- Frontmatter ist nicht erforderlich, kann aber für Metadaten genutzt werden

### Links
- Verwende relative Links für interne Dokumentation
- Verlinke externe Ressourcen, wo es hilft
- Stelle sicher, dass alle Links funktionieren

### Bilder und Assets
- Lege Bilder in `docs/public/` oder Unterordnern ab
- Verwende beschreibende Dateinamen
- Optimiere Bilder für das Web (möglichst unter 500 KB)

## Mehrsprachigkeit

Die Seite unterstützt 7 Sprachen: Englisch (`docs/`), Spanisch (`es`), Chinesisch (vereinfacht, `zh-CN`), Chinesisch (traditionell, `zh-TW`), Japanisch (`ja`), Deutsch (`de`) und Französisch (`fr`).

- Seiten jeder Sprache liegen in `docs/<lang>/` mit einer Ordnerstruktur, die eins zu eins der englischen Version entspricht
- Interne Links in Übersetzungen benötigen das Sprachpräfix, zum Beispiel `/de/guide/usage`
- Die Texte der Startseite liegen im `home:`-Frontmatter von `index.md`
- Beim Hinzufügen einer Sprache müssen `STR`, `MD` und `locales` in `docs/.vitepress/config.ts` gleichzeitig aktualisiert werden

## Verhaltenskodex

Dieses Projekt folgt einem Verhaltenskodex. Mit deiner Teilnahme erklärst du dich einverstanden:
- respektvoll und inklusiv zu sein
- konstruktives Feedback in den Mittelpunkt zu stellen
- Verantwortung für Fehler zu übernehmen

Details findest du in [CODE_OF_CONDUCT.md](https://github.com/nicasa-project/nicasa-support/blob/main/CODE_OF_CONDUCT.md).

## Fragen?

Wenn du Fragen zum Mitwirken hast:
- Prüfe bestehende [Issues](https://github.com/nicasa-project/nicasa-support/issues) und [Diskussionen](https://github.com/nicasa-project/nicasa-support/discussions)
- Erstelle bei Bedarf ein neues Issue
- Kontaktiere die Maintainer

Danke, dass du hilfst, die Nicasa-Support-Dokumentation zu verbessern! 🎉
