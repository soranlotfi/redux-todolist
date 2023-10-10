import './App.css'
import {useEffect} from "react";
import {RoutesInterface} from "./Types/App/Routes";

function App() {
    const pathName = window.location.pathname
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
        document.title = "TodoList"
    }, [pathName])

  const getRoutes = (allroutes : RoutesInterface[])=>{
      allroutes.map((route)=>{
        if (route.route){
          return
          <Route key={route.key} path={route.route} element={route.component} />
        }
      })
  }

    return (
        <>
        </>
    )
}

export default App
