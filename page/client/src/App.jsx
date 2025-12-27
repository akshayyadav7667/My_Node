import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/users" element={<User/>} />
        <Route path="/product" element={<h1>Product Page</h1>} />
        <Route path="/add-user" element={<h1>Add User Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
