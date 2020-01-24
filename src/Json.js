import React from "react";
import Chart from './Chart'

class JSON extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        };
    }

    componentDidMount() {
        fetch("/api/v001/temperature/VegaTempDeviceDatas/all/2")
            .then(res => res.json())
            .then(
                result => {
                    this.setState(
                        {
                            isLoaded: true,
                            items: result
                        });
                },
                (error) => {
                    this.setState({
                        isLoaded:true,
                        error
                    });
                }
            )
    }

    /*componentDidMount() {
        const {items} = this.state;
        console.log(Object.keys(items));
        this.getChartData(items);
    }*/

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            //GetData()
            return (
                <div>
                    <div>
                        <Chart chartData = {this.props.chartData}/>
                    </div>
                    <ul>
                        {items.map(item => (
                            <li key = {item.id}>
                                {item.uptime} {item.temperature}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default JSON;
//export let chisla = [1,2,3,4,5,6,67];