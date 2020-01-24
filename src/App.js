import React, {Component} from 'react';
import LineChart from "./LineChart";
//import logo from './logo.svg';
import './App.css';
//import JSON from './Json'

function GetData(){
    let data = [];
    let T_time = [];
    let temperature = [];
    let result_data = [];
    fetch("/api/v001/temperature/VegaTempDeviceDatas/current")
        .then(res => res.json())
        .then(
            result => {
                for(let i = 0; i < result.length; i++) {
                    data.push({
                        T_time: result[i].uptime,
                        temperature: result[i].temperature
                    })
                }
                //console.log('result array');
                //console.log(data);
                for(let i = 0; i < data.length; i++) {
                    T_time.push(data[i].T_time);
                    temperature.push(data[i].temperature);
                }
            }
        );
    //console.log('result time array');
    result_data.push(T_time);
    //console.log(result_data[0]);

    //console.log('result temperature array');
    result_data.push(temperature);
    //console.log(result_data[1]);

    console.log('RESULTING ARRAY');
    console.log(result_data);

    return result_data;
}

class App extends Component{
    constructor(){
        super();
        this.state = {
            data: GetData()
        };
    }

    componentDidMount() {
            window.setInterval(() => {
                this.setState({
                    data: GetData()
                })
            }, 5000)
    }

    render() {
        return (
            <div className="App">
                <div>
                    <LineChart />
                </div>
            </div>
        );
    }
}

export default App;
