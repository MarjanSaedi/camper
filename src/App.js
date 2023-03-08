import './App.css';

function App() {
  return (
    <div className="App">
        <label>Email</label>
        <input type='text' placeholder='Enter your email...'/>
        <label>Password</label>
        <input type='Password' placeholder='Enter your password...'/>
        <input type= 'checkbox'/>
        <label>Remember me</label>
        <label>Forget password</label>
        <button>Login</button>
        <button>Sign up</button>
    </div>
  );
}

export default App;
