import Dexie from 'dexie';


export const db = new Dexie('RoleList');
db.version(1).stores({
  role: '++id, role' // Primary key and indexed props
});


