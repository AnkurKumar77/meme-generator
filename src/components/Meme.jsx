import "./Meme.css"
import memesData from "../memesData"
import { useState } from "react"
export default function Meme () {
    
    
    const [memeImage,setMemeImage] = useState({
        topText:"",
        bottomText:"",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    function handleChange(event)
    {
        const {name,type,value} = event.target;
        setMemeImage(prevMemeImageData=>({
            ...prevMemeImageData,
            [name]:value

        }))
    }
    function submitHandler(event) {
        console.log("called")
        event.preventDefault();
        const randomMemeIndex = Math.floor(Math.random()*(memesData.data.memes.length + 1) );
        const newImageUrl = memesData.data.memes[randomMemeIndex].url;
        
        setMemeImage(prevMemeImageData=>({
            ...prevMemeImageData,
            imageUrl:newImageUrl

        }))

    }
    return (
        <main className= 'main'>
            <form className="form" onSubmit={submitHandler}>
                <input 
                    className = "form--input"
                    type="text"
                    placeholder="Phrase 1"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                    >   
                </input>
                <input    
                    className = "form--input"
                    type="text"
                    placeholder="Phrase 2"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                    >
                </input>
                <button className="form--button" >Get me a new meme !</button>

            </form>
            <div className="meme-zone">
                <img src={memeImage.imageUrl} className="meme--image"/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}