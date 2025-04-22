import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [issubmit, setIssubmit] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password") {
      setError(false);
      setIssubmit(true);
    } else {
      // console.log("login");
      setIssubmit(false);
      setError(true);
    }
  };

  return (
    <div>
      {!issubmit ? (
        <>
          <h1>Login Page</h1>

          {error && <p>Invalid username or password</p>}

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <h1>Login Page</h1>

          <h4>Welcome, user!</h4>
        </>
      )}
    </div>
  );
}

export default Login;
