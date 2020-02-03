import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

/*function preventDefault(event) { // может когда-нибудь понадобится
    event.preventDefault();
}*/

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits(temperature) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Текущая температура</Title>
            <Typography component="p" variant="h3">
                28.3
            </Typography>
        </React.Fragment>
    );
}