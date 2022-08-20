export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=OzdaDCqVI6yFItVush42QgROEUIybuTE&q=${category}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title || "NO TITLE",
    url: img.images.original.url,
  }));
  return gifs;
};
