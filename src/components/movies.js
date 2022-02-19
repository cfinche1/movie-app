import React from "react";
import Container from "./container";


export default class Movies extends React.Component {
    render() {
        let movies = [
            {
                title: 'Back To The Future',
                year: '1985',
                synopsis: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
                poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3DlU_WuKVIsnKh2ZnNCRr6jxhwp4jswPpQ&usqp=CAU'
            },
            {
                 title: 'Practical Magic',
                 year: '1998',
                 synopsis: 'Two witch sisters, raised by their eccentric aunts in a small town, face closed-minded prejudice and a curse which threatens to prevent them ever finding lasting love.',
                 poster: 'https://m.media-amazon.com/images/M/MV5BMzU4MmNkNGYtN2I1Zi00ZDEzLTlmZjItNWQ5NWI0NzcwZDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
            },
            {
                 title:'Beetlejuice',
                 year: '1988',
                 synopsis: 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.',
                 poster: 'https://i5.walmartimages.com/asr/c40f4a63-a241-4b37-9816-bdca9e3e45ea_1.0f0be332400c2f451af0100332ab7955.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
            },
            {
                 title:'Pride and Prejudice',
                 year:'2005',
                 synopsis: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?',
                 poster: 'https://www.themoviedb.org/t/p/original/sZEXhhnEKh9hjzoiIi9XgHGqtYm.jpg'
            },
            {
                 title:'Labyrinth',
                 year:'1986',
                 synopsis: 'Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.',
                 poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8OQ6fIYmtXKsMEbYlPg5_41AsyTMBYyy-Q&usqp=CAU'
            }
        ];

        
        
        return (
            <div className="movies">
                <Container {...{movies:movies}}/>
            </div>
        );
    }
}