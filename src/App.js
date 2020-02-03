import React from "react";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Awesome drum machine</p>
      </header>
      <Controls />
      {channels.map((channel, i) => (
        <Channel key={`chan${i}`} {...channel} />
      ))}
      <button>+ Add new channel</button>
      <Footer />
    </div>
  );
}

export default App;
