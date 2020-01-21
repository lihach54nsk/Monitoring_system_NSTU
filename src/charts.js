//import * as CanvasJSReact from 'canvasjs/dist/canvasjs';
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('canvasjs/dist/canvasjs');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];
class Charts extends Component {

    render() {
        const options = {
            theme: "light2",
            title: {
                text: "Stock Price of NIFTY 50"
            },
            axisY: {
                title: "Price in USD",
                prefix: "$",
                includeZero: false
            },
            data: [{
                type: "line",
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "$#,##0.00",
                dataPoints: dataPoints
            }]
        }
        return (
            <div className="Charts">
                <CanvasJSChart options = {options}
                               onRef={ref => this.chart = ref}
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }

    componentDidMount(){
        var chart = this.chart;
        fetch('https://canvasjs.com/data/gallery/react/nifty-stock-price.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                for (var i = 0; i < data.length; i++) {
                    dataPoints.push({
                        x: new Date(data[i].x),
                        y: data[i].y
                    });
                }
                chart.render();
            });
    }
}

//export default Charts;
module.exports = Charts;