function List({ val }) {
  const getSymbols = (dataType) => {
    switch (dataType) {
      case "Task":
        return <i className="ri-circle-line mr-4"></i>;

      case "Event":
        return <i className="ri-star-fill mr-4"></i>;

      case "Note":
        return <i className="ri-subtract-line mr-4"></i>;
    }
  };

  return (
    <>
      {Object.entries(val).map(([key, val]) => {
        return (
          <li key={val._id} className="px-4">
            {getSymbols(val.dataType)} {val.val}
          </li>
        );
      })}
    </>
  );
}

export default List;
