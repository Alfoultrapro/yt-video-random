const fetch = require('node-fetch');

exports.handler = async function(event) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const q = event.queryStringParameters.q;
  if (!q) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing query parameter "q"' }),
    };
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(q)}&maxResults=20&key=${YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const video = data.items[randomIndex];
      return {
        statusCode: 200,
        body: JSON.stringify({
          videoId: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnail: video.snippet.thumbnails.medium.url,
        }),
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Nessun video trovato!' }),
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Errore nella ricerca video.' }),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};