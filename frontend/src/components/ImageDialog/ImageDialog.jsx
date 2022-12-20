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
import {Alert, Card, CardMedia, TextField} from "@mui/material";
import {createImageEntry} from "./ImageUploadAPI";
import useAxios from "../../utils/useAxios";

function SimpleDialog(props) {

    const dummyImage = "static/site/inputimage.png"
    const { onClose, selectedValue, open } = props;
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURls] = useState([dummyImage]);
    const api = useAxios();

    const [data, setData] = useState({
        title:"",
        description:"",
        image_url:"",
        image_base64:"",
    });
    const [errors,setErrors] = useState({
        title:true,
        description:true,
        image_url:true,
    })

    const handleChange = ({ currentTarget: input }) => {
        console.log("handling change")
        let newData = { ...data };
        let newErrors = {... errors};
        if (input.value.trim()===""){
            newErrors[input.name] = true;
        }
        if (input.value!==""){
            newErrors[input.name] = false;
        }
        setErrors(newErrors);
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleImageChange = (e) => {

        let newData = { ...data };
        const file = e.target.files[0]
        newData["image_url"] = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            newData["image_base64"] = reader.result
                .replace('data:', '')
                .replace(/^.+,/, '');
        };
        let newErrors = {... errors};
        newErrors["image_url"] = false;
        setErrors(newErrors);
        setImages([...e.target.files]); // this shows an image preview
        setData(newData);
    };


    const handleClose = () => {
        onClose(selectedValue);
        setImageURls([dummyImage]);
        setData({title:"",
            description:"",
            image_url:"",
            image_base64:"",})
        setErrors({
            title:true,
            description:true,
            image_url:true,
        })
    };

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageURls(newImageUrls);
    },[images]);

    const doSubmit = async (e) => {
        if (data.title===""){
            return
        }
        if (data.description===""){
            return
        }
        if (data.image_url===""){
            return
        }
        e.preventDefault();
        const response = await createImageEntry(api,data);
        if (response.status === 400) {
            setErrors(response.data);
        }
        console.log(`submitting data xd ${JSON.stringify(data)}`)
    };


    return (
            <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"lg"}>
                <DialogTitle >Upload an Image</DialogTitle>
                <Container>
                    <Box sx={{ height:"560px"}}>
                        <Grid2 container spacing={2}>
                            <Grid2 xs={4}>
                                <Grid2 container spacing={2}>
                                    <Grid2 xs={12}>
                                        {errors.title?(<TextField
                                            id="outlined-multiline-static"
                                            label="Image Name"
                                            fullWidth={true}
                                            defaultValue=""
                                            sx={{maxWidth:345}}
                                            name="title"
                                            error
                                            helperText="Text must not be empty!"
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        />):(<TextField
                                            id="outlined-multiline-static"
                                            label="Image Name"
                                            fullWidth={true}
                                            defaultValue=""
                                            sx={{maxWidth:345}}
                                            name="title"
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                        />)}
                                    </Grid2>
                                    <Grid2 xs={12}>
                                        {errors.image_url?
                                            (<Card sx={{maxWidth:345, border: "1px solid red"}}>
                                                <CardMedia
                                                    component="img"
                                                    height="345"
                                                    image={imageURLs[0]}
                                                    alt="green iguana"
                                                />
                                            </Card>)
                                            :
                                            (<Card sx={{maxWidth:345}}>
                                                <CardMedia
                                                    component="img"
                                                    height="345"
                                                    image={imageURLs[0]}
                                                    alt="green iguana"
                                                />
                                            </Card>)}

                                        <input type="file"
                                               accept="image/*"
                                               onChange={(e) => {handleImageChange(e)}}
                                               style={{paddingTop:20}}
                                        />
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                            <Grid2 xs={8}>
                                <Container>
                                    {errors.description?(<TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={17}
                                        fullWidth={true}
                                        defaultValue=""
                                        name="description"
                                        error
                                        helperText="Text must not be empty!"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />):(<TextField
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={17}
                                        fullWidth={true}
                                        defaultValue=""
                                        name="description"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    />)}

                                </Container>
                            </Grid2>
                            <Grid2 xs={12}>
                                <Button variant="outlined" fullWidth={true} sx={{paddingY:"10"}} onClick={doSubmit}>
                                    Upload Image
                                </Button>
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