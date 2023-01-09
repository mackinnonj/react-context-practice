import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Doom',
            price: '$10',
            id: 2556724
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23564
        }
        ]);
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}