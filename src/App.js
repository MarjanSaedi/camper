import "./App.css";

function App() {
  return (
    <div id="root">
      <div class="root-box css-rootbox1">
        <div className="main-container">
          <div className="App">
            <label className="Title">Sing in </label>
            <div className="topPadding">
              <label>Email</label>
              <input type="text" class= "RootInputs" placeholder="Enter your email..." />
            </div>
            <div className="topPadding">
              <label>Password</label>
              <input type="Password" class= "RootInputs" placeholder="Enter your password..." />
            </div>
            <div className="topPadding">
              <div>
                <input type="checkbox" />
                <label>Remember me</label>
                <label id="forgetPass">Forget password</label>
              </div>
              <button class="RooButton">Login</button>
            </div>
            <div className="topPadding">
              <label>Register now</label>
              <button class="RooButton">Sign up</button>
              
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
