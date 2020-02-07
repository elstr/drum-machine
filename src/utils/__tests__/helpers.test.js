import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../../App";

import { DEFAULT_CHANNELS, CHANNEL_TYPES, DIRECTIONS } from "../constants";
import {
  buildStepPattern,
  updateExistingPattern,
  calculateStepDuration,
  getActiveSteps,
  getNewChannelId,
  getNextChannel
} from "../helpers";

// JSDom doesn't support media operations
// As a workaround we to stub them
// Otherwise an error is shown while testing
window.HTMLMediaElement.prototype.load = () => {};
window.HTMLMediaElement.prototype.play = () => {};

test("Test buildStepPattern", () => {
  const dummyPattern = [
    {
      id: "channel-hihat-1-step-1",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-2",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-3",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-4",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-5",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-6",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-7",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-8",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-9",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-10",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-11",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-12",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-13",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-14",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-15",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-16",
      volume: 0
    }
  ];
  expect(buildStepPattern("channel-hihat-1")).toStrictEqual(dummyPattern);
});

test("Test updateExistingPattern", () => {
  const existingPattern = [
    {
      id: "channel-hihat-1-step-1",
      volume: 2
    },
    {
      id: "channel-hihat-1-step-2",
      volume: 1
    },
    {
      id: "channel-hihat-1-step-3",
      volume: 1
    },
    {
      id: "channel-hihat-1-step-4",
      volume: 1
    },
    {
      id: "channel-hihat-1-step-5",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-6",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-7",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-8",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-9",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-10",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-11",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-12",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-13",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-14",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-15",
      volume: 0
    },
    {
      id: "channel-hihat-1-step-16",
      volume: 0
    }
  ];
  const updatedPattern = [
    {
      id: "channel-snare-1-step-1",
      volume: 2
    },
    {
      id: "channel-snare-1-step-2",
      volume: 1
    },
    {
      id: "channel-snare-1-step-3",
      volume: 1
    },
    {
      id: "channel-snare-1-step-4",
      volume: 1
    },
    {
      id: "channel-snare-1-step-5",
      volume: 0
    },
    {
      id: "channel-snare-1-step-6",
      volume: 0
    },
    {
      id: "channel-snare-1-step-7",
      volume: 0
    },
    {
      id: "channel-snare-1-step-8",
      volume: 0
    },
    {
      id: "channel-snare-1-step-9",
      volume: 0
    },
    {
      id: "channel-snare-1-step-10",
      volume: 0
    },
    {
      id: "channel-snare-1-step-11",
      volume: 0
    },
    {
      id: "channel-snare-1-step-12",
      volume: 0
    },
    {
      id: "channel-snare-1-step-13",
      volume: 0
    },
    {
      id: "channel-snare-1-step-14",
      volume: 0
    },
    {
      id: "channel-snare-1-step-15",
      volume: 0
    },
    {
      id: "channel-snare-1-step-16",
      volume: 0
    }
  ];
  expect(
    updateExistingPattern({ existingPattern, newChannelId: "channel-snare-1" })
  ).toStrictEqual(updatedPattern);
});

test("Test calculateStepDuration", () => {
  expect(calculateStepDuration({ BPM: 60 })).toBe(500);
  expect(calculateStepDuration({ BPM: 120 })).toBe(250);
  expect(calculateStepDuration({ BPM: 150 })).toBe(200);
});

test("Test getNewChannelId", () => {
  expect(
    getNewChannelId({
      channels: DEFAULT_CHANNELS,
      channelType: CHANNEL_TYPES.KICK
    })
  ).toBe("channel-kick-2");
  expect(
    getNewChannelId({
      channels: DEFAULT_CHANNELS,
      channelType: CHANNEL_TYPES.SNARE
    })
  ).toBe("channel-snare-2");
  expect(
    getNewChannelId({
      channels: DEFAULT_CHANNELS,
      channelType: CHANNEL_TYPES.HIHAT
    })
  ).toBe("channel-hihat-2");
});

