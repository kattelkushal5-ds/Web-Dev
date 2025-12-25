import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from "./Feed"
import "./App.css"
import Login from "./Login"
import Widgets from "./Widgets"
import { useStateValue } from './StateProvider'

const App = () => {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="app">
            {!user ? <Login />:(
            <>
            <Header/>
            <div className="app-body">
                    <Sidebar />
                    <Feed />
                    <Widgets/>
            </div> </>
            )
          }
           
               
        </div>
    )
}

export default App
