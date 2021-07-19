const fetch = require("node-fetch");

/**
 * Update / PATCH on table raspi with id=3
 */
fetch(`${process.env.SUPABASE_URL}rest/v1/raspi?id=eq.3`, {
  method: "PATCH",
  body: JSON.stringify({ value: i++ }),
  headers: {
    apikey: process.env.SUPABASE_API_KEY,
    Authorization: process.env.SUPABASE_API_KEY,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));
