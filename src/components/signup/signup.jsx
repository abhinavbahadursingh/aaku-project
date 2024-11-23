import './signup.css';

function Signup() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <img
            src="novelsnroses/public/Screenshot_2024-11-05_at_9.19.04_PM-removebg.png"
            alt="logo"
            className="loginlogo"
          />
          <h2>Sign up with email</h2>
          <p>"A world of stories awaits. Join us to share your journey, one page at a time.”</p>
          <form>
            <input type="text" id="Email" placeholder="Email" />
            <input
              type="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit">GET STARTED</button>
          </form>
          <p>Already have an existing account?</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
