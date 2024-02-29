import Dexie from "dexie";

export const db = new Dexie("LPA");
db.version(1).stores({
  role: "++id, role",
});
db.version(2).stores({
  question: "++id, question",
});
db.version(3).stores({
  area: "++id, area",
});
db.version(12).stores({
  audit: "++id, role, area, date, auditStatus, question1, question2, question3, question4, question5, question1Status, question2Status, question3Status, question4Status, question5Status",
  
});
db.version(5).stores({
  remark: "++id, auditId, auditRole, auditArea, auditDate, auditQuestion, remarkStatus, remarkRole, remarkDate, remark, remarkComment, remarkExecuteDate",
});