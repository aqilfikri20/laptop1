import React, { useState } from "react";
import axios from 'axios';

function UploadFile({ onUploadComplete }) {
    const preset_key = 'upload';
    const cloud_name = 'aqilfikri20';
    const [image, setImage] = useState(null);

    function handleFile(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset_key);

        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
            .then(res => {
                console.log('Upload Response:', res.data); 
                setImage(res.data.secure_url);
                onUploadComplete(res.data.secure_url); // Memanggil fungsi callback untuk meneruskan URL gambar
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="upload">
            <input type="file" name="image" onChange={handleFile} />
            {image && <img src={image} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />}
        </div>
    );
}

export default UploadFile;
