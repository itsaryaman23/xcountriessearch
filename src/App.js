import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  const [countryData,setCountryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(()=>{
    fetchData();
  },[]);

  useEffect(()=>{
    console.log(search);
    const arr = countryData.filter(cd=>{
      if(cd.name.common.toLowerCase().includes(search.toLowerCase()))
        return cd;
    })
    setFilteredData(arr);
  },[search])

  const fetchData = async () => {
    try{
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountryData(data);
      setFilteredData(data);
      
    }
    catch(e){
      console.log("error");
    }  
  }


  return (
    <>
    <Header setSearch = {setSearch}/>
    <Countries countryData={filteredData}/>
    {!filteredData.length &&
    (<h3 className="heading">Country not found... Try again!!</h3>)}
    </>
  );
}

export default App;
