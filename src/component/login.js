import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const token = Cookies.get("jwt_token");
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const url = "http://localhost:4000/login";
  const option = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userDetails),
  };

  const editValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const submit_handler = async (e) => {
    e.preventDefault();
    const response = await fetch(url, option);
    const data = await response.json();
    const jwt_token = data.jwt;
    Cookies.set("jwt_token", jwt_token, { expires: 1 });
    navigate("/", { replace: true });
  };

  useEffect(() => {
    token && navigate("/", { replace: true });
  }, [navigate, token]);

  return (
    <div className="formContainer">
      <form className="formcard" onSubmit={submit_handler}>
        <input
          type="text"
          id="username"
          onChange={editValues}
          value={userDetails.username}
          name="username"
          placeholder="User Name"
        ></input>
        <input
          id="password"
          type="password"
          onChange={editValues}
          value={userDetails.password}
          name="password"
          placeholder="Password"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
