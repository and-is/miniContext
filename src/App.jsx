import UserContextProvider from "./context/UserContextProvider.jsx";
import "./App.css";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
