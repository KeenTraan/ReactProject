/** @format */
import { useEffect, useState } from "react";
import { searchUsersInfo } from "../../api";
import "./inputstyle.scss";

// const { isCompletedTyping, setCompletedTyping } = useDebounce(
//   value,
//   500,
//   isFocused
// );

export default function InputSearch() {
  const [users, setUsers] = useState([])
  const [isShow, setShow] = useState(false)
  let value;
  async function handleInput(event) {
    value = event.target.value.trim()
    const usersInfo = await searchUsersInfo(value);
    setUsers(usersInfo)
    value.length > 0 ? setShow(true) : setShow(false);
  }
  useEffect(() => {
  }, [users]);

  function selectedItem() {
    setShow(false)
  }
  return (
    <div>
      <input
        className="input-search"
        type="search"
        placeholder="Search"
        onChange={(event) => handleInput(event)}
      />
      <div className="list-user">
        {isShow ? (
          users.map(user => (
            <div key={user.id} className="user" onClick={() => selectedItem()}>
              <span>{user.name}</span>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

// function useDebounce(value: any, delay: number, isFocused: boolean) {
//   const [, setDebouncedValue] = useState(value);
//   const [isCompletedTyping, setCompletedTyping] = useState<boolean>(false)
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//       isFocused && setCompletedTyping(true)
//     }, delay);
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return { isCompletedTyping, setCompletedTyping };
// }

// export default useDebounce;
