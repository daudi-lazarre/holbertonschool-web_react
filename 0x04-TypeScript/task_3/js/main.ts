 /// <reference path="crud.d.ts" />

 import { rowTypes } from "./interface"; // import interface from ./interface.ts
 import * as CRUD from "./crud"; // import CRUD from ./crud.js
 
 const row: rowTypes.RowElement = {
     firstName: "Guillaume",
     lastName: "Salva"
 }
 
 // Insert row into table and return row ID (number) (insertRow function from ./crud.js)
 const newRowID: rowTypes.RowId = CRUD.insertRow(row);
 // Update row with new data (updateRow function from ./crud.js)
 const updatedRow: rowTypes.RowElement = { ...row, age: 23 };
 
 CRUD.updateRow(newRowID, updatedRow); // update row with new data
 CRUD.deleteRow(newRowID); // delete row with ID = newRowID
 