<!-- mind you open an issue... 😀 -->

[![supabase-ngrok](https://res.cloudinary.com/ddjsyskef/image/upload/v1617428517/Github/kvch58aejpmypdutwqa5.png)](#)

# `project-name`

[![Ask me anything](https://img.shields.io/badge/ask%20me-anything-orange)][ama]

## Contents

- [Installation](#cloud-installation)
- [Usage](#interrobang-usage)
- [Documentation](#books-documentation)
- [How to contribute](#yum-how-to-contribute)
- [License](#yum-how-to-contribute)

## :cloud: Installation

```js
git clone https://github.com/ekaone/supabase-ngrok.git
cd supabase-ngrok
npm install
npm start
```

## :interrobang: Usage

You need [ngrok](https://ngrok.com/) as tunneling, and [socket.io](https://socket.io/) to get the tunnel URL, once you have get this tunnel URL, it will send/save to supabase, on your client will read the URL from supabase, and happy tunnel without `Ctrl` `C` and `V` for your URL tunnel :wink:, try clone and `npm install`, and the `npm start` for the server.

In your client an example:

```jsx
const [response, setResponse] = useState("");

useEffect(() => {
  const socket = socketIOClient(ENDPOINT);
  socket.on("DataSocket", (data: React.SetStateAction<string>) => {
    setResponse(data);
  });

  return () => socket.disconnect();
}, []);

useEffect(() => {
  console.log(response);
}, [response]);
```

## :books: Documentation

This is tunneling simple app Supabase and ngrok, once get the URL tunnel from ngrok, the URL will save to supabase

## :yum: How to contribute

Have an idea? Found a bug? See [how to contribute][contributing].

## :scroll: License

[MIT][license] © [Eka Prasetia][website]

[website]: https://www.ekapm.dev/
[contributing]: https://github.com/ekaone/contribute
[license]: https://en.wikipedia.org/wiki/MIT_License
[ama]: https://github.com/ekaone/ama
