# daisy.js
Discord API wrapper written in Javascript.

## Usage

Clone the repository:

    git clone https://github.com/ScorprianDev/daisy.js.git


To connect to the gateway:
```js
const Daisy = require("./index");

const bot = new Daisy("TOKEN");

bot.connect();
```

once it connected, your bot will be online and the socket will send a payload whenever the event triggered.

## Notes
This project is still in development. Can only connect to the gateway for now.
