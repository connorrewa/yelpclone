import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import restaurantFinder from "../apis/restaurantFinder";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { restaurantsContext } from "../context/restaurantsContext";

const RestaurantDetail = () => {
  const {id} = useParams("");
  const {selectedRestaurant, setSelectedRestaurant} = useContext(restaurantsContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await restaurantFinder.get(`/${id}`)

        setSelectedRestaurant(response.data.data)
      }
     catch (err) {
      console.log(err)
    }
  }
    
    fetchData();

  },[])

  return (
    <div>{selectedRestaurant && (
      <>
      <h1 className = "text-center display-1">{selectedRestaurant.restaurant.name}</h1>
      <div className="text-center">
        <StarRating rating = {selectedRestaurant.restaurant.average_rating}/>
        <span className="text-warning ml-1">
          {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})`: "(0)"}
        </span>
      </div>
      <div className="mt-3">
        <Reviews reviews = {selectedRestaurant.reviews} />
        
        <div>
          <AddReview/>
        </div>
      </div>
      </>
    )}</div>
  )
};

export default RestaurantDetail;