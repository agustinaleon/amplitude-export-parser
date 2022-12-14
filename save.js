const fs = require("fs");
const { WritableStream } = require("node:stream/web");

const START_DATE = '[START_DATE]';
const END_DATE = '[END_DATE]';

const load = async () => {
  const uri =
    "https://amplitude.com/api/2/export?start=" + START_DATE + "&end=" + END_DATE;

  const key = "PUT_KEY_HERE";

  const response = await fetch(uri, {
    headers: {
      Authorization: `Basic ${key}`,
    },
  });

  const streamToPath = fs.createWriteStream("response.zip");
  const writable = new WritableStream({
    write(chunk) {
      streamToPath.write(chunk);
    },
  });

  await response.body.pipeTo(writable);
};

load().catch(console.error);
