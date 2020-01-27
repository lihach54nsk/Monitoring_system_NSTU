import React, {Component} from 'react';
import LineChart from "./LineChart";
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';
//import JSON from './Json'

function GetTemperature(result) {
    let data = [];
    for (let i = 0; i < result.length; i++) {
        data.push({
            T_time: new Date(result[i].uptime),
            temperature: result[i].temperature
        });
    }
    return data;
}

function GetData(){
    let data = [];
    axios.get("/api/v001/temperature/VegaTempDeviceDatas/all/2")
        .then(result => {
                data.push({
                    title: 'Temperature',
                    data: GetTemperature(result.data)
                });
                //console.log('got json');
                //console.log(result);
                console.log('result array');
                console.log(data);
            }
        );
    /*fetch("/api/v001/temperature/VegaTempDeviceDatas/all/2")
        .then(res => res.json())
        .then(
            result => {
                data.push({
                    title: 'Temperature',
                    data: GetTemperature(result)
                });
                console.log('result array');
                console.log(data);
            }
        );*/
    return data;
}

class App extends Component {
    constructor(props){
        super(props);
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
                    <LineChart
                        title = {this.state.data.title}
                        color ="#3E517A"
                        data = {this.state.data.data}
                    />
                </div>
            </div>
        );
    }
}

export default App;
