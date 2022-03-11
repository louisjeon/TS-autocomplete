import ClearBtn from "./InputInner/ClearBtn";
import Input from "./InputInner/Input";
import "./InputOutter.scss";

const InputOutter = document.createElement("div");

InputOutter.classList.add("input_outter");

InputOutter.appendChild(Input);

InputOutter.appendChild(ClearBtn);

export default InputOutter;
