import "./Login.css";
import RoomIcon from "@mui/icons-material/Room";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useRef } from "react";
import axios from "axios";

export default function Login({ setShowLogin, myStorage, setCurrentUser }) {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("/users/login", user);
      myStorage.setItem("user", res.data.username);
      //   console.log(myStorage.getItem("user"));
      setCurrentUser(res.data.username);
      setShowLogin(false);
      setError(false);
    } catch (err) {
      console.error(err.response.data);
      setError(true);
    }
  };

  return (
    <div className="loginContainer">
      <div className="logo">
        <RoomIcon /> Mapin
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={nameRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button className="loginBtn">Login</button>

        {error && <span className="failure">Something went wrong!</span>}
      </form>
      <CancelIcon className="loginCancel" onClick={() => setShowLogin(false)} />
    </div>
  );
}
