import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import BASEURL from "../../api/api";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
  const [users, setusers] = useState([]);
  const [sh, setsh] = useState(false);
  const [phoneState, setPhoneState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [bio, setbio] = useState('');
  const [name, setname] = useState('');
  const [usename, setusename] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    get_users();
  }, []);

  function get_users() {
    try {
      axios.get(BASEURL + "/users")
        .then((res) => {
          console.log(res.data);
          console.log("Test");
          setusers(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  function next1(params) {
    if (phoneState == "" || passwordState == "") {
      alert("Inputni to'ldiring ")
    }
    else {
      let finded = users.find((item) => {
        return (
          item.phone === phoneState ||
          item.password === passwordState
        );
      });

      if (finded) {
        navigate("/");
        localStorage.setItem("user",JSON.stringify(finded))
      } else {
        setsh(true);

      }
    }
  }

  function next2(params) {
    if (name == "") {
      alert("Inputni to'ldiring")
    } else {
      let DATA = {
        name: name,
        phone: phoneState,
        bio: bio,
        username: usename,
        type: "user",
        password: passwordState,
      }
      axios.post(BASEURL + "/users", DATA)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user",JSON.stringify(res.data))
          navigate("/");
        });
    }
  }

  return (
    <div className="login-container">
      {!sh ? (
        <div className="card-box">
          <h1>Your phone number and Password</h1>
          <select name="text" id="2" onChange={(e) => setPhoneState(e.target.value)}>
            <option value="+998">Uzbekistan</option>
            <option value="+7">RusIa</option>
            <option value="+12">Arabia</option>
            <option value="+32">Korea</option>
            <option value="+996">Kirgizia</option>
          </select>
          <input type="text" value={phoneState} onChange={(e) => setPhoneState(e.target.value)} placeholder="tel" />
          <input type="text" value={passwordState} onChange={(e) => setPasswordState(e.target.value)} placeholder="parol" />
          <button onClick={next1}>Next</button>
        </div>
      ) : (
        <div className="card-box">
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder="Ism" />
          <input type="text" value={bio} onChange={(e) => setbio(e.target.value)} placeholder="Bio" />
          <input type="text" value={usename} onChange={(e) => setusename(e.target.value)} placeholder="username" />
          <button onClick={next2}>Next</button>
        </div>
      )}
    </div>
  )
}

export default Login;
