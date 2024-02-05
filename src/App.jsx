import "@picocss/pico";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { ToDo } from "./pages/ToDo";
import { Delegated } from "./pages/Delegated";
import { Completed } from "./pages/Completed";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./pages/Settings";
import { Create } from "./pages/Create";



function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/delegated" element={<Delegated />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      
    </>
  );
}
export default App;
