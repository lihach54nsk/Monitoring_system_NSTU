import React, {Component} from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        fontSize: 40,
        displayLegend:true,
        legendPosition:'right'
    };

    render() {
        return (
            <div className="ChartName">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'The first my chart in React js',
                            fontSize: this.props.fontSize
                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;