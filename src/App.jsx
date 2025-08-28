import React from "react";
import Button from "./components/Button";

function App() {
  const handleClick = (msg) => {
    alert(msg);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold">Reusable Button Demo</h1>

      <Button variant="primary" onClick={() => handleClick("Primary clicked!")}>
        Primary Button
      </Button>

      <Button variant="secondary" onClick={() => handleClick("Secondary clicked!")}>
        Secondary Button
      </Button>

      <Button variant="danger" onClick={() => handleClick("Danger clicked!")}>
        Danger Button
      </Button>

      <Button variant="primary" disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default App;
