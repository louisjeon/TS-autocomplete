import InputOutter from "./InputContent/InputOutter";
import "./InputContainer.scss";

const InputContainer = document.createElement("div");

InputContainer.classList.add("input_container");

InputContainer.appendChild(InputOutter);

export default InputContainer;
