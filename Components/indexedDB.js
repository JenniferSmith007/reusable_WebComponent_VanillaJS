import buttonFunc from './addCommentState'
import FormDomSetUp from './FormDomSetUp';


const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('CommentDB', 6);
  
    DBOpenReq.addEventListener('error', (err) => {
      //Error occurred while trying to open DB
      console.warn(err);
    });
    DBOpenReq.addEventListener('success', (ev) => {
      //DB has been opened... after upgradeneeded
      db = ev.target.result;
      console.log('success', db);
      buildList();
    });
    DBOpenReq.addEventListener('upgradeneeded', (ev) => {
      //first time opening this DB
      //OR a new version was passed into open()
      db = ev.target.result;
      let oldVersion = ev.oldVersion;
      let newVersion = ev.newVersion || db.version;
      console.log('DB updated from version', oldVersion, 'to', newVersion);
  
      console.log('upgrade', db);
      if (!db.objectStoreNames.contains('commentStore')) {
        objectStore = db.createObjectStore('CommentStore', {
          keyPath: 'id',
        });
      }
    });
    document.getElementById('button').addEventListener('click', (ev) => {
      ev.preventDefault();
      let form = getElementById("form")
      console.log(form)
      buttonFunc()
     
      //id
      let key = document.form.getAttribute('form');
      console.log(key)
      if (key) {
        let comment = {
          id: key,
          name,
          email,
          comment,
          
        };
        let tx = makeTX('commentStore', 'readwrite');
        tx.oncomplete = (ev) => {
          console.log(ev);
          buildList();
          clearForm();
        };
  
        let store = tx.objectStore('commentStore');
        let request = store.put(comment); //request a put/update
  
        request.onsuccess = (ev) => {
          console.log('successfully updated an object');
          //move on to the next request in the transaction or
          //commit the transaction
        };
        request.onerror = (err) => {
          console.log('error in request to update');
        };
      }
    });
  
    document.getElementById('buttondel').addEventListener('click', (ev) => {
      ev.preventDefault();
      //id
      let key = document.form.getAttribute('form');
      if (key) {
        let tx = makeTX('commentStore', 'readwrite');
        tx.oncomplete = (ev) => {
          console.log(ev);
          buildList();
          clearForm();
        };
  
        let store = tx.objectStore('commentStore');
        let request = store.delete(key); //request a delete
  
        request.onsuccess = (ev) => {
          console.log('successfully deleted an object');
          //move on to the next request in the transaction or
          //commit the transaction
        };
        request.onerror = (err) => {
          console.log('error in request to delete');
        };
      }
    });
    // ;
  
    document.getElementById('button').addEventListener('click', (ev) => {
      ev.preventDefault();
      //one of the form buttons was clicked
      buttonFunc()
  
      let comment = {
        id: key,
        name,
        email,
        comment,
        
      };
  
      let tx = makeTX('commentStore', 'readwrite');
      tx.oncomplete = (ev) => {
        console.log(ev);
        buildList();
        clearForm();
      };
  
      let store = tx.objectStore('commentStore');
      let request = store.add(comment); //request an insert/add
  
      request.onsuccess = (ev) => {
        console.log('successfully added an object');
        //move on to the next request in the transaction or
        //commit the transaction
      };
      request.onerror = (err) => {
        console.log('error in request to add');
      };
    });
  
    function buildList() {
      //use getAll to get an array of objects from our store
      let list = document.querySelector('comment-component');
      list.innerHTML = `<li>Loading...</li>`;
      let tx = makeTX('commentStore', 'readonly');
      tx.oncomplete = (ev) => {
        //transaction for reading all objects is complete
      };
      let store = tx.objectStore('commentStore');
      let getReq = store.getAll();
      //returns an array
      //option can pass in a key or a keyRange
      getReq.onsuccess = (ev) => {
        //getAll was successful
        let request = ev.target; //request === getReq === ev.target
        console.log({ request });
        list.innerHTML = request.result
          .map((comment) => {
            return `<li data-key="${comment.id}"><span>${comment.name}</span> ${comment.email} <span>${comment.comment}</span></li>`;
          })
          .join('\n');
      };
      getReq.onerror = (err) => {
        console.warn(err);
      };
    }
  
    document.querySelector('comment-component').addEventListener('click', (ev) => {
      let li = ev.target.closest('[data-key]');
      let id = li.getAttribute('data-key');
      console.log(li, id);
  
      let tx = makeTX('commentStore', 'readonly');
      tx.oncomplete = (ev) => {
        
      };
      let store = tx.objectStore('commentStore');
      let req = store.get(id);
      req.onsuccess = (ev) => {
        let request = ev.target;
        let comment = request.result;
        document.getElementById('name').value = comment.name;
        document.getElementById('email').value = comment.country;
        document.getElementById('comment').value = comment.age;
        
      
        document.form.setAttribute('data-key', comment.id);
      };
      req.onerror = (err) => {
        console.warn(err);
      };
    });
  
    function makeTX(storeName, mode) {
      let tx = db.transaction(storeName, mode);
      tx.onerror = (err) => {
        console.warn(err);
      };
      return tx;
    }
  
    document.getElementById('buttondel').addEventListener('click', clearForm);
  
    function clearForm(ev) {
      if (ev) ev.preventDefault();
      document.form.reset();
      document.form.removeAttribute('data-key');
    }
  })();

