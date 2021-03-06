import React from "react";
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/image.png'

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country})
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  render() {
    const {data, country} = this.state
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='Corona' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App