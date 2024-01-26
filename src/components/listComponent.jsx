import done from "../assets/done.svg";
import axios from "axios";

function List({ val, triggerFetch }) {
  const getSymbols = (dataType, done) => {
    switch (dataType) {
      case "Task":
        return done ? (
          <i className="ri-checkbox-blank-circle-fill mr-4"></i>
        ) : (
          <i className="ri-circle-line mr-4"></i>
        );

      case "Event":
        return <i className="ri-star-fill mr-4"></i>;

      case "Note":
        return <i className="ri-subtract-line mr-4"></i>;
    }
  };

  const handleCheck = async (todoId) => {
    const user_id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const response = await axios.patch(
      `https://bullet-journal-model-api.onrender.com/api/v1/journal/data/${user_id}?todoId=${todoId}`,
      {
        completed: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 201) {
      triggerFetch((prevState) => !prevState);
    }
  };

  return (
    <>
      {Object.entries(val).map(([key, val]) => {
        return (
          <li key={val._id} className="px-4 flex items-center justify-between">
            <div className="flex w-[90%]">
              {getSymbols(val.dataType, val.completed)}
              {
                <p
                  className={`${
                    val.completed ? "line-through" : ""
                  } transition duration-500 ease-in`}
                >
                  {val.val}
                </p>
              }
            </div>
            <div>
              {val.dataType == "Task" && (
                <img
                  className="w-4 h-4 ml-4 cursor-pointer"
                  src={done}
                  alt="completed"
                  onClick={() => handleCheck(val._id)}
                />
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}

export default List;
