import React from "react";

export default class Rating extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           stars: [],
           rating: 0,
           hovered: 0,
           selectedIcon: "★",
           deselectedIcon: "☆"
       };

       let outOf = props.outOf ? props.outOf : 5;

       for (var i = 0; i < outOf; i++) {
           this.state.stars.push(i +1);
       }
   }

   changeRating(newRating) {
       this.setState({
           rating: newRating
       });

       if (this.props.onChange) 
       this.props.onChange(newRating);
   }

   hoverRating(rating) {
       this.setState({
           hovered: rating 
       });
   }

    render(){
        let {stars, rating, hovered, deselectedIcon, selectedIcon} = this.state;
       
        return(
            <div>
                <div className="'rating" style={{fontSize: '1em'}}>
                    {stars.map(star => {
                        return(
                            <span
                                key= {star}
                                style={{cursor: 'pointer'}}
                                onClick={() => {this.changeRating(star); }}
                                onMouseEnter={() => {this.hoverRating(star); }}
                                onMouseLeave={() => {this.hoverRating(0); }}>
                                {rating < star ?
                                    hovered < star ? deselectedIcon : selectedIcon
                                : selectedIcon}
                            </span>
                        );
                    })}
                </div>    
            </div>
            
        );
    }
}
