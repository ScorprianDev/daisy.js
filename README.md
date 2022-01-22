# daisy.js
Discord API wrapper written in Javascript.

## Usage

Clone the repository:

    git clone https://github.com/ScorprianDev/daisy.js.git


To connect to the gateway:
```js
const Daisy = require("./index");

const bot = new Daisy({
    token: "YOUR_BOT_TOKEN_HERE",
    intents: 32509
});

bot.connect();
```

once it connected, your bot will be online. The ready event will be triggered and the client object and payload object will be sent.

## Notes
This project is still in development. Can only connect to the gateway for now.
