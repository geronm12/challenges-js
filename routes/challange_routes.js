const express = require("express");
const router = express.Router();

const userService = require("../services/users_service");
const testChallengeService = require("../services/test_challenge_service");
const challengeService = require("../services/challenge_service");

router.get("/", (req, res) => {
  res.send("<h1>Node Js Nodemon Server</h1>");
});

router.get("/challenge", (req, res) => {
  challengeService
    .readAllChallenges()
    .then((response) => response)
    .then((challenges) =>
      res.status(200).json({
        ok: true,
        challenges,
      })
    )
    .catch((err) =>
      res.status(400).json({
        ok: false,
        err,
      })
    );
});

router.get("/challenge", (req, res) => {
  const dificult = req.query.dificult;

  if (!dificult || dificult !== "1" || dificult !== "2" || dificult !== "3") {
    res.status(400).json({
      ok: false,
      err: "Debe enviar la dificultad 1 | 2 | 3 por queryString",
    });
  }

  challengeService
    .readChallengeByDificult(dificult)
    .then((response) => response)
    .then((challenge) =>
      res.status(200).json({
        ok: true,
        challenge,
      })
    )
    .catch((err) => res.status(400).json({ ok: false, err }));
});

module.exports = {
  router,
};
