import React from "react";

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
        fetch("https://evening-ravine-56495.herokuapp.com/api/v001/temperature/VegaTempDeviceDatas/all/2")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            isLoaded: true,
                            items: result.items
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

    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.id} {item.device} {item.deviceId} {item.batteryLevel} {item.pushTheLimit} {item.uptime} {item.temperature} {item.lowLimit} {item.highLimit}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default JSON;