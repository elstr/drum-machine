import React, { useState } from "react";

// Helpers
import { DEFAULT_CHANNELS, PROPERTIES } from "./utils/constants";
import { playPattern, calculateStepDuration } from "./utils/helpers";

// Components
import Controls from "./components/Controls";
import Channel from "./components/Channel";
import Footer from "./components/Footer";

// Styles
import "./App.css";

const App = () => {
  const [channels, setChannels] = useState(DEFAULT_CHANNELS);

  const handlePlayPauseClick = () => {
    const stepDuration = calculateStepDuration({ BPM: 60 });
    const soloChannels = channels.filter(c => c.solo)
    playPattern({ totalSteps: 15, stepDuration, soloChannels });
  };

  const handleChannelUpdate = (channelId, property) => {
    const index = channels.findIndex(c => c.id === channelId);
    const channelUpdated = Object.assign({}, channels[index]);

    // Channels can't be solo and mute at the same time
    if (property === PROPERTIES.SOLO) {
      channelUpdated.solo = !channelUpdated.solo;
      channelUpdated.mute = false;
    } else {
      channelUpdated.solo = false;
      channelUpdated.mute = !channelUpdated.mute;
    }

    const updatedChannels = [
      ...channels.slice(0, index),
      channelUpdated,
      ...channels.slice(index + 1)
    ];

    setChannels(updatedChannels);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Awesome drum machine</p>
      </header>
      <Controls onPlayPauseClick={handlePlayPauseClick} />
      {channels.map((chan, i) => (
        <Channel
          updateChannel={handleChannelUpdate}
          key={`chan${i}`}
          {...chan}
        />
      ))}
      <button>+ Add new channel</button>
      <Footer />
    </div>
  );
};

export default App;
