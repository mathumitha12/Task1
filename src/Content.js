import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Content = () => {
    const [selectedimage, setSelectedImage] = useState('null');
    const images = [
        {
            name: 'flower',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24Wlg8DvmDpim-27R03QMOgEvdtBGP8SzUw&usqp=CAU',
        },
        {
            name: 'animal',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAHRqN4K5wWwEsA2VliPLjPf-4G72RiCA6g&usqp=CAU',
        },
    ];
    const handleImageChange = (event) => {
        const selectedImageUrl = event.target.value;
        setSelectedImage(selectedImageUrl);
    }

    const download = (imageUrl, fileName) => {
    //     const originalImage = "https://www.freepik.com/free-vector/realistic-set-colorful-powder-clouds-explosions-isolated-transparent-background_3685328.htm#query=png&position=6&from_view=keyword&track=sph";
    // const image = await fetch(originalImage);

    // // Split image name
    // const nameSplit = originalImage.split("/");
    // const  duplicateName = nameSplit.pop();

    // const imageBlog = await image.blob()
    // const imageURL = URL.createObjectURL(imageBlog)
    // const link = document.createElement('a')
    // link.href = imageURL;
    // link.download = "" + duplicateName + "";
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
    const anchor = document.createElement('a');
  
    // Set the href to the image URL
    anchor.href =selectedimage;
  
    // Set the download attribute to specify the filename
    anchor.download = fileName;
  
    // Programmatically trigger a click event on the anchor
    anchor.click();
    }
    return (
        <div>
            {/* <Paper elevation={3} sx={{ width: '1000px', height: '600px', ml: 20, mt: 5 }}>
                <select onChange={ handleImageChange}>
                    <option value={""}>Select an image</option>
                    {images.map((image) => (
                        <option key={image.name} value={image.imageUrl}>{image.name}</option>
                    ))}
                </select>
                {selectedimage && (
                    <div>
                        <img src={selectedimage} alt='selected'></img>
                    </div>
                )}
            </Paper> */}
            <Paper elevation={3} sx={{ width: '1000px', height: '600px', ml: 20, mt: 5 }}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ width: '200px', ml: 7, mt: 6 }}>
                        <InputLabel id="demo-simple-select-label">select an Image</InputLabel>
                        <Select
                            placeholder='select an image'
                            labelId="select an image"
                            id="select an iamge"
                            value={selectedimage}
                            label="Select an image"
                            onChange={handleImageChange}
                        >
                            <MenuItem value={''}>Select an image</MenuItem>
                            {images.map((image) => (
                                <MenuItem key={image.name} value={image.imageUrl}>{image.name}</MenuItem>
                            ))}
                        </Select>
                        {selectedimage && (
                            <div>
                                <img src={selectedimage} alt='selected'></img>
                                <button onClick={download}>Download!!</button>
                            </div>
                        )}
                    </FormControl>
                </Box>
            </Paper>
        </div>
    )
}

export default Content