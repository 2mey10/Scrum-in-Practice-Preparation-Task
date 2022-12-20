import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ImageUploadButton from "../components/ImageDialog/ImageDialog";
import * as React from "react";
import {ButtonBase, Card, CardMedia, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import useAxios from "../utils/useAxios";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ImageButton from "../components/ShowImages";


const baseURL = "http://127.0.0.1:8000/registration";
const all_image_data = `${baseURL}/all/`

const useRenderImages = () => {
    const {user, logoutUser} = useContext(AuthContext);
    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log("trying to fetch data")
            try {
                const response = await axios.get(all_image_data);
                setData(response.data.response.data);
            } catch {
                setData("Something went wrong");
            }
        };
        fetchData();
    }, []);

    console.log("all data:",data)
    console.log("")
    return <>
        <Grid2 container spacing={2} paddingLeft="10px" paddingTop="10px" paddingBottom="10px">
            {
                data.map((image_data)=>(
                <Grid2>
                    <ImageButton
                        img={"static/images/" + image_data[2]}
                        title={image_data[1]}
                        description={image_data[3]}
                        user={image_data[4]}
                    />
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