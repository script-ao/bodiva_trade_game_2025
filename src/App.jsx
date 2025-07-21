import "./sass/main.scss";

import React from "react";
import { AppRouter } from "./routes";
import { GameProvider } from "./context";

function App() {
  return (
    <GameProvider>
      <AppRouter />
    </GameProvider>
  );
}

export default App;
