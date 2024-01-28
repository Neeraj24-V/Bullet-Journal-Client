import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CreateItems({ triggerFetch }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Task");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://bullet-journal-model-api.onrender.com/api/v1/journal/data",
        {
          val: inputValue,
          dataType: selectedOption,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        triggerFetch((prevState) => !prevState);
        toast.success("Task Created Successfully");
      }
      setInputValue("");
    } catch (err) {
      toast.error("Task Creation failed!!");
    }

    console.log(response.data);
  };

  return (
    <div className="xs:flex xs:flex-col xs:w-full xs:my-3 xs:px-6 md:px-6 xs:h-auto xs:items-center xs:justify-center lg:flex-row lg:justify-start xs:gap-3 lg:px-8 h-12 lg:mt-8 rounded-md font-Recursive">
      <input
        type="text"
        className="xs:w-full xs:pl-4 xs:h-12 lg:h-12 xs:rounded-md xs:mr-0  outline-none lg:w-[73%] mr-4 rounded-l-md shadow-lg pl-8"
        placeholder="Write here"
        id="content"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="xs:flex xs:w-full lg:w-[9%] items-center justify-center lg:ml-6">
        <label htmlFor="dropdown" className="lg:mr-4 font-semibold">
          Type:
        </label>
        <select
          className="lg:w-full xs:w-[30%] md:w-[12%] md:h-12 outline-none bg-slate-50 border-none"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option default>Task</option>
          <option>Note</option>
          <option>Event</option>
        </select>
      </div>
      <button
        className="lg:ml-6 xs:ml-0 xs:w-[50%]  md:w-[50%] xs:rounded-md text-white bg-black font-bold h-12 lg:w-[12.5%] rounded-r-md hover:bg-yellow-600 hover:text-black overflow-hidden"
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  );
}

export default CreateItems;
