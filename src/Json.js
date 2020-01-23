import React from "react";

var keys = '';

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

    getData(){
        return keys;
    }

    render() {
        const {error, isLoaded, items} = this.state;
        keys = items;
        //console.log(Object.keys(items));
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key = {item.id}>
                            {item.uptime} {item.temperature}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default JSON;
export const dataChartTemperature = Object.keys(keys);
export let chisla = [1,2,3,4,5,6,67];