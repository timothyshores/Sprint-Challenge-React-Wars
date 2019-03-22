import React from 'react';

const CharacterCard = props => {
    console.log("CharacterCard Props", props)
    return (
        <div className="characterCarfd">
            <h2>{props.character.name}</h2>
        </div>
    );
}

export default CharacterCard;