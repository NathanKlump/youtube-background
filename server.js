const express = require('express');
const cors = require('cors');
const getYouTubeAudio = require('youtube-audio-stream');

const app = express();
app.use(cors());

app.get('/audio/:videoId', (req, res) => {
  try {
    const videoUrl = `https://www.youtube.com/watch?v=${req.params.videoId}`;
    getYouTubeAudio(videoUrl).pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while fetching the audio stream');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
