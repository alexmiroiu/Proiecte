import React from "react";
import { Fragment, useState } from "react";

const ImageUpload = () => {
    const [newImage, setNewImage] = useState();
    const [displayedImage, setDisplayedImage] = useState();

    const getImage = event => {
        setNewImage(event.target.files[0]);
    }

    const uploadImage = async () => {
        const data = new FormData();
        data.append('file', newImage);
        data.append('upload_preset', 'axmimages');

        const request = await fetch('https://api.cloudinary.com/v1_1/axmwebsitesro/image/upload', {
            method: 'POST',
            body: data
        })

        const response = await request.json();
        console.log(response)
        setDisplayedImage(response.secure_url);
    }

    return (
        <Fragment>
        <input type='file'  onChange={getImage}/>
        <button onClick={uploadImage}>Upload Image</button>
        <img src={displayedImage} alt='upload'/>
        </Fragment>
    );
}

export default ImageUpload;