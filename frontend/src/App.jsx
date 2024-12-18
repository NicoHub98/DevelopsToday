import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
