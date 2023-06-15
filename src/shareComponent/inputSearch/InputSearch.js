/** @format */
import "./style.scss";
export default function InputSearch() {
  return (
    <input
    className="input-search"
      type="search"
      placeholder="Search"
      onChange={(event) => handleInput(event)}
    />
  );
}
function handleInput(event) {
  console.log(event.target.value);
}
