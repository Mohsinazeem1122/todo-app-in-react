import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList(input);
    setInput("");
  };

  return (
    <>
      <div className="grid place-items-center text-center w-1/2 mx-auto bg-white m-20 shadow-lg">
        <form onSubmit={handleSubmit}>
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
          {todoList}
        </form>
      </div>
    </>
  );
}

export default App;
