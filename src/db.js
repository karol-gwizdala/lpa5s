import Dexie from "dexie";

export const db = new Dexie("RoleList");
db.version(1).stores({
  role: "++id, role",
});
db.version(2).stores({
  question: "++id, question",
});
db.version(3).stores({
  area: "++id, area",
});
