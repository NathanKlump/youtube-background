import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>YouTube Audio Background Player</h1>
        <VideoPlayer />
      </header>
    </div>
  );
}

function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=t-E2gm0a_N0&list=PLeRj4b8xSv41Lv9dJ1I7Mk8RgQ3Kv1YC_&index=1"
      playing
      controls
      config={{
        youtube: {
          playerVars: { autoplay: 1, modestbranding: 1 },
        },
      }}
    />
  );
}

export default App;
