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
                        defaultValue="def"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Device Identifier (DevEUI)"
                        defaultValue="def"
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
                        defaultValue="def"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Application key (AppKey) - OTAA"
                        defaultValue="def"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Device Address (DevAddr) - ABP"
                        defaultValue="def"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Application session key (AppSKey) - ABP"
                        defaultValue="def"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Network session key (NwkSKey) - ABP"
                        defaultValue="def"
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