const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

const phrases = [
  "Dette møtet blir bra!",
  "Jeg gleder meg til å se dere alle sammen!",
  "Dette blir spennende!",
  "Jeg har forberedt meg godt til dette møtet!",
  "Jeg har en god følelse for dette møtet!",
  "Dette blir gøy!",
  "(Jeg er ikke en bot)",
  "Gleder meg til å kode litt i dag!",
  "Hva har index på lur i dag?",
  "Sammen kan vi gjøre stor fremgang.",
  "La oss samle våre tanker og ideer for å forme fremtiden til tihlde.org.",
  "Ingen tvil om at vi har det som trengs for å gjøre dette til en suksess.",
  "La oss inspirere hverandre til å tenke stort og være kreative.",
  "Vi har en fantastisk mulighet til å sette våre spor på tihlde.org.",
  "La oss bygge videre på hverandres styrker og ideer.",
  "Vårt samarbeid er nøkkelen til suksess.",
  "Vi er et sterkt team, og jeg vet at vi kan oppnå mye sammen.",
  "Ingenting kan stoppe oss når vi jobber sammen mot et felles mål.",
  "La oss utforske nye veier og muligheter for tihlde.org.",
  "Vi er her for å støtte og motivere hverandre.",
  "La oss være åpne for nye perspektiver og tanker.",
  "Ingen idé er for liten eller for stor - la oss dele alt.",
  "La oss skape noe eksepsjonelt sammen.",
  "Vi har allerede vist hva vi kan oppnå, la oss fortsette på den veien.",
  "La oss dyrke et miljø der alle stemmer blir hørt og verdsatt.",
  "Sammen kan vi overvinne enhver utfordring som kommer vår vei.",
  "La oss være våre egne beste støttespillere og utfordre hverandre til å vokse.",
  "Vi er et team av innovatører, og jeg gleder meg til å se hva vi kan skape sammen.",
  "La oss være ledende i bransjen og inspirere andre med vårt arbeid.",
  "Vårt engasjement og lidenskap er drivkraften bak vår suksess.",
  "La oss jobbe sammen for å gjøre tihlde.org til den beste versjonen av seg selv.",
  "Vi er mer enn bare et team - vi er en familie.",
  "La oss dele våre tanker og erfaringer for å lære av hverandre.",
  "Vårt fellesskap er vårt sterkeste kort - la oss dra nytte av det.",
  "Sammen kan vi skape magi på tihlde.org-plattformen.",
  "La oss være våre egne største motivatorer og støttespillere.",
  "Vi har en unik mulighet til å gjøre en positiv innvirkning.",
  "La oss være dristige i våre ambisjoner og målsetninger.",
  "Vår samlede innsats vil være nøkkelen til suksess.",
  "La oss omfavne utfordringene og se dem som muligheter for vekst.",
  "Vårt samarbeid er vår største styrke.",
  "La oss være en kilde til inspirasjon og motivasjon for hverandre.",
  "Sammen kan vi oppnå det utrolige.",
  "Vi er et team av problemløsere - la oss ta på oss utfordringene sammen.",
  "La oss ha tillit til hverandre og våre evner.",
  "Vårt engasjement og dedikasjon vil føre oss til suksess.",
  "La oss støtte hverandre gjennom tykt og tynt.",
  "Vi er et team av pionerer, og jeg vet at vi kan skape noe revolusjonerende sammen.",
  "Vårt fellesskap er vårt viktigste aktivum - la oss pleie det.",
  "La oss skape et miljø der alle føler seg inkludert og verdsatt.",
  "Vårt samarbeid vil være nøkkelen til å oppnå våre mål.",
  "La oss løfte hverandre opp og motivere til suksess.",
  "Vi er et team som er forpliktet til å gjøre en forskjell.",
  "La oss være en kilde til inspirasjon og positivitet for hverandre.",
  "Sammen kan vi bane vei for fremtidige suksesser på tihlde.org.",
  "Vårt engasjement og vår utholdenhet vil være drivkraften bak vår suksess.",
  "La oss omfavne mangfoldet og dra nytte av hverandres unike perspektiver.",
  "Vi er et team av utfordrere - la oss bryte grenser sammen.",
  "Vårt samarbeid vil være nøkkelen til å realisere våre drømmer for tihlde.org-plattformen.",
];

app.message("Møte", async ({ message, say }) => {
  await app.client.reactions.add({
    token: process.env.SLACK_BOT_TOKEN,
    name: "white_check_mark",
    channel: message.channel,
    timestamp: message.ts,
  });
  await say(phrases[Math.floor(Math.random() * phrases.length)]);
  await say(phrases[Math.floor(Math.random() * phrases.length)]);
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
