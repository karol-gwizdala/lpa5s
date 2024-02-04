import "@picocss/pico";
import { Navigation } from "./components/navigation";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
