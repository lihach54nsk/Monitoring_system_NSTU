import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import JSON from './Json'

class App extends Component{
    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData(){ // get data for chart
        this.setState({
            chartData:{
                labels:['1','2','3','4','5','6'],
                datasets:[
                    {
                        label:'Idiotism',
                        data:[1,2,3,4,3,1],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(225,77,62,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(105,19,2,0.6)',
                            'rgba(1,1,1,0.6)',
                            'rgba(255,109,132,0.6)'
                        ]
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload. Now I'm trying to fix the bug with this.
                    </p>
                    <a
                        className="App-link"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Show charts
                    </a>

                </header>
                <div>
                    <Chart chartData = {this.state.chartData}/>
                </div>
                <div>
                    <JSON />
                </div>
            </div>
        );
    }
}

export default App;
