import * as React from 'react';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Alert, ButtonBase, Card, CardMedia, TextField} from "@mui/material";
import useAxios from "../utils/useAxios";

function SimpleImage(props) {
    const { onClose, selectedValue, open, img , title, description,user} = props;
    const handleClose = () => {
        onClose(selectedValue);
    };
    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"lg"}>
            <DialogTitle >[{user}] </DialogTitle>
            <Container>
                <Box sx={{ height:"500px"}}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={4}>
                            <Grid2 container spacing={2}>
                                <Grid2 xs={12} textAlign="center" alignItems="center">
                                    <Box sx={{
                                        border:"1px solid #4793e4",
                                        width:345
                                    }}>
                                        <Typography variant="h4" gutterBottom paddingTop="10px">
                                            {title}
                                        </Typography>
                                    </Box>

                                </Grid2>
                                <Grid2 xs={12}>
                                    <Card sx={{maxWidth:345}}>
                                            <CardMedia
                                                component="img"
                                                height="345"
                                                image={img}
                                                alt="green iguana"
                                            />
                                        </Card>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 xs={8}>
                            <Container>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={17}
                                    fullWidth={true}
                                    defaultValue={description}
                                />

                            </Container>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </Dialog>
    );
}

SimpleImage.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function ImageButton(props) {
    const {img, title, description,user} = props
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
            <ButtonBase onClick={handleClickOpen}>
                <Card sx={{minWidth:150,maxWidth:150,minHeight:150, maxHeight:150}}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={img}
                        alt="green iguana"
                    />
                </Card>
            </ButtonBase>
            <SimpleImage
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                img={img}
                title={title}
                description={description}
                user={user}
            />
        </div>
    );
}