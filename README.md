# voltr² - Professional Electrical Toolbox ⚡

voltr² ist eine hochprofessionelle, browserbasierte Berechnungs-App für Elektrotechniker, Planer und angehende Meister (ausgerichtet auf die Schweizer NIN / IEC Normen). Das Tool kombiniert komplexe elektrotechnische Formeln mit einer extrem schnellen, modernen und offline-fähigen Benutzeroberfläche.

## ✨ Features
* **16+ Elektrotechnische Module:** Von Leitungsquerschnitt über Spannungsfall, Kurzschlussstrom ($I_k$), USV-Auslegung, PV-Anlagen bis hin zur Verlegeart ($I_z$).
* **Echtzeit Formel-Rendering:** Mathematische Formeln werden dank integrierter KaTeX-Engine in Echtzeit dynamisch generiert und umgestellt.
* **Globaler Verlauf (Auto-Save):** Ein intelligenter 5-Sekunden-Debounce-Timer speichert Berechnungen automatisch ab, ohne die UI zuzuspammen.
* **A4 Druck / PDF-Export:** Ein Klick wandelt das Dark-Mode-Dashboard in ein druckfertiges, sauberes Schwarz-Weiss-Protokoll inkl. Legende um.
* **Progressive Web App (PWA):** Kann wie eine native App auf iOS und Android installiert werden und funktioniert dank Service Worker zu 100% offline auf der Baustelle.
* **Dracula Theme:** Entwickelt für ermüdungsfreies Arbeiten in dunklen Umgebungen.

## 🚀 Installation & Hosting
Das Projekt kommt komplett ohne Backend-Server oder Datenbank aus (Client-Side Vanilla JS). 
1. Repository klonen oder als ZIP herunterladen.
2. Die Dateien auf einen beliebigen Webserver (FTP) laden oder **GitHub Pages** aktivieren.
3. Fertig! Auf dem Smartphone öffnen und "Zum Startbildschirm hinzufügen" wählen.

## 🛠️ Verwendete Technologien
* HTML5 / CSS3 (CSS Grid & Flexbox)
* Vanilla JavaScript (ES6+)
* [KaTeX](https://katex.org/) für das Formel-Rendering
* Service Workers für PWA & Offline-Fähigkeit

## 📝 Lizenz
© 2026 by Manuel Tüscher | voltr²
