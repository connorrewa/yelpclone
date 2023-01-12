import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import restaurantFinder from '../apis/restaurantFinder'

const AddReview = () => {
    const {id} = useParams()
    console.log(id)
    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("")

const handleSubmitReview = async (e) => {
    try {
        const response = await restaurantFinder.post(`/${id}/addreview`, {
            name,
            review: reviewText,
            rating
        })
        console.log(response)
    } catch (err) {
        console.log(err)
    }


    
}


  return (
    <div className = "mb-2">
        <form action="">
            <div className="row justify-content-center">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input value = {name} onChange = {e => setName(e.target.value)}  placeholder = "name" type="text" className = "form-control" />
                </div>
                <div className= "col-4">
                    <label htmlFor="rating">Rating</label>
                    <select value={rating} onChange = {e => setRating(e.target.value)} className = "form-select">
                        <option disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group pb-3">
                <label htmlFor="Review">Review</label>
                <textarea value = {reviewText} onChange = {e => setReviewText(e.target.value)} id="Review" className="form-control"></textarea>
            </div>
            <button type = "submit" onClick = {handleSubmitReview} className = "btn btn-primary">
                Submit
            </button>
        </form>
    </div>
  )
}

export default AddReview