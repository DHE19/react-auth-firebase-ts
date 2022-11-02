import { useContext } from "react";
import ProfileCard from "./components/ProfileCard";
import { AuthContext } from "./context/AuthContext";

import { useLogin } from "./hooks/useLogin";

function App() {
  const {state} = useContext(AuthContext);
  console.log(state);
  const {login, isPending} = useLogin();

  return  state.authIsReady ? (
    <div className="App">
      {state.user ? (
        <ProfileCard user={state.user}/>):
      ( <button className="btn" onClick={login}>
          {isPending ? "Loading...": "Login with Github"}
        </button>)
      }
    </div>
  ): (<div className="App"><h1>Please bear with me..</h1></div>)
}

export default App;
