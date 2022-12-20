import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Card, CardMedia, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UploadImages from "./UploadImages";
function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };


    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"lg"}>
            <DialogTitle>Upload an Image</DialogTitle>
            <Container>
                <Box sx={{ height:"500px"}}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={4}>
                            <Grid2 container spacing={2}>
                                {/*<Grid2 xs={12}>*/}
                                {/*    <Card sx={{maxWidth:345}}>*/}
                                {/*        <CardMedia*/}
                                {/*            component="img"*/}
                                {/*            height="345"*/}
                                {/*            image="static/images/contemplative-reptile.jpg"*/}
                                {/*            alt="green iguana"*/}
                                {/*        />*/}
                                {/*    </Card>*/}
                                {/*</Grid2>*/}

                                <Grid2 xs={12}>
                                    <Typography sx={{ textAlign:"left"}}>
                                        Image Name: Lizardman
                                    </Typography>
                                </Grid2>
                                <Grid2 xs={12}>
                                    <UploadImages/>
                                </Grid2>
                                {/*<Grid2 xs={12}>*/}
                                {/*    <Button variant="outlined" sx={{ minWidth: 345, maxWidth:345}}>*/}
                                {/*        Upload Image*/}
                                {/*    </Button>*/}
                                {/*</Grid2>*/}

                            </Grid2>
                        </Grid2>
                        <Grid2 xs={8}>
                            <Container>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    fullWidth={true}
                                    defaultValue="Happy Lizard"
                                />
                            </Container>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function ImageUploadButton() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{height:150, width: 150}}>
                Upload Image
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}