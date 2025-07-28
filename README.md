# YouTube Random Video Finder (Netlify Version)

Un sito moderno che, dato una parola o frase, mostra un video casuale di YouTube relativo a quella ricerca.

## Come funziona

- **Frontend** statico in `/public` (UI moderna, responsive, dark)
- **Backend** tramite funzione Netlify serverless in `/netlify/functions/random-video.js`
- **Configurazione Netlify** in `netlify.toml`
- **Dipendenze** minime (`node-fetch` per la funzione)

## Deploy su Netlify

1. **Copia questi file in una cartella.**
2. **Carica la cartella su una repo GitHub.**
3. **Collega la repo a Netlify.**
4. **Su Netlify, aggiungi la variabile ambiente:**
   - Key: `YOUTUBE_API_KEY`
   - Value: la tua chiave API YouTube

## Uso locale

1. Installa le dipendenze per la funzione:
   ```bash
   npm install
   ```
2. (Facoltativo) Usa [Netlify CLI](https://docs.netlify.com/cli/get-started/) per test locale:
   ```bash
   npm install -g netlify-cli
   netlify dev
   ```

## Struttura

- `public/index.html` — UI moderna
- `netlify/functions/random-video.js` — Funzione serverless (proxy verso API di YouTube)
- `netlify.toml` — Configurazione build Netlify
- `package.json` — Dipendenze funzione
- `README.md` — Questa guida

## Sicurezza

**NON pubblicare la tua chiave API senza restrizioni!**  
Imposta sempre limiti sulla tua API Key dalle impostazioni Google Cloud.

---

Creato con ❤️ per Alfoultrapro