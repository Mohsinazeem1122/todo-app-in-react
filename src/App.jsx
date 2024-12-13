import { useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const [editId, setEditId] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({
    show: "false",
    type: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      showAlert(true, "danger", "Please Enter Your todo");
    }

    if (input) {
      const newItem = { id: Math.random(), title: input };
      setTodoList((prevTodoList) => [...prevTodoList, newItem]);
      setInput("");
      showAlert(true, "success", "todo-added");
    }

    // if (input && isEditing) {
    //   setTodoList(
    //     todoList.map((item) =>
    //       item.id === editId ? { ...item, title: input } : item
    //     )
    //   );
    //   setInput("");
    //   setIsEditing(false);
    //   showAlert(true, "success", "value changed");
    // }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    showAlert(true, "danger", "todo removed");
  };

  const clearItems = () => {
    setTodoList([]);
    showAlert(true, "danger", "empty-list");
  };

  // const editItem = (id) => {
  //   const specificItem = todoList.find((item) => item.id === id);
  //   setIsEditing(true);
  //   setEditId(id);
  //   setInput(specificItem.title);
  // };

  return (
    <>
      <div className="grid place-items-center text-center w-1/2 mx-auto bg-white m-20 shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* // Note: {...alert} is the shortcut for alert.msg and alert.type from useState */}
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <h3 className="font-bold text-xl mt-2">Todo App</h3>
          <div className="mt-5 mb-6">
            <input
              className="bg-blue-50 p-1 mr-1 rounded w-96 pl-4 outline-none"
              type="text"
              placeholder="e.g. eggs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-300 rounded p-1">Submit</button>
          </div>
        </form>

        {todoList.length > 0 && (
          <div className="w-[445px]">
            <List
              items={todoList}
              removeItem={removeTodo}
              // editTodo={editItem}
            />
            <button className="text-red-500 m-6" onClick={clearItems}>
              clear items
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
