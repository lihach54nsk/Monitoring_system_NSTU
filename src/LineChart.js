import React from "react";
//import * as Chart from "react-chartjs-2";
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.T_time);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.temperature);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            time: {
                                unit: 'week'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.data.map(d => d.T_time),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.temperature),
                    fill: 'none',
                    backgroundColor: this.props.color,
                    pointRadius: 2,
                    borderColor: this.props.color,
                    borderWidth: 1,
                    lineTension: 0
                }]
            }
        });
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

export default LineChart;