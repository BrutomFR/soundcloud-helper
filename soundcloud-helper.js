const GetMusicsByArtistId = async (artistId, authId, userId) => {
  if (!artistId || !authId || !userId) return;
  return await fetch(
    "https://cors-anywhere.herokuapp.com/https://api-v2.soundcloud.com/stream/users/" +
      artistId +
      "?client_id=" +
      userId +
      "&limit=15000",
    {
      headers: new Headers({
        Authorization: authId,
        "X-Requested-With": "XMLHttpRequest",
      }),
    }
  )
    .then((res) => res.json())
    .then(async (result) => result);
};
