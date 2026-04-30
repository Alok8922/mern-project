import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2>Placement Portal Login</h2>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Login</button>

      <p>
        New user? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
