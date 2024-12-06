import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import Welcome from "./components/Welcome";
import Details from "./components/Details";
/* import InputField from "./components/Input"; */
const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <TopBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/details/:lat/:lon" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
