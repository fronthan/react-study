const express = require("express");
const router = express.Router();
//const structjson = require('./structjson.js');
const dialogflow = require("dialogflow");
const uuid = require("uuid");

const config = require("../config/keys");
const projectId = config.googleProjectID;
const sessionId = config.dialogFlowSessionID;
const languageCode = config.dialogFlowSessionLanguageCode;

// Create a new session
const sessionClient = new dialogflow.SessionsClient();

// We will make two routes

// Text Query Route
router.post("/textQuery", async (req, res) => {
  //클라이언트에서 보낸 정보를 Dialogflow API로 보낸다.

  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.text,
        // The language used by the client
        languageCode: languageCode,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

  res.send(result);
});

//Event Query Route

module.exports = router;
