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
import { Question1 } from "./components/Question1";
import { Question2 } from "./components/Question2";
import { Question3 } from "./components/Question3";
import { Question4 } from "./components/Question4";
import { Question5 } from "./components/Question5";
import { CompletedDetails } from "./pages/CompletedDetails";
import { ExecuteTask } from "./pages/ExecuteTask";

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
          <Route path="/executetask/:auditId" element={<ExecuteTask />} />
          <Route path="/completeddetails/:auditId" element={<CompletedDetails />} />
          <Route path="/executeaudit/confirmmodal/:auditId" element={<ConfirmModal />} />
          <Route path="/executeaudit/deletemodal/:auditId" element={<DeleteModal />} />
          <Route path="/executeaudit/question1/:auditId" element={<Question1 />} />
          <Route path="/executeaudit/question2/:auditId" element={<Question2 />} />
          <Route path="/executeaudit/question3/:auditId" element={<Question3 />} />
          <Route path="/executeaudit/question4/:auditId" element={<Question4 />} />
          <Route path="/executeaudit/question5/:auditId" element={<Question5 />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
