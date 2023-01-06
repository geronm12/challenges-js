const { read, readAll, add, update, remove } = require("./db_service");
const { where, orderBy, startAfter, limit } = require("firebase/firestore");
const { _CONSTANTS } = require("../constants");

const readAllChallenges = async () => {
  const response = await readAll(_CONSTANTS.CHALLENGE);
  console.log(response);
};

const readChallengeByDificult = async (dificult) => {
  const response = await read(
    _CONSTANTS.CHALLENGE,
    where("dificultad", "==", dificult)
  );
  console.log(response);
};

const addChallenge = async (challenge) => {
  const response = await add(challenge, _CONSTANTS.CHALLENGE);
  console.log(response);
};

const updateChallenge = async (challenge, challengeId) => {
  const response = await update(challenge, _CONSTANTS.CHALLENGE, challengeId);
  console.log(response);
};

const deleteChallenge = async (challengeId) => {
  const response = await remove(_CONSTANTS.CHALLENGE, challengeId);
  console.log(response);
};
