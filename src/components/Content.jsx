import axios from "axios";
import DisplayItem from "./DisplayItems";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import CreateItems from "./CreateItems";
function Content() {
  const [value, setValue] = useState([]);

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

  const fectchData = async () => {
    try {
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:8080/api/v1/journal/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const { data } = response.data;
      // console.log(data);
      const groupedData = groupData(data);
      // console.log(groupedData);
      setValue(groupedData);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        navigate("/login");
      } else {
        console.log("Error fetching data: ", err.message);
      }
    }
  };

  useEffect(() => {
    fectchData();
  }, []);

  // value.forEach((value, key) => {
  //   console.log(key);
  // });

  // const required = Array.from(values, ([key, value]) => ({key, value}))
  // console.log(required)
  // let dates = new Set();
  // value.forEach((ele, key) => {
  //   dates.add(ele.date);
  // });
  // dates = Array.from(dates)
  // console.log(value);

  return (
    <section className="bg-slate-50">
      <Navbar />
      <CreateItems />
      <div className="p-8 w-full bg-slate-50 grid grid-cols-3 gap-8 border-white">
        <DisplayItem value={value} />
      </div>
    </section>
  );
}

export default Content;
