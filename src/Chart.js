import React, {Component} from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state={
            chartData:{
                labels:['1','2','3','4','5','6'],
                datasets:[
                    {
                        label:'Idiotism',
                        data:[1,2,3,4,5,6],
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
        }
    }

    render() {
        return (
            <div className="ChartName">
                <Bar
                    data={this.state.chartData}
                    options={{}}
                />
            </div>
        )
    }
}

export default Chart;