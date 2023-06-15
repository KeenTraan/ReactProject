import { useState,createRef } from "react"
import "../button/style.scss"
export default function ButtonDropDown(props) {

  let textInput = createRef();

  const [showOption, setOption] = useState(false)
  // const [inpurValue, setInputValue] = useState("")
  const handleClick = () => {

    console.log(textInput.current.value);
    // setInputValue(event.target.value)
    setOption(!showOption)
  }
  const handleCloseList = () => {
    setOption(false)
  }
  return (
    <div >
      <div className="dropdown" onBlur={handleCloseList} >
        <input ref={textInput} type="submit" value={""} onClick={handleClick} className="input-doropdown" />
        <img src={require('../../assets/Arrrow Copy.png')} alt="#" className="icon" />
      </div>
      <div className="list-item">
        {
          props.data.map((item) => (
            showOption ? (
              <div onClick={handleCloseList} className="select-item" key={item.id}>{item.time}</div>
            ) : null
          ))
        }
      </div>
    </div>
  )
}