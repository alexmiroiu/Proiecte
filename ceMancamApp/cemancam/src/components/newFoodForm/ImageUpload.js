import React from "react";
import { Fragment, useState } from "react";
import styles from './ImageUpload.module.css'

const ImageUpload = (props) => {
    const [newImage, setNewImage] = useState();
    const [imgUrl, setImgUrl] = useState("");

    const getImage = event => {
        setNewImage(event.target.files[0]);
    }

    const uploadImage = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('file', newImage);
        data.append('upload_preset', 'axmimages');

        const request = await fetch('https://api.cloudinary.com/v1_1/axmwebsitesro/image/upload', {
            method: 'POST',
            body: data
        })
        const response = await request.json();
        console.log(response);
        setImgUrl(response.secure_url)
        console.log(imgUrl)
        props.saveImgUrl(imgUrl);
    }

    return (
        <Fragment>
        <input type='file'  onChange={getImage}/>
        <button onClick={uploadImage}>Upload Image</button>
        {imgUrl && <img src={imgUrl} alt='upload'/>}
        </Fragment>
    );
}

export default ImageUpload;