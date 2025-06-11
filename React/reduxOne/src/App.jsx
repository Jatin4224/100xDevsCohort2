import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "./store/reducers/UserReducer";
function App() {
  const { users } = useSelector((state) => state.UserReducer);
  const Dispatch = useDispatch();

  const DeleteHandler = (id) => {
    Dispatch(userDelete(id));
  };
  return (
    <>
      <div className="m-auto container p-8 mt-5 bg-gray-600 ">
        <h1 className="text-2xl font-bold text-white ">User List</h1>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <h1 className="bg-gray-400 text-gray-800">
                  {user.name} {""}
                  <span
                    onClick={() => DeleteHandler(user.id)}
                    className="text-red-600 font-black cursor-pointer hover:text-red-800"
                  >
                    X
                  </span>
                </h1>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
