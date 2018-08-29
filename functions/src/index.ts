import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const helloWorldTwo = functions.https.onRequest((request, response) => {
  response.send("Hello 2 from Firebase!");
 });

 export const helloWorldThree = functions.https.onRequest((request, response) => {
  response.send("Hello 3 from Firebase!");
 });

