const firebaseConfig = {
    apiKey: "AIzaSyBNYZ9OA5zh99lKHMnOfeSJhWlsGHomQyA",
    authDomain: "footballquiz-50cea.firebaseapp.com",
    databaseURL: "https://footballquiz-50cea-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "footballquiz-50cea",
    storageBucket: "footballquiz-50cea.appspot.com",
    messagingSenderId: "834486630569",
    appId: "1:834486630569:web:f094c548bd539de49f51b8",
    measurementId: "G-7C720BX00T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  
   try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }