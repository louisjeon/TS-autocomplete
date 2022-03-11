import Input from "./Input";
import "./ClearBtn.scss";
import Autocomplete from "./Autocomplete";

const ClearBtn: HTMLElement = document.createElement("btn");

ClearBtn.innerText = "Clear";

ClearBtn.classList.add("clearBtn");

ClearBtn.addEventListener("click", () => {
  Input.value = "";
  Autocomplete.innerHTML = "";
});

export default ClearBtn;
