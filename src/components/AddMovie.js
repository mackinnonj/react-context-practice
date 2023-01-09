import React, {useState} from "react";

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (e) => {
        // this is equal to the input's texts value
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        // this is equal to the input's texts value
        setPrice(e.target.value)
    }
    
    const addMovie = e => {
        e.preventDefault();
        
    }

    return (
        <form>
            <input type="text" name="name" value={name} onChange={updateName} ></input>
            <input type="text" name="price" value={price} onChange={updatePrice} ></input>
            <button>Submit</button>
        </form>
    )
}