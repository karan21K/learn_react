import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"
import CounterApp from "./components/CounterApp"
import { LearnUseEffect } from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChildA from "./components/ChildA"
import { createContext, useState } from "react"
import LearnUseRef from "./components/LearnUseRef"
import LearnCustomHook from "./components/LearnCustomHook"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnInlineCss from "./components/LearnInlineCss"
import LearnLoadingImages from "./components/LearnLoadingImages"
import LearnForms from "./components/LearnForms"

const StockContext = createContext()
const UserContext = createContext()

function App() {
  let stock = 'Tesla'
  let price = 300
  const [user, setUser] = useState({name: 'Karan', isLoggedIn: 'yes'})

  const getStock = (data) => {
    console.log(data)
  }

  return (
    <>
      {/* <h1>App Components</h1> */}
      {/* <HelloWorld />
      <LearnReact /> */}
      {/* <LearnJSX /> */}
      {/* <LearnProps stock="Apple" price={price} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp  getStock={getStock} /> */}
      {/* <LearnUseState /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <StockContext.Provider value={{stock, price}}>
        <UserContext.Provider value={{user, setUser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}
      {/* <LearnUseRef /> */}
      {/* <LearnCustomHook /> */}
      {/* <LearnConditionalRendering /> */}
      {/* <LearnMap /> */}
      {/* <LearnInlineCss /> */}
      {/* <LearnLoadingImages /> */}
      <LearnForms />
    </>
  )
}

export default App
export {StockContext, UserContext}
