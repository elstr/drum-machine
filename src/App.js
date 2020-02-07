import React, { useState } from "react";

// Helpers
import {
  DEFAULT_CHANNELS,
  PROPERTIES,
  BPM_CHANGE,
  CHANNEL_TYPES
} from "./utils/constants";
import {
  playPattern,
  stopPattern,
  calculateStepDuration,
  getNewChannelId
} from "./utils/helpers";

// Components
import { Button } from "./components/_common";
import Controls from "./components/Controls";
import Channel from "./components/Channel";
import Footer from "./components/Footer";

// Styles
import "./App.css";

const App = () => {
  const [channels, setChannels] = useState(DEFAULT_CHANNELS);
  const [isPlaying, setPlaying] = useState(false);
  const [BPM, setBPM] = useState(120);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      setPlaying(false);
      stopPattern();
      return;
    }
    const stepDuration = calculateStepDuration({ BPM });
    const soloChannels = channels.filter(c => c.solo);
    setPlaying(true);
    playPattern({ totalSteps: 16, stepDuration, soloChannels });
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

  const handleBPMChange = operation =>
    operation === BPM_CHANGE.MORE ? setBPM(BPM + 1) : setBPM(BPM - 1);

  const handleRemoveChannel = channelId => {
    const index = channels.findIndex(c => c.id === channelId);
    const updatedChannels = [
      ...channels.slice(0, index),
      ...channels.slice(index + 1)
    ];
    setChannels(updatedChannels);
  };

  const handleAddChannel = () => {
    const newId = getNewChannelId({
      channels,
      channelType: CHANNEL_TYPES.KICK
    });
    const newChannel = Object.assign({}, DEFAULT_CHANNELS[0], { id: newId });
    setChannels([...channels, newChannel]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Awesome drum machine</p>
      </header>
      <Controls
        BPM={BPM}
        moreLessBPMClick={handleBPMChange}
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPauseClick}
      />
      {channels.map((chan, i) => (
        <Channel
          removeChannel={handleRemoveChannel}
          updateChannel={handleChannelUpdate}
          key={`chan${i}`}
          {...chan}
        />
      ))}
      <Button onClick={handleAddChannel}>+ Add new channel</Button>
      <Footer />
    </div>
  );
};

export default App;
