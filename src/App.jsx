import { useState } from "react";
import Routes from "./Routes"
import { createContext,Provider } from "react";

const loginContext = createContext();

function App() {
  const [isLoggedIn,setLoggedIn] = useState(false);
  return (
    <loginContext.Provider value={{isLoggedIn,setLoggedIn}}>
      <Routes />
    </loginContext.Provider>
  )
}

export default App
export {loginContext}
