export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=OzdaDCqVI6yFItVush42QgROEUIybuTE&q=${category}&limit=16`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title || "𝘕𝘖 𝘛𝘐𝘛𝘓𝘌",
    url: img.images.original.url,
  }));
  return gifs;
};
