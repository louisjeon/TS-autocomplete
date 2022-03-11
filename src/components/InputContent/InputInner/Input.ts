import debounce from "../../../utils/debounce";
import handleFetch from "../../../utils/handleFetch";
import store from "../../../utils/store";
import InputContainer from "../../InputContainer";
import Autocomplete from "./Autocomplete";
import "./Input.scss";

const Input: HTMLInputElement = document.createElement("input");

Input.classList.add("input");

Input.addEventListener("focusin", () => {
  InputContainer.appendChild(Autocomplete);
});

Input.addEventListener("focusout", () => {
  InputContainer.removeChild(Autocomplete);
});

Input.addEventListener("input", () => {
  if (Input.value) {
    debounce(() => handleFetch(Input.value), 200);
  } else {
    Autocomplete.innerHTML = "";
  }
});

Input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    store.increment();
  } else if (e.key === "ArrowUp") {
    store.decrement();
  }
});

export default Input;
