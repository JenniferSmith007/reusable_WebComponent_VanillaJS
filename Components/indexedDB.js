import { openDB } from "idb";

export async function demo10() {
  const db = await openDB("commentdb", 2, {
    upgrade: (db, oldVersion, newVersion, transaction) => {
      if (oldVersion === 1) upgradeDBfromV1toV2();

      const upgradeDBfromV1toV2 = () => {
        db.createObjectStore("commentStore", { keyPath: "id" });
        genComments().forEach((comment) => {
          transaction.objectStore("commentStore").add(comment);
        });
      };
    },
  });
  db.close();
}

function genComments ()  {
  return new Array(100).fill().map((item, index) => {
    let id = "comment #" + index.toString().padStart(3, "0");
    let name = "boob";
    let email = " booobs@angel.com";
    let comment = "boobbbies";
    return { id, name, email, comment };
  });
};

export default demo10()