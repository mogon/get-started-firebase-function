"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    response.send("Hello 2 from Firebase!");
});
exports.helloWorldThree = functions.https.onRequest((request, response) => {
    response.send("Hello 3 from Firebase!");
});
//# sourceMappingURL=index.js.map