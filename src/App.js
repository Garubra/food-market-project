import { FirstPage } from "./Components/FirstPage";

import { Ruben } from "./Components/ruben";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={FirstPage}></Route>
        <Route path="/Ruben" Component={Ruben} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
