export const DEFAULT_CHANNELS = [
  {
    id: "channel-kick-1",
    description: "Kick",
    type: "kick",
    color: "palegreen",
    mute: false,
    solo: false,
    soundSrc: "/sounds/kick.wav"
  },
  {
    id: "channel-snare-1",
    description: "Snare",
    type: "snare",
    color: "deepskyblue",
    mute: false,
    solo: false,
    soundSrc: "/sounds/snare.wav"
  },
  {
    id: "channel-hihat-1",
    description: "Hi-Hat",
    type: "open_hihat",
    color: "deeppink",
    mute: false,
    solo: false,
    soundSrc: "/sounds/hihat.wav"
  }
];

export const PROPERTIES = {
  SOLO: "solo",
  MUTE: "mute"
};

export const BPM_CHANGE = {
  LESS: "less",
  MORE: "more"
};

export const CHANNEL_TYPES = {
  KICK: "kick",
  SNARE: "snare",
  HIHAT: "hihat"
};
