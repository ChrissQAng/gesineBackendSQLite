# Gesine Grundmann Website (PayloadCMS 3.0 + Next.js + SQLite)

Vollständige Website für Gesine Grundmann mit integriertem CMS und Frontend.

## Features

- **Integriertes Frontend & Backend**: Next.js 15 + PayloadCMS 3.0 in einer Anwendung
- **SQLite Database**: Self-contained `local.db` Datei – kein externer DB-Server nötig
- **Media Support**: Uploads für Bilder und Videos
- **Rich Text Editor**: Für Beschreibungen und Texte
- **Mehrsprachig**: DE/EN Unterstützung

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: PayloadCMS 3.0
- **Database**: SQLite (libsql)
- **Styling**: CSS Modules

## Projektstruktur

```
src/
├── app/
│   ├── (frontend)/        # Öffentliche Website-Seiten
│   │   ├── page.tsx       # Home
│   │   ├── about/         # Über / Lebenslauf
│   │   ├── works/         # Werke-Übersicht
│   │   ├── details/       # Werk-Detailseiten
│   │   ├── texts/         # Texte
│   │   ├── music/         # Musik
│   │   ├── views/         # Ansichten
│   │   ├── contact/       # Kontakt
│   │   └── imprint/       # Impressum
│   └── (payload)/         # Admin-Bereich (PayloadCMS)
├── collections/           # Payload Collections (Artists, Works, etc.)
├── components/            # React-Komponenten
└── payload.config.ts      # Payload-Konfiguration
```

## Getting Started

1. **Dependencies installieren**:

   ```bash
   npm install
   ```

2. **Environment File erstellen** (`.env`):

   ```env
   PAYLOAD_SECRET=dein-geheimer-schluessel
   DATABASE_URI=file:./local.db
   ```

3. **Development Server starten**:

   ```bash
   npm run dev
   ```

4. **Zugriff**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin-Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## Deployment (Apache + Node.js)

1. **Build erstellen**:

   ```bash
   npm run build
   ```

2. **Production starten**:

   ```bash
   npm start
   ```

   (Mit PM2: `pm2 start npm --name "gesine" -- start`)

3. **Apache Reverse Proxy**:

   ```apache
   <VirtualHost *:80>
       ServerName yourdomain.com

       ProxyPreserveHost On
       ProxyPass / http://localhost:3000/
       ProxyPassReverse / http://localhost:3000/
   </VirtualHost>
   ```

## Wichtige Befehle

| Befehl                   | Beschreibung             |
| ------------------------ | ------------------------ |
| `npm run dev`            | Development Server       |
| `npm run build`          | Production Build         |
| `npm start`              | Production Server        |
| `npm run generate:types` | Payload Types generieren |
