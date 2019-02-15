import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>{this.props.name}</h3>
                <p>Birth Year: {this.props.birth}</p>
                <p>Gender: {this.props.gender}</p>
                <p>Eye: {this.props.eye}</p>
                <p>Hair: {this.props.hair}</p>
                <p>Height: {this.props.height}cm</p>
                <p>Mass: {this.props.mass}kg</p>
            </div>
        )
    }
}

export default Card; 