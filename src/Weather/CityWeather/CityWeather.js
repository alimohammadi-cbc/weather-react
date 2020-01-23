import React, { Component } from 'react';
import Select from 'react-select';
import _ from 'lodash';

import './CityWeather.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../assets/vendor/animate/animate.css'
import '../../assets/vendor/select2/select2.min.css'
import '../../assets/vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../../assets/css/util.css'
import '../../assets/css/main.css'


const options = [
  { value: 'Toronto', label: 'Toronto' },
  { value: 'Vancouver', label: 'Vancouver' },
  { value: 'Montreal', label: 'Montreal' },
  { value: 'Ottawa', label: 'Ottawa' },
  { value: 'Quebec', label: 'Quebec' },
];

const apiURL = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather';
const apiID = 'c03531387aed7cd065a19cc3e1191d2a';

class CityWeather extends Component {

  constructor(props) {
     super(props);
     this.state = {
       selectedOption: null,
       error: null,
       isLoaded: false,
       items: []
     };
   }

  handleChange = selectedOption => {

    this.setState({selectedOption})

    fetch(apiURL+'?q='+'toronto'+'&APPID='+apiID+'&units=metric', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState(
        { selectedOption },
        () => {
          this.setState({
            items: data
          });
        },
      )
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {

    return (

      <form className="example-form">

          <div className="limiter" >

            <div className="container-table100">
              <div className="wrap-table100">

                <Select
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  placeholder = {'Select a city...'}
                />

                <div className={this.state.selectedOption && _.get(this.state, 'selectedOption.value') !== ''? 'table100 ver1 m-b-110' : 'hidden'} style = {{marginTop: "20px"}}>
                  <div className="table100-head">
                    <table>
                      <thead>
                        <tr className="row100 head">
                          <th className="cell100 column1">{_.get(this.state, 'selectedOption.value')} Weather over React</th>
                        </tr>
                      </thead>
                    </table>
                  </div>

                  <div className="table100-body js-pscroll">
                    <table>
                      <tbody>
                        <tr className="row100 body">
                          <td className="cell100 column1">Description: {_.get(this.state, 'items.weather[0].description')}</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Temperature: {_.get(this.state, 'items.main.temp')} &#8451;</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Feels Like: {_.get(this.state, 'items.main.feels_like')} &#8451;</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Humidity: {_.get(this.state, 'items.main.humidity')}%</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Longitude: {_.get(this.state, 'items.coord.lon')}</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Latitude: {_.get(this.state, 'items.coord.lat')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </form>
    );
  }
}

export default CityWeather;
