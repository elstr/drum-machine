export const buildStepPattern = channel => {
  let pattern = {};
  for (var i = 0; i < 16; i++) {
    pattern[`${channel}-step-${i}`] = { id: `${channel}-step-${i}`, volume: 0 };
  }
  return pattern;
};

export const calculateStepDuration = (BPM = 60) => {
  // 0. Calculate the duration of each step
  const durationOfEachFigure = (BPM * 4) / 8;
  // 1. Convert it to milliseconds to use as interval
  const durationInMilliseconds = (durationOfEachFigure / 60) * 1000;

  return durationInMilliseconds;
};

export const getActiveSteps = () =>
  Array.from(document.getElementsByClassName("step isActive"));
