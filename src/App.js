import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import moment from "moment";

import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { authentication } from "./fireBase";

// import firebase from "firebase";

function App() {
  // const token = firebase.auth().currentUser;
  // console.log(token);
  // var m = moment();
  const [time, SetTime] = useState();

  useEffect(() => {
    const loopTime = setInterval(() => {
      SetTime(moment().format("LTS"));
    });

    return () => {
      clearInterval(loopTime);
    };
  }, [time]);

  function authen() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {});
  }

  return (
    <div className="App">
      <h1> {time}</h1>
      <button
        onClick={() => {
          authen();
        }}
      >
        log in with google{" "}
      </button>
    </div>
  );
}

export default App;
