import "./App.css";
import Todos from "./Todos";


const sighInWithGoogle = () => {};
  

const SignIn = () => (
  <main>
    <button onClick={sighInWithGoogle}>Sign In With Google</button>
  </main>
);

const App = () => {
  const user = "";

  return user ? <Todos /> : <SignIn />;
};

export default App;