import React from 'react';
import Card from './Card';

class AllCards extends React.Component {
    render() {
        return (
            <div className="cardContainer">
                {this.props.character.map(character => {
                    return (
                        <Card
                            name={character.name}
                            birth={character.birth_year}
                            eye={character.eye_color}
                            hair={character.hair_color}
                            gender={character.gender}
                            height={character.height}
                            mass={character.mass}
                            key={character.name} />
                    );
                })}
            </div>
        )
    }
}

export default AllCards; 