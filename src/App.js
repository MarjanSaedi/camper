import "./App.css";

function App() {
  return (
    <div id="root">
      <div class="root-box css-rootbox1">
        <div className="main-container">
          <div className="App">
            <label className="Title">Sing in </label>

            <label>Email</label>
            <input type="text" placeholder="Enter your email..." />

            <label>Password</label>
            <input type="Password" placeholder="Enter your password..." />
            <div className="rootRows">
              <input type="checkbox" />
              <label>Remember me</label>

              <label>Forget password</label>
            </div>
            <div className="rootRows">
              <button>Login</button>
              <button>Sign up</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
