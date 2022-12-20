import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ImageUploadButton from "../components/ImageDialog";
import * as React from "react";
import {ButtonBase, Card, CardMedia, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import useAxios from "../utils/useAxios";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
const baseURL = "http://127.0.0.1:8000/registration";
const image_api = `${baseURL}/allImages/`


const useRenderImages = () => {
    const {user, logoutUser} = useContext(AuthContext);
    const [images_, setImages] = useState([]);
    const api = useAxios();
    useEffect(() => {
        const fetchData = async () => {
            console.log("trying to fetch data")
            try {
                // const response = await api.get("/allImages/");
                const response = await axios.get(image_api);
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
                        <Card sx={{minWidth:150,maxWidth:150,minHeight:150, maxHeight:150}}>
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
            {user ?
                (
            <>
                <Grid2>
                    <ImageUploadButton/>
                </Grid2>
            </>
                ):
                (
            <>
            </>
                )
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
        </div>
    );
}