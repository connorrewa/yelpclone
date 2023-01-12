import React, {useState, createContext} from "react";

export const restaurantsContext = createContext();

export const RestaurantsContextProvider = props => {

    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    }

    return (
        <restaurantsContext.Provider value = {{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant}}>
            {props.children}
        </restaurantsContext.Provider>
    )
}