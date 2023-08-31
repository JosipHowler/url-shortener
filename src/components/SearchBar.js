import React, {useState, useEffect} from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap";
import axios from "axios";

function SearchBar(){

const [longUrl, setLongUrl] = useState("");
const [shortUrl, setShortUrl] = useState("");

const accessToken = "Your access token"

const handleInputChange = (e) => {
    setLongUrl(e.target.value);
};

const handleButtonClick = async(e) => {
    e.preventDefault();

    try{
        const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
            long_url: longUrl
        },
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }
    );

    setShortUrl(response.data.id);
    }catch(error){
        console.log(error)
    }
};

useEffect(() => {
    console.log("Updated shortUrl:", shortUrl);
}, [shortUrl]);

return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4">Your short URL is: {shortUrl}</h1>
        <div className="mb-4 w-50">
            <InputGroup>
                <FormControl className="form-control-lg" placeholder="Enter you URL" onChange={handleInputChange}/>
            </InputGroup>
        </div>
        <Button className="btn btn-lg w-25" variant="primary" onClick={handleButtonClick}>Convert</Button>
    </div>
);
} 

export default SearchBar;