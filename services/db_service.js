const {
  firebaseConfig,
} = require("../configurations/db_firbase_configuration");

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  addDoc,
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} = require("firebase/firestore");

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const add = async (document, docName) => {
  try {
    const docRef = await addDoc(collection(db, docName), document);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const update = async (document, docName, docId) => {
  try {
    const docRef = doc(db, docName, docId);
    const updatedDoc = await updateDoc(docRef, document);
    console.log("Document written with ID: ", updatedDoc.id);
    return updatedDoc;
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const remove = async (docName, docId) => {
  try {
    const docRef = doc(db, docName, docId);
    const deletedDoc = await deleteDoc(docRef);
    console.log("Document deleted.");
    return deletedDoc;
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const readAll = async (docName) => await getDocs(collection(db, docName));

const read = async (docName, ...args) =>
  await getDocs(query(collection(db, docName), ...args));

module.exports = {
  read,
  readAll,
  add,
  update,
  remove,
};
