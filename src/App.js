import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './containers/Header';
import { BrowserRouter} from "react-router-dom";

function App() {
    return ( 
        <div className = "App" > 
            <BrowserRouter>
               <Header/>
            </BrowserRouter>
        </div>
    );
}

export default App;

{/* this is single line comment system in react */}

 {/*this is multiline com-
ment system in react*/}