const { where, orderBy, startAfter, limit } = require("firebase/firestore");
const { _CONSTANTS } = require("../constants");
const { readAll, read, update, add, remove } = require("./db_service");

const readUserById = async (userId) => {
  const response = await read(_CONSTANTS.CHALLENGE, where("id", "==", userId));
  console.log(response);
};

const createUser = async (user) => {
  const response = await add(user, _CONSTANTS.USER);
  console.log(response);
};

const updateProfile = async (user, userId) => {
  const response = await update(user, _CONSTANTS.USER, userId);
  console.log(response);
};