test("Test getNextChannel", () => {
  const { id, type } = DEFAULT_CHANNELS[0];
  expect(getNextChannel({ id, type, direction: DIRECTIONS.UP })).toStrictEqual(
    DEFAULT_CHANNELS[2]
  );
  expect(
    getNextChannel({ id, type, direction: DIRECTIONS.DOWN })
  ).toStrictEqual(DEFAULT_CHANNELS[1]);

  const channel1ID = DEFAULT_CHANNELS[1].id;
  const channel1Type = DEFAULT_CHANNELS[1].type;
  expect(
    getNextChannel({
      id: channel1ID,
      type: channel1Type,
      direction: DIRECTIONS.UP
    })
  ).toStrictEqual(DEFAULT_CHANNELS[0]);
  expect(
    getNextChannel({
      id: channel1ID,
      type: channel1Type,
      direction: DIRECTIONS.DOWN
    })
  ).toStrictEqual(DEFAULT_CHANNELS[2]);

  const channel2ID = DEFAULT_CHANNELS[2].id;
  const channel2Type = DEFAULT_CHANNELS[2].type;
  expect(
    getNextChannel({
      id: channel2ID,
      type: channel2Type,
      direction: DIRECTIONS.UP
    })
  ).toStrictEqual(DEFAULT_CHANNELS[1]);
  expect(
    getNextChannel({
      id: channel2ID,
      type: channel2Type,
      direction: DIRECTIONS.DOWN
    })
  ).toStrictEqual(DEFAULT_CHANNELS[0]);
});

test("Test getActiveSteps", () => {
  const { getByTestId } = render(<App />);
  const step1 = getByTestId("channel-kick-1-step-1");
  const step2 = getByTestId("channel-kick-1-step-2");

  fireEvent.click(step1);
  fireEvent.click(step2);
  expect(getActiveSteps([])).toHaveLength(2);
});

test("Test getActiveSteps with solo channels", () => {
  const { getByTestId } = render(<App />);
  const soloKickBtn = getByTestId("solo-channel-kick-1");
  const step1Kick = getByTestId("channel-kick-1-step-1");
  const step2Kick = getByTestId("channel-kick-1-step-2");

  const soloSnareBtn = getByTestId("solo-channel-snare-1");
  const step1Snare = getByTestId("channel-snare-1-step-1");
  const step2Snare = getByTestId("channel-snare-1-step-2");

  const step1HiHat = getByTestId("channel-hihat-1-step-1");
  const step2HiHat = getByTestId("channel-hihat-1-step-2");
  const soloHiHatBtn = getByTestId("solo-channel-snare-1");

  fireEvent.click(step1Kick);
  fireEvent.click(step2Kick);
  fireEvent.click(soloKickBtn);

  fireEvent.click(step1Snare);
  fireEvent.click(step2Snare);
  fireEvent.click(soloSnareBtn);

  fireEvent.click(step1HiHat);
  fireEvent.click(step2HiHat);

  const soloKickChannel = Object.assign({}, DEFAULT_CHANNELS[0], {
    solo: true
  });
  const soloSnareChannel = Object.assign({}, DEFAULT_CHANNELS[1], {
    solo: true
  });
  expect(getActiveSteps([soloKickChannel, soloSnareChannel])).toHaveLength(4);

  fireEvent.click(soloHiHatBtn);
  const soloHiHatChannel = Object.assign({}, DEFAULT_CHANNELS[1], {
    solo: true
  });
  expect(
    getActiveSteps([soloKickChannel, soloSnareChannel, soloHiHatChannel])
  ).toHaveLength(6);
});

test("Test getActiveSteps with muted channels", () => {
  const { getByTestId } = render(<App />);
  const step1Kick = getByTestId("channel-kick-1-step-1");
  const step2Kick = getByTestId("channel-kick-1-step-2");

  const muteSnareBtn = getByTestId("mute-channel-snare-1");
  const step1Snare = getByTestId("channel-snare-1-step-1");
  const step2Snare = getByTestId("channel-snare-1-step-2");

  fireEvent.click(step1Kick);
  fireEvent.click(step2Kick);

  fireEvent.click(step1Snare);
  fireEvent.click(step2Snare);
  fireEvent.click(muteSnareBtn);

  expect(getActiveSteps([])).toHaveLength(2);
});
