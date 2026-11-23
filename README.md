# Julias digitaler Adventskalender ❤️

Eine responsive, romantische GitHub-Pages-Webseite mit 24 Türchen, Karten-Umdreh-Animation und dem Liebesbrief-Finale am 24. Dezember 2026.

## Auf GitHub Pages veröffentlichen

1. Auf https://github.com einloggen und **New repository** wählen.
2. Einen Namen vergeben, z. B. `advent-fuer-julia`, und **Public** wählen (GitHub Pages ist bei kostenlosen Konten für öffentliche Repositories verfügbar).
3. Die drei Dateien `index.html`, `style.css` und `script.js` direkt ins Stammverzeichnis des Repositories hochladen: **Add file → Upload files → Commit changes**.
4. Unter **Settings → Pages → Build and deployment** bei **Source** `Deploy from a branch` wählen; Branch `main`, Ordner `/(root)` und **Save**.
5. Nach der Veröffentlichung erscheint die URL `https://DEIN-NUTZERNAME.github.io/advent-fuer-julia/` (Nutzername und Repositoryname ersetzen). Den Link kannst du Julia schicken.

## Vorher selbst testen

Öffne die veröffentlichte Webseite mit `?preview=1` am Ende der URL, z. B. `https://DEIN-NUTZERNAME.github.io/advent-fuer-julia/?preview=1`. Damit kannst du alle 24 Türchen einschließlich Finale ansehen. Mit `?preview=1&day=12` simulierst du den 12. Dezember. **Schicke Julia nur den normalen Link ohne Vorschauparameter.**

## Wichtig

- Die Seite schaltet die Türchen nach dem lokalen Datum des Geräts frei, beginnend am 1. Dezember **2026**. Vorher sind alle Türchen gesperrt, nach dem 24. Dezember bleiben alle offen.
- Die Vorschau und der Quellcode sind technisch einsehbar. Das ist eine spielerische Datumssperre, kein Manipulationsschutz.
- Bereits geöffnete Türchen werden lokal im Browser gespeichert. Wenn Julia den Browser wechselt oder Daten löscht, verschwindet die Herzmarkierung, die bereits erreichten Türchen bleiben aber lesbar.
- GitHub Pages veröffentlicht den Quellcode und die Texte öffentlich. Wer die URL kennt, kann die Seite besuchen; die Inhalte sind nicht vertraulich.
- Google Fonts benötigen eine Internetverbindung. Die Seite bleibt bei Ausfall mit Ersatzschriften benutzbar.
- Die 24 Texte kannst du direkt im Array `messages` in `script.js` ändern.
- Das Jahr kannst du über `const year = 2026;` in `script.js` ändern.
