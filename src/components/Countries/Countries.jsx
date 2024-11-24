import React from 'react';
import styles from './Countries.module.css';
import CountryCard from '../CountryCard/CountryCard';

const Countries = ({countryData}) => {
    return (
        <div className={styles.countryCont}>
               {countryData && countryData.map(cd=><CountryCard key={cd.cca2} title={cd.name.common} flag={cd.flags.png}/>)}
        </div>
    )
}

export default Countries;