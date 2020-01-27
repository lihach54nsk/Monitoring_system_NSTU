import React from "react";
//import * as Chart from "react-chartjs-2";
import Chart from 'chart.js';
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    async componentDidUpdate() {
        try {
            const response = await fetch("/api/v001/temperature/VegaTempDeviceDatas/all/2");
            const json = await response.json();
            console.log(json);
            this.setState({data: json});

            this.myChart.data.labels = json.map(d => d.uptime);
            this.myChart.data.datasets[0].data = json.map(d => d.temperature);
            this.myChart.update();
        }
        catch (e) {
            console.log(e);
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch("/api/v001/temperature/VegaTempDeviceDatas/all/2");
            const json = await response.json();
            console.log(json);
            this.setState({data: json});

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
                    labels: json.map(d => d.uptime),
                    datasets: [{
                        label: 'this.props.title',
                        data: json.map(d => d.temperature),
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
        catch (e) {
            console.log(e);
        }
    }

    render() {
        return <canvas ref={this.canvasRef} />;
    }
}

export default LineChart;