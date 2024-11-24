import React from 'react';
import styles from './CountryCard.module.css';

const CountryCard = ({title, flag}) => {
    return (
    <div className={styles.countryCard}>
        <img src={flag} width="50px" height="50px"/>
        <p className={styles.flagTitle}>{title}</p>

    </div>)
}
export default CountryCard;