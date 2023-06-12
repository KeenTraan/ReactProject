/** @format */
import "./style.scss";
export default function InputSearch() {
  return (
    <input
      type="search"
      placeholder="Search"
      onChange={(event) => handleInput(event)}
    />
  );
}
function handleInput(event) {
  console.log(event.target.value);
}
