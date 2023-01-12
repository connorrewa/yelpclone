import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import restaurantFinder from '../apis/restaurantFinder';
import { restaurantsContext } from '../context/restaurantsContext';

const UpdateRestaurant = (props) => {
    const {id} = useParams();
    const restaurants = useContext(restaurantsContext)
    let navigate = useNavigate();
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await restaurantFinder.get(`/${id}`)
            console.log(response.data.data)
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setPriceRange(response.data.data.restaurant.price_range)

        }
        fetchData();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const UpdatedRestaurant = await restaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        });
        
        navigate("/");
    };

  return (
    <div>
        <form action ="">
            <div className = "form-group">
                <label htmlFor='name'>Name</label>
                <input 
                    value = {name} 
                    onChange = {e => setName(e.target.value) }
                    id = "name"
                    className = "form-control" 
                    type = "text" 
                />
            </div>

            <div className = "form-group">
                <label htmlFor='location'>Location</label>
                <input 
                    value = {location} 
                    onChange = {e => setLocation(e.target.value) }
                    id = "location"
                    className = "form-control" 
                    type = "text" 
                />
            </div>

            <div className = "form-group">
                <label htmlFor='price_range'>Price Range</label>
                <input 
                    value = {priceRange} 
                    onChange = {e => setPriceRange(e.target.value) }
                    id = "price_range" 
                    className = "form-control" 
                    type = "number" 
                />
            </div>
            <button onClick = {handleSubmit} className = "btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}

export default UpdateRestaurant