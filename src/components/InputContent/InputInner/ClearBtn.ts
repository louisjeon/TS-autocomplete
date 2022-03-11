import Input from "./Input";
import "./ClearBtn.scss";

const ClearBtn = document.createElement("btn");

ClearBtn.innerText = "Clear";

ClearBtn.classList.add("clearBtn");

ClearBtn.addEventListener("click", () => {
  Input.value = "";
});

export default ClearBtn;
