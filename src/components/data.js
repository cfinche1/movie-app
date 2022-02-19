import React from "react";
import Rating from "./rating";
import ReviewList from "./review-list";



export default class Data extends React.Component {
    render() {
        return(
            <div className='movie-card'>
                <div className="grid-container">
                    <div className="menu">
                        <img id= 'poster' 
                        src={this.props.poster} 
                        height = '300px'/>
                    </div>
                    <div className="main">
                        <h3>{this.props.title}</h3> <br/>
                        <h5>{this.props.year}</h5> <br/> 
                        <h5>{this.props.synopsis} </h5>  
                    </div>
                    <div className="footer">
                        <h2>Rate <br/> <Rating/></h2> 
                        <ReviewList/>
                    </div> 
                </div>
            </div>
            
        )
    }
}