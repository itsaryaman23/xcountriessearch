import React from 'react';
import styles from './CountryCard.module.css';

const CountryCard = ({title, flag}) => {
    return (
    <div className={styles.countryCard}>
        <img src={flag} width="50px" height="50px"/>
        <h5 className={styles.flagTitle}>{title}</h5>

    </div>)
}
export default CountryCard;