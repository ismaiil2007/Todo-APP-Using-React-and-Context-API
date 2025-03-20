

// Todos app Project

import React from "react";
import Todos from "./Todos-App/components/Todos";
import Form from "./Todos-App/components/Form";
import './index.css'

const App = () => {
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4 ">
          <Form />
        </div>
        <div className="flex flex-wrap gap-y-3 w-full">
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default App;
