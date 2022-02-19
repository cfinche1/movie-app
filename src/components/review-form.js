import React from "react";

export default class ReviewForm extends React.Component {

    handleSubmit = (event) => {
        this.props.handleChange(event.target.newreview.value);
        event.preventDefault();
    }
    
    render() {
       return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Review:<br />
                        <input type='text'  name='newreview' placeholder='Enter Review'/>
                    </label> 
                    <input type="submit" value='Submit'/>
                </form>
            </div>
            
        );
    }
    
} 
