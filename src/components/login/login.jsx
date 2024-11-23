import './login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo"></div>
        <h2>Login with Email</h2>
        <p>
          "Welcome back to Novels N Roses! Unlock a world of stories, thoughtful reviews, 
          and a community of book lovers. Let your reading journey blossom!"
        </p>
        <form>
          <input type="email" id="Email" placeholder="Email" required />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
