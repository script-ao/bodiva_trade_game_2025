import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Balance,
  Introdution,
  Lose,
  Market,
  Register,
  Welcome,
  Win,
} from "../../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Welcome />} />
        <Route path="/introdution" element={<Introdution />} />
        <Route path="register" element={<Register />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/market" element={<Market />} />
        <Route path="/win" element={<Win />} />
        <Route path="/lose" element={<Lose />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
