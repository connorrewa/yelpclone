import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { RestaurantsContextProvider } from './context/restaurantsContext';
import Home from "./routes/Home";
import RestaurantDetail from './routes/RestaurantDetail';
import UpdatePage from './routes/UpdatePage';


const App = () => {
    return (
        <RestaurantsContextProvider>
            <div className = "container"> 
            <Router>
                <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/restaurants/:id/update" element = {<UpdatePage/>}/>
                <Route path = "/restaurants/:id" element = {<RestaurantDetail/>}/>
                </Routes>
            </Router>
            </div>
        </RestaurantsContextProvider>
    )
};

export default App;