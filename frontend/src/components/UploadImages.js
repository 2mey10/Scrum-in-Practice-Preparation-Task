import {useEffect, useState} from "react";
import {Card, CardMedia} from "@mui/material";


export default function UploadImages(){
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURls] = useState(["static/images/contemplative-reptile.jpg"]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageURls(newImageUrls);
    },[images]);
    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
                <Card sx={{maxWidth:345}}>
                    <CardMedia
                        component="img"
                        height="345"
                        image={imageURLs[0]}
                        alt="green iguana"
                    />
                </Card>
            <input type="file" accept="image/*" onChange={onImageChange} style={{paddingTop:20}}/>
        </>
    );
}