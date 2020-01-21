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

class CityWeather extends Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, _.get(this.state, 'selectedOption.value'))
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (

      <form className="example-form">

          <div className="limiter" >

            <div className="container-table100">
              <div className="wrap-table100">

                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                  placeholder = {'Select a city...'}
                />

                <div className={this.state.selectedOption && _.get(this.state, 'selectedOption.value') != ''? 'table100 ver1 m-b-110' : 'hidden'} style = {{marginTop: "20px"}}>
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
                          <td className="cell100 column1">Description: </td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Temperature: &#8451;</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Feels Like: &#8451;</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Humidity: %</td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Longitude: </td>
                        </tr>
                        <tr className="row100 body">
                          <td className="cell100 column1">Latitude: </td>
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
