import React from 'react';

const CharacterCard = props => {
    console.log("CharacterCard Props", props)
    return (
        <div className="characterCard">
            <h2>Name: {props.character.name}</h2>
            <h2>Gender: {props.character.gender}</h2>
            <h2>Height: {props.character.height} cm</h2>
            <h2>Birth Year: {props.character.birth_year}</h2>
            <h2>Skin Color: {props.character.skin_color}</h2>
            <h2>Hair Color: {props.character.name}</h2>
            <h2>Eye Color: {props.character.eye_color}</h2>
            <h2>Mass: {props.character.mass} kg</h2>


        </div>
    );
}

export default CharacterCard;