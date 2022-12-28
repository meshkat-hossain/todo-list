import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import List from "./List";

//to get data from local storage

const getData = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const ToDo = () => {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState(getData([]));
  console.log(item);
  const [deletedCount, setDeletedCount] = useState(0);
  console.log(deletedCount);



  //Add item
  const listOfItem = (e) => {
    if (!item) {
    } else if (item === " ") {
    } else {
      setNewItem((preValue) => {
        return [...preValue, item];
      });
    }
    setItem(" ");
  };

  //Delete item
  const deleteItem = (IndexItem) => {
    const updateitem = newItem.filter((elm, ind, array) => {
     
      return ind !== IndexItem;
    });
    setNewItem(updateitem);
    setDeletedCount((prevState) => setDeletedCount(prevState + 1));
  };

  // how to add data in local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(newItem));
  }, [newItem]);

  //RemoveAll
  const RemoveAll = () => {
    setNewItem(() => {
      return [...""];
    });
  };

  //  add item when presh enter key

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!item || item === " ") {
    } else {
      setNewItem((preValue) => {
        return [...preValue, item];
      });
    }
    setItem(" ");
  };


  return (
    <>
      <div className="main_div">
        <p className="progressBer">
          <span className="deletedCount">{deletedCount}</span> Out Of
          <span className="length">{newItem.length}</span> ToDo's Are Completed
        </p>

        <div className="Input_button">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              required
              value={item}
              //main value 1st hook
              type=" text "
              placeholder="Add Today Task"
              onChange={(e) => setItem(e.target.value)}
              autoComplete="off"
            />
            {!item ? <span className="error">Enter A Task</span> : null}
          </form>

          <button className="Btn" type="submit" onClick={listOfItem}>
            
            <AddCircleIcon className="pluse_button" />
          </button>
        </div>

        <ol className="List">
          {newItem.map((val, key) => {
            return (
              <List myKey={key} onClick={() => deleteItem(key)} text={val} />
            );
          })}
        </ol>
        <br />
        <br />
        <div>
          <button  className="undo">
            UnDO
          </button>
          <button  className="redo">
            ReDO
          </button>
        </div>
        <br />
        <br />
        <br />
        <button className="removeAll" onClick={RemoveAll}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default ToDo;

// 1. data j khane ase (local storage ) sekhan theke 1st e jokhon save hobe tokhon data arekta hooks er modhe rakhte hobe , then hooks theke undo click korle

