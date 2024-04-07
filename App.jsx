import React from "react";
import { useState } from "react"
import { Carousel } from "antd";
import { Input, InputNumber, Button } from "antd";

export default function App() {

    const carouselStyles = {
    "width": "640px", 
    "margin": "auto",
    "maxHeight" : "352"
    };

    // Inputs
    const [searchTerm, setSearchTerm] = useState("");
    const [numberOfResults, setNumberOfResults] = useState(0);

    // for the data
    const [tracks, setTracks] = useState([]);
    
    function handleSearchTerm(term){
        setSearchTerm(term.target.value)
    }
    function handleNumberOfResults(num){
        setNumberOfResults(num)
    }


    async function handleSubmit(){
        const url = `https://www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track&limit=${numberOfResults}`
        const request = await fetch(url);
        const data = await request.json();
        setTracks(data);
    }


    function tracksJSX(track){
        return (
            <div id={track.id} style={{ width: "100%", height:"352"}}>
                <img src={track.album.image_url} style={{ width: "100%", height: "100%"}}/>
                <iframe style= {{padding: "0px", margin: "0px" }}
                    key={track.id}
                    src={track.preview_url}
                    width="100%"
                    height="30px"
                    frameBorder="0"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    autoPlay={false}
                    >
                </iframe>
            </div>
            );
    }
            
    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>            
             
            <Input className="term" size="large" placeholder="Search Term" onChange={handleSearchTerm}/>
            <InputNumber className="count" size="large" placeholder="Number of Results" onChange={handleNumberOfResults}/>

            <Button className="submit" type="primary" size="large" onClick={handleSubmit}>Search</Button>

            <main> 
           <div style={carouselStyles}>
                    <Carousel dotPosition="top">
                        {tracks.map((track, index) => (
                            <div key={index}>{tracksJSX(track)}</div>
                        ))}
                    </Carousel>
                </div>
            </main>
        </>
    );
}
   

