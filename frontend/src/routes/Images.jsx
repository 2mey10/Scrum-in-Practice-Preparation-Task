import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ImageUploadButton from "../components/ImageDialog";
import * as React from "react";
import {ButtonBase, Card, CardMedia, TextField} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {Link} from "react-router-dom";
import useAxios from "../utils/useAxios";
import {useEffect, useState} from "react";


// const images = ["uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe"]


const useRenderImages = () => {
    const [images_, setImages] = useState([]);
    const api = useAxios();
    useEffect(() => {
        const fetchData = async () => {
            console.log("trying to fetch data")
            try {
                const response = await api.get("/allImages/");
                setImages(response.data.response.image_paths);
            } catch {
                setImages("Something went wrong");
            }
        };
        fetchData();
    }, []);

    console.log("images_ array:",images_)
    return <>
        <Grid2 container spacing={2} paddingLeft="10px" paddingTop="10px" paddingBottom="10px">
            {images_.map((img)=>(
                <Grid2>
                    <ButtonBase component={Link} to={`/${img}`}>
                        <Card sx={{maxWidth:150, maxHeight:150}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image={img}
                                alt="green iguana"
                            />
                        </Card>
                    </ButtonBase>
                </Grid2>
            ))
            }
        </Grid2>

    </>


}
export default function Images() {
    return (
        <div style={{paddingTop:"50px"}}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box sx={{
                    borderRadius: "10px",
                    borderColor:"#4793e4",
                    border:"1px solid #4793e4",
                    // height:"600px",
                    width:"1200px",
                }} display="flex"
                     justifyContent="center"
                     alignItems="center">
                   <Box sx={{
                       // backgroundColor:"red",
                       // height:"550px",
                       width:"1000px",
                       alignItems:"center"}}>

                       {useRenderImages()}
                   </Box>
                </Box>
            </Box>


            <Grid2 container spacing={2}>
                <Grid2 xs={6} md={3}>
                </Grid2>
                <Grid2 xs={6} md={6}>
                    <Container>
                        <Box textAlign="center"
                             display="flex"
                             justifyContent="center"
                             alignItems="center"
                             sx={{
                                 height: "400px"
                             }}
                         >
                            <ImageUploadButton/>
                        </Box>



                    </Container>
                </Grid2>
                <Grid2 xs={6} md={3}>
                </Grid2>
            </Grid2>
        </div>
    );
}