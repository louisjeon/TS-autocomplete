import Autocomplete from "../components/InputContent/InputInner/Autocomplete";
import store from "./store";

interface Movie {
  text: string;
  id: number;
}

let newCache: any;

(async () => {
  newCache = await caches.open("new-cache");
})();

const url =
  "https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=";

const handleFetch: Function = async (keyword: string) => {
  const res = await fetch(url + keyword).then((res) => res.json());
  Autocomplete.innerHTML = "";

  res.forEach((movie: Movie, index: number) => {
    const movieEl = document.createElement("div");
    movieEl.innerText = movie.text;
    movieEl.id = "movie-" + index.toString();
    Autocomplete.appendChild(movieEl);
  });

  store.reset(res.length);
};

export default handleFetch;
