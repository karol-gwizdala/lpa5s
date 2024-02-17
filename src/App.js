import "@picocss/pico";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { ToDo } from "./pages/ToDo";
import { Delegated } from "./pages/Delegated";
import { Completed } from "./pages/Completed";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./pages/Settings";
import { AddAudit } from "./pages/AddAudit";
import { ExecuteAudit } from "./pages/ExecuteAudit";
import { ConfirmModal } from "./components/ConfirmModal";
import { DeleteModal } from "./components/DeleteModal";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addaudit" element={<AddAudit />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/delegated" element={<Delegated />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/executeaudit/:auditId" element={<ExecuteAudit />} />
          <Route path="/executeaudit/confirmmodal/:auditId" element={<ConfirmModal />} />
          <Route path="/executeaudit/deletemodal/:auditId" element={<DeleteModal />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
