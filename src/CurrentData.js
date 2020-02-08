import React from "react";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";

class CurrentData extends React.Component {
    constructor(props) {
        super(props);
    }

    current = 0.0;

    async componentDidUpdate() {
        const responce  = await fetch(this.props.source);
        const json = await responce.json();
        //console.log('ONEPUNCH');
        //console.log(json);
        this.current = json.temperature;
        this.setState({data: json});
    }

    async componentDidMount() {
        const responce  = await fetch(this.props.source);
        const json = await responce.json();
        //console.log('ONEPUNCH');
        //console.log(json);
        this.current = json.temperature;
        this.setState({data: json});
    }

    render() {
        return (
            <React.Fragment>
                <Title>{this.props.title}</Title>
                <Typography component="p" variant="h3">
                    {this.current/this.props.divider} {this.props.ending}
                </Typography>
            </React.Fragment>
        )
    }
}

export default CurrentData;