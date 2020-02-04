/**
 * Returns an object with steps
 * Each step has an id and a volume
 * @param {string} channel
 */
export const buildStepPattern = channel => {
  let pattern = {};
  for (var i = 0; i < 16; i++) {
    pattern[`${channel}-step-${i}`] = { id: `${channel}-step-${i}`, volume: 0 };
  }
  return pattern;
};

/**
 * Returns the duration of the steps in milliseconds
 * @param {integer} BPM
 */
export const calculateStepDuration = ({ BPM }) => {
  // 0. Calculate the duration of each step
  const durationOfEachFigure = (BPM * 4) / 8;
  // 1. Convert it to milliseconds to use as interval
  const durationInMilliseconds = (durationOfEachFigure / 60) * 1000;

  return durationInMilliseconds;
};

/**
 * Returns an array of active steps
 */
export const getActiveSteps = () =>
  Array.from(document.getElementsByClassName("step isActive"));

/**
 * Plays the pattern of the active steps
 * @param {object: {totalSteps: integer, stepDuration: integer}} 
 */
export const playPattern = ({ totalSteps, stepDuration }) => {
  const activeSteps = getActiveSteps();

  let currentStep = 0;

  window.setInterval(function() {
    activeSteps
      .filter(step => step.id.split("-")[2] == currentStep)
      .map(step => step.children[0].play());

    currentStep = currentStep < totalSteps ? currentStep + 1 : 0;
  }, stepDuration);
};
