import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ImageUploadButton from "../components/ImageDialog";
import {Link} from "react-router-dom";
import * as React from "react";
import {ButtonBase, Card, CardMedia} from "@mui/material";


const images = ["uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe","uwu","owo","ewe"]
const render_Images = () => {
    return <>
        <Grid2 container spacing={2} paddingLeft="10px" paddingTop="10px" paddingBottom="10px">
            {images.map((img)=>(
                <Grid2>
                    <ButtonBase onClick={event => { }}>
                        <Card sx={{maxWidth:150, maxHeight:150}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="static/images/contemplative-reptile.jpg"
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

                       {render_Images()}
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