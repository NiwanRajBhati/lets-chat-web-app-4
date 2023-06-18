var firebaseConfig = {
      apiKey: "AIzaSyCpdkm3kwdpO0bOq44TyZXwKBWgDdWltzc",
      authDomain: "adv-c94letschatweb-app.firebaseapp.com",
      databaseURL: "https://adv-c94letschatweb-app-default-rtdb.firebaseio.com",
      projectId: "adv-c94letschatweb-app",
      storageBucket: "adv-c94letschatweb-app.appspot.com",
      messagingSenderId: "810067592185",
      appId: "1:810067592185:web:8d771625699316eb12b328",
      measurementId: "G-TJFY4WYLN5"
  };
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location = "index.html"
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();