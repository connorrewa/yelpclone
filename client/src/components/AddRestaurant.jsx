import React from 'react'
import { useState, useContext } from 'react'
import restaurantFinder from '../apis/restaurantFinder';
import { restaurantsContext } from '../context/restaurantsContext';


const AddRestaurant = () => {
    const {addRestaurants} = useContext(restaurantsContext);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await restaurantFinder.post("/", {
                name,
                location,
                price_range: priceRange
    
            });
            addRestaurants(response.data.data.restaurant);
            console.log(response)
        } catch (err){
    
        }
    
    }


  return (
    <div className = "mb-4">
        <form action ="">
            <div className="row justify-content-center">

                <div className="col-auto">
                    <input 
                        value = {name}
                        onChange = {(e) => setName(e.target.value)} 
                        type = "text" 
                        className = "form-control" 
                        placeholder = "name"
                    />
                </div>

                <div className="col-auto">
                <input 
                        value = {location}
                        onChange = {(e) => setLocation(e.target.value)} 
                        type = "text" 
                        className = "form-control" 
                        placeholder = "location"
                    />
                </div>

                <div className="col-auto">
                    <select
                        value = {priceRange}
                        onChange = {(e) => setPriceRange(e.target.value)} 
                        className = "form-select">
                        <option disabled>Price Range</option>
                        <option value = "1">$</option>
                        <option value = "2">$$</option>
                        <option value = "3">$$$</option>
                        <option value = "4">$$$$</option>
                        <option value = "5">$$$$$</option>
                    </select>
                </div>
            
            <div className="col-auto">
                <button onClick = {handleSubmit} type = "submit" className="btn btn-primary">Add</button>
            </div>
            </div>
            
        </form>
    </div>
  )
}

export default AddRestaurant