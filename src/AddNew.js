import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons'
import MenuItem from '@material-ui/core/MenuItem';

const deviceTypes = [
    {
        value: 'temperature',
        label: 'Temperature'
    },
    {
        value: 'move',
        label: 'Moving'
    },
    {
        value: 'impuls',
        label: 'Impuls'
    },
];

export default function AddNew() {
    const [open, setOpen] = React.useState(false);
    const [deviceType, setType] = React.useState('temperature');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div>
            <Button variant="contained" color="secondary" size="mini" aria-label="add" onClick={handleClickOpen}>
                <Add/>
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New device</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add a new device, please, enter the fields.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Device name"
                        defaultValue="Temperature 1"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Device Identifier (DevEUI)"
                        defaultValue="303036345C386E10"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="standard-select-device"
                        select
                        label="Select device type"
                        value={deviceType}
                        onChange={handleChange}
                        helperText="Please select your device type"
                    >
                        {deviceTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Application identifier (AppEUI) - OTAA"
                        defaultValue="7665676174643131"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Application key (AppKey) - OTAA"
                        defaultValue="1A356010000000001A3860103D501354"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Device Address (DevAddr) - ABP"
                        defaultValue="0056082A"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Application session key (AppSKey) - ABP"
                        defaultValue="2B002700303036343138471061687D44"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Network session key (NwkSKey) - ABP"
                        defaultValue="31384710303036342B0027005C386E10"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}