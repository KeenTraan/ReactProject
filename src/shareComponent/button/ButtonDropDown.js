import { useState } from "react"
import "../button/buttonstyle.scss"

export default function ButtonDropDown(props) {
  const [showOption, setOption] = useState(false)
  const [inputValue, setInputValue] = useState("1 Week")
  const handleClick = () => {
    setOption(!showOption)
  }
  const handleChoosed = (item) => {
    setInputValue(item.time)
    handleCloseList()
  }
  const handleCloseList = () => {
    setOption(false)
  }

  return (
    <div >
      <div className="dropdown" onBlur={handleCloseList} onClick={handleClick}>
        <div className="show-value">{inputValue}</div>
        <img src={require('../../assets/Arrrow Copy.png')} alt="#" className="icon" />
      </div>
      <div className="list-item">
        {
          props.data.map((item) => (
            showOption ? (
              <div
                onClick={() => handleChoosed(item)}
                className="select-item"
                key={item.id}>
                {item.time}
              </div>
            ) : null
          ))
        }
      </div>
    </div>
  )
}