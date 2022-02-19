import React from 'react';
import Header from './header';
import Data from './data';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies
        };
    }
    render() {
        let movies;
        if (this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Data key = {index} {...movie} />);
        }
        return (
            <div className='container-fluid movie-app'>
                <div className='header'>
                    <Header />
                </div>
                <div className='card'>
                    {movies}
                </div>
            </div>
        );
    }
}