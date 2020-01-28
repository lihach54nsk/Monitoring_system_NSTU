import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import {Input} from "@material-ui/core";
import {Tooltip} from "@material-ui/core";

// Material-UI framework
class EnergyButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: 42
        }
    }

    async componentDidMount() {

    }

    async handleClick() {
        //alert('Clicked');
        this.setState({value:this.state.value + 1});
    }

    render() {
        return (
            <div>
                <form>
                    Текущий счёт за э/э: <Input value={this.state.value}></Input>
                    <Tooltip title="Обновить данные по э/э">
                        <Button onClick = {this.handleClick} variant = {this.props.variant} color = {this.props.color}>{this.props.text}</Button>
                    </Tooltip>
                </form>
            </div>
        )
    }
}

export default EnergyButton;