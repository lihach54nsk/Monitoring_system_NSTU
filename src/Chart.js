import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    /*createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),*/
];

async function getData() {
    try {
        for(let item in data) {
            data.pop();
        }
        const response = await fetch("/api/v001/temperature/VegaTempDeviceDatas/all/2");
        //const response = await fetch(this.props.source);
        const json = await response.json();
        json.sort(function (a, b) {
            return new Date(a.uptime).getTime() - new Date(b.uptime).getTime();
        });
        //console.log(json);
        for(let i = 0; i < json.length; i++) {
            data.push({
                time: json[i].uptime,
                amount: json[i].temperature
            });
        }
        console.log(data);
        //this.setState({data: data});
        //console.log('updated');
    }
    catch (e) {
        console.log(e);
    }
}

export default function Chart() {
    const theme = useTheme();
    getData();
    return (
        <React.Fragment>
            <Title>Temperature</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 75,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            'C
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}