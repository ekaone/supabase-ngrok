require("dotenv").config();

const fetch = require("node-fetch");
const ngrok = require("ngrok");

let url = "";

(async function () {
  url = await ngrok.connect({
    proto: "http",
    authtoken: process.env.NGROK_AUTH_TOKEN,
    region: "us",
  });
  try {
    fetch(`${process.env.SUPABASE_URL}rest/v1/tunnel?id=eq.2`, {
      method: "PATCH",
      body: JSON.stringify({ url: url, name: "Tunnel true" }),
      headers: {
        apikey: process.env.SUPABASE_API_KEY,
        Authorization: process.env.SUPABASE_API_KEY,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));

    console.log("sent url", url);
  } catch (error) {
    console.log(error);
  }
})();
