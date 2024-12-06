import { adminFirestore } from "./config/firebaseConfig";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const currentToken = body.token;
  if (!currentToken) {
    throw new Error("Token is required");
  }
  const db = adminFirestore;
  db.collection("fcm-token").add({
    token: currentToken,
  });
});
