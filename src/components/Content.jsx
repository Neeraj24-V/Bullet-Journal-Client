import axios from "axios";
import DisplayItem from "./DisplayItems";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import CreateItems from "./CreateItems";
function Content() {
  const [value, setValue] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const groupData = (data) => {
    let groupedData = {};
    data.forEach((item) => {
      if (groupedData[item.date]) {
        groupedData[item.date].push(item);
      } else {
        groupedData[item.date] = [item];
      }
    });
    return groupedData;
  };

  useEffect(() => {
    const fectchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `https://bullet-journal-model-api.onrender.com/api/v1/journal/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data } = response.data;
        // console.log(data);
        const groupedData = groupData(data);
        // console.log(Object.entries(groupedData));
        setValue(groupedData);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          navigate("/login");
        } else {
          console.log("Error fetching data: ", err.message);
        }
      }
    };
    fectchData();
  }, [trigger]);

  // console.log(value);
  let entries = Object.entries(value);

  // Sort the entries by date
  entries.sort((a, b) => new Date(b[0]) - new Date(a[0]));

  // Convert the sorted entries back to an object
  let sortedData = Object.fromEntries(entries);

  console.log(sortedData);

  return (
    <section className="bg-slate-50">
      <Navbar />
      <CreateItems triggerFetch={setTrigger}/>
      <div className="p-8 w-full bg-slate-50 grid grid-cols-3 gap-8 border-white">
        <DisplayItem value={sortedData} />
      </div>
    </section>
  );
}

export default Content;
