const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // add this
  appToken: process.env.SLACK_APP_TOKEN, // add this
});

// All the room in the world for your code

app.message("Møte", async ({ message, say }) => {
  console.log("Møte funnet!");
  console.log(message.channel);
  await app.client.reactions.add({
    token: process.env.SLACK_BOT_TOKEN,
    name: "white_check_mark",
    channel: message.channel,
    timestamp: message.ts,
  });
  await say("Jeg gleder meg til møtet!");
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
