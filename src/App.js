import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { FirstPage } from "./Components/FirstPage";
// import { Ruben } from "./Components/ruben";
import { Footer } from "./Components/footer/Footer";
import { AppTheme } from "./theme/AppTheme";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" Component={FirstPage}></Route>
    //     <Route path="/Ruben" Component={Ruben} />
    //   </Routes>
    // </BrowserRouter>
      <AppTheme>
        <Footer />
      </AppTheme>
  );
}

export default App;
