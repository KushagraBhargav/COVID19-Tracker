import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';
import { red } from '@material-ui/core/colors';
import Footer from './components/footer/Footer';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (      
      <div className={styles.container}>
        <div style={{marginLeft:"110em"}}>
          <Button variant="contained" color="secondary" >
          REFRESH
          </Button>
        </div>
        <img className={styles.image} src={image} alt="COVID-19" />
        
        
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <br/><br/>
      
      
        <Footer/>
      </div>
    );
  }
}

export default App;