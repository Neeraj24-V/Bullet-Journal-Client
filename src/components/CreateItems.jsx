import { useState } from "react";
import axios from "axios";

function CreateItems() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    console.log(inputValue, selectedOption);
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:8080/api/v1/journal/data",
      {
        val: inputValue,
        dataType: selectedOption,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response.data);
  };

  return (
    <div className="mx-8 mt-8 h-12 rounded-md font-Recursive">
      <input
        type="text"
        className="h-12 outline-none w-[75%] mr-4 rounded-l-md shadow-lg pl-8"
        placeholder="Write here"
        id="content"
        value={inputValue}
        onChange={handleInputChange}
      />
      <label htmlFor="dropdown" className="mr-2 font-semibold">
        Type:
      </label>
      <select
        className="w-[7%] outline-none bg-slate-50 border-none"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option default>Task</option>
        <option>Note</option>
        <option>Event</option>
      </select>
      <button
        className="ml-4 text-white bg-black font-bold h-12 w-[11.9%] rounded-r-md hover:bg-yellow-600 hover:text-black"
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  );
}

export default CreateItems;
