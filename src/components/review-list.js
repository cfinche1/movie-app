import React from "react";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component {
    
    state= {
        reviews: "",
    }
        
    handleChange = (review) =>{
        this.setState({reviews: review})
    }
    

   render() {
       let {reviews} = this.state;
       return(
          <div className="catalog">
              <ReviewForm handleChange = {this.handleChange}/>
              {reviews}
          </div> 
        )
    }
}