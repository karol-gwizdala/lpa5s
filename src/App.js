
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { ToDo } from "./pages/ToDo";
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
import { CompletedTaskDetails } from "./pages/CompletedTaskDetails";
import { DeleteModalQuestion } from "./components/DeleteModalQuestion";
import { DeleteModalArea } from "./components/DeleteModalArea";
import { DeleteModalRole } from "./components/DeleteModalRole";
import { DelegateTask } from "./components/DelegateTask";
import { AddAuditModal } from "./pages/AddAuditModal";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addaudit" element={<AddAudit />} />
          <Route path="/addauditmodal" element={<AddAuditModal />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/executeaudit/:auditId" element={<ExecuteAudit />} />
          <Route path="/executetask/:auditId" element={<ExecuteTask />} />
          <Route path="/completeddetails/:auditId" element={<CompletedDetails />} />
          <Route path="/completedtaskdetails/:auditId" element={<CompletedTaskDetails />} />
          <Route path="/executeaudit/confirmmodal/:auditId" element={<ConfirmModal />} />
          <Route path="/executeaudit/deletemodal/:auditId" element={<DeleteModal />} />
          <Route path="/settings/deletemodalquestion/:auditId" element={<DeleteModalQuestion />} />
          <Route path="/settings/deletemodalarea/:auditId" element={<DeleteModalArea />} />
          <Route path="/settings/deletemodalrole/:auditId" element={<DeleteModalRole />} />
          <Route path="/executeaudit/question1/:auditId" element={<Question1 />} />
          <Route path="/executeaudit/question2/:auditId" element={<Question2 />} />
          <Route path="/executeaudit/question3/:auditId" element={<Question3 />} />
          <Route path="/executeaudit/question4/:auditId" element={<Question4 />} />
          <Route path="/executeaudit/question5/:auditId" element={<Question5 />} />
          <Route path="/executeaudit/question1/delegatetask/:auditId" element={<DelegateTask />} />
          <Route path="/executeaudit/question2/delegatetask/:auditId" element={<DelegateTask />} />
          <Route path="/executeaudit/question3/delegatetask/:auditId" element={<DelegateTask />} />
          <Route path="/executeaudit/question4/delegatetask/:auditId" element={<DelegateTask />} />
          <Route path="/executeaudit/question5/delegatetask/:auditId" element={<DelegateTask />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
