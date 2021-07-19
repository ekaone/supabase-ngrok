const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

/**
 * Listen from table todos with id=4
 */
const mySubscription = supabase
  .from("todos:id=eq.14")
  .on("*", (payload) => {
    console.log("Change received!", payload);
  })
  .subscribe();
