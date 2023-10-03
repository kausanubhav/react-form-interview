import { useState } from "react"
import Card from "./Components/Card"

function App() {
  const [labelValue, setLabelValue] = useState("")
  const [inputComponentArray, setInputComponentArray] = useState([])
  const handleAddInputButton = (type) => {
    const newInputObj = {
      id: Date.now(),
      label: labelValue,
      type: type,
      value: "",
    }
    setInputComponentArray([...inputComponentArray, newInputObj])
  }
  const [currValue, setCurrValue] = useState("")
  const [submitIsClicked, setSubmitIsClicked] = useState(false);
  const [inputData, setInputData] = useState([])
  const handleInputDataChange = (value, label) => {
    const newObj = {
      label,
      value,
    }
    setInputData([...inputData, newObj])
  }
  const handleAddData = () => {
    inputComponentArray.map((item,i) => {
      const dataObj = inputData[i]
      return { ...item, value: dataObj.value, label: dataObj.label }
    })
    setSubmitIsClicked(true)
  }
  const labelIsvalid = labelValue !== ""
  return (
    <div>
      <div className="p-2 ">
        <h3 className="mb-2">Enter your label name</h3>
        <input
          type="text"
          onChange={(e) => setLabelValue(e.target.value)}
          style={{ border: "1px solid black" }}
        />
        <button onClick={() => handleAddInputButton("input")}>Add input</button>
        <button onClick={() => handleAddInputButton("checkbox")}>Add checkbox</button>
        <button onClick={() => handleAddInputButton("select")}>Add select</button>
      </div>

      <div className="mt-2 p-4 flex flex-col gap-2">
        {inputComponentArray?.map((item) => (
          <>
            {labelIsvalid && item.type === "input" && (
              <div className="flex gap-2">
                <label>{item.label}</label>
                <input
                  type="text"
                  onChange={(e) => handleInputDataChange(e.target.value, item.label)}
                />
              </div>
            )}
            {labelIsvalid && item.type === "checkbox" && (
              <div className="flex gap-2">
                <label>{labelValue}</label>
                <input
                  type="checkbox"
                  value={labelValue}
                  onChange={(e) => handleInputDataChange(e.target.value, item.label)}
                />
              </div>
            )}
            {labelIsvalid && item.type === "select" && (
              <>
                <label>{labelValue}</label>
                <select onChange={(e) => handleInputDataChange(e.target.value, item.label)}>
                  <option value={"Option 1"}>Option 1</option>
                </select>
              </>
            )}
          </>
        ))}
        {inputComponentArray.length > 0 && (
          <button className="w-20" onClick={handleAddData}>
            Submit
          </button>
        )}
      </div>
      {/* Card */}
      {submitIsClicked && (
        <div>
          {inputComponentArray?.map((item) => (
            <Card key={item.id} label={item.label} value={item.value} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
