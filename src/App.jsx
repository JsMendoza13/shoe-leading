import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
