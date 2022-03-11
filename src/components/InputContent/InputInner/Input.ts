import debounce from "../../../utils/debounce";
import handleFetch from "../../../utils/handleFetch";
import store from "../../../utils/store";
import InputContainer from "../../InputContainer";
import Autocomplete from "./Autocomplete";
import "./Input.scss";

const Input = document.createElement("input");

Input.classList.add("input");

Input.addEventListener("focusin", () => {
  InputContainer.appendChild(Autocomplete);
});

Input.addEventListener("focusout", (e) => {
  InputContainer.removeChild(Autocomplete);
});

Input.addEventListener("input", (e) => {
  if (Input.value) {
    debounce(() => handleFetch(Input.value), 200);
  } else {
    Input.innerText = "";
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
