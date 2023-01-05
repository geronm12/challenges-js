const {
  firebaseConfig,
} = require("../configurations/db_firbase_configuration");

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  addDoc,
  collection,
  where,
  query,
  getDocs,
} = require("firebase/firestore");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const add = async (doc, docName) => {
  try {
    const docRef = await addDoc(collection(db, docName), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const readAll = async (docName) => await getDocs(collection(db, docName));

const read = async (docName, ...args) =>
  await getDocs(query(collection(db, docName), ...args));

module.exports = {
  read,
  readAll,
  add,
};
