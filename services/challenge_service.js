const { read, readAll, add } = require("./db_service");
const { _CONSTANTS } = require("../constants");

const readAllChallenges = async () => {
  const response = await read(_CONSTANTS.CHALLENGE);
  console.log(response);
};
