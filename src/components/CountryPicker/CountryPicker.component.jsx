import { useState, useEffect } from "react"
import styles from './CountryPicker.module.css';
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../api";

const CountryPicker = ({handleCountryChange}) => { 
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(()=>{
    const fetchCountriesAPI = async () =>{
      setFetchedCountries(await fetchCountries())
    }
    fetchCountriesAPI();
  }, [])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event) => handleCountryChange(event.target.value)}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => <option key= {i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker