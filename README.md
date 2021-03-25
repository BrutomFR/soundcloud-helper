# soundcloud-helper
Functions that allow you to retrieve information from soundcloud without API access.



```js
const GetMusicsByArtistId = async (artistId, authorization, client_id) => {
  if (!artistId || !authorization || !client_id) return;
  return await fetch(
    "https://cors-anywhere.herokuapp.com/https://api-v2.soundcloud.com/stream/users/" +
      artistId +
      "?client_id=" +
      client_id +
      "&limit=15000",
    {
      headers: new Headers({
        Authorization: authorization,
        "X-Requested-With": "XMLHttpRequest",
      }),
    }
  )
    .then((res) => res.json())
    .then(async (result) => result);
};
```

artistId: get artistId in source-code page of artist. Find the word "users:" and get id.
![artistId image](https://i.imgur.com/APDTOA7.png)

<br/>
<br/>
authorization: is OAuth, you need to login in in soundcloud account and get the token in requests header of your browser.
It's your login token.
![authorization image](https://i.imgur.com/Q5ssshF.png)


<br/>
<br/>
clientId: it is present in all soundcloud requests in your browser.
![clientId image](https://i.imgur.com/ftOQcnm.png)


<br/>
<br/>
## Results
![result image](https://i.imgur.com/nVtA2zi.png)

<br/>
<br/>
Blocked by CORS policy:
I use https://github.com/Rob--W/cors-anywhere to get around the problem.
