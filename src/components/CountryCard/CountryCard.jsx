import React from 'react';
import './CountryCard.css';

const CountryCard = ({title, flag}) => {
    return (
    <div className="countryCard">
        <img src={flag} width="50px" height="50px"/>
        <p className="flagTitle">{title}</p>
    </div>)
}
export default CountryCard;