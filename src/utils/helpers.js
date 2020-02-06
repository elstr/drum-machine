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
 * We need to calculate how many milliseconds(*) each step takes
 * to be able to move to the next step in sync.
 * 
 * (*) because setInterval works in milliseconds
 */
export const calculateStepDuration = ({ BPM }) => {
  const BeatsPerSeconds = 60 / BPM
  const patternDurationInSeconds = BeatsPerSeconds * 4
  const eachStepDurationInSeconds = patternDurationInSeconds / 8
  const stepDurationInMilliSec = eachStepDurationInSeconds * 1000

  return stepDurationInMilliSec
}

/**
 * Returns an array of active steps
 * @param {Array} soloChannels
 */
export const getActiveSteps = soloChannels => {
  if (soloChannels.length) {
    const activeSteps = soloChannels.map(c =>
      Array.from(
        document.getElementById(c.id).getElementsByClassName("step isActive")
      )
    );
    return [].concat(...activeSteps);
  }
  return Array.from(document.querySelectorAll(".step.isActive:not(.mute)"));
};

/**
 * Plays the pattern of the active steps
 * @param {object: {totalSteps: integer, stepDuration: integer, soloChannel: string | null}}
 */
let intervalPlaying = null;
export const playPattern = ({ totalSteps, stepDuration, soloChannels }) => {
  const activeSteps = getActiveSteps(soloChannels);
  let currentStep = 0;

  intervalPlaying = window.setInterval(function() {
    activeSteps
      .filter(step => step.id.split("-")[3] == currentStep)
      // we grab the <audio /> inside the step and play it
      .map(step => step.children[0].play()); 

    currentStep = currentStep < totalSteps ? currentStep + 1 : 0;
  }, stepDuration);
};

export const stopPattern = () => window.clearInterval(intervalPlaying);

export const getNewChannelId = ({ channels, channelType }) => {
  const kicks = channels.filter(c => c.id.includes(`channel-${channelType}`));
  if (kicks.length) {
    const lastKickId = kicks.slice(-1)[0].id;
    const lastNum = parseInt(lastKickId.match(/(\d+)/));
    return `channel-${channelType}-${lastNum + 1}`;
  }
  return `channel-${channelType}-1`;
};
