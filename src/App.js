import React from "react";

// Helpers
import { calculateStepDuration, getActiveSteps } from "./utils/helpers";

// Components
import Controls from "./components/Controls";
import Channel from "./components/Channel";
import Footer from "./components/Footer";

// Styles
import "./App.css";

const channels = [
  {
    id: "kick",
    description: "Kick",
    color: "palegreen",
    isMute: false,
    playSolo: false,
    soundSrc: "/sounds/kick.wav"
  },
  {
    id: "snare",
    description: "Snare",
    color: "deepskyblue",
    isMute: false,
    playSolo: false,
    soundSrc: "/sounds/snare.wav"
  },
  {
    id: "hihat",
    description: "Hi-Hat",
    color: "deeppink",
    isMute: false,
    playSolo: false,
    soundSrc: "/sounds/hihat.wav"
  }
];

const App = () => {
  const handlePlayPauseClick = () => {
    let currentStep = 0;
    const totalSteps = 15;

    const delay = calculateStepDuration();
    const activeSteps = getActiveSteps();

    window.setInterval(function() {
      activeSteps
        .filter(step => step.id.split("-")[2] == currentStep)
        .map(step => step.children[0].play());

      currentStep = currentStep < totalSteps ? currentStep + 1 : 0;

    }, delay);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Awesome drum machine</p>
      </header>
      <Controls onPlayPauseClick={handlePlayPauseClick} />
      {channels.map((channel, i) => (
        <Channel key={`chan${i}`} {...channel} />
      ))}
      <button>+ Add new channel</button>
      <Footer />
    </div>
  );
};

export default App;
