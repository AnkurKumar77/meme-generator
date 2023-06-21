import "./Meme.css"
import memesData from "../memesData"
import { useState } from "react"
export default function Meme () {
    
    
    const [memeImage,setMemeImage] = useState("")
    

    function onClickHandler() {

        
        const randomMemeIndex = Math.floor(Math.random()*(memesData.data.memes.length + 1) )
        const newImageUrl = memesData.data.memes[randomMemeIndex].url
        setMemeImage(newImageUrl)

    }
    return (
        <main className= 'main'>
            <div className="form">
                <input 
                    className = "form--input"
                    type="text"
                    placeholder="Phrase 1">   
                </input>
                <input    
                    className = "form--input"
                    type="text"
                    placeholder="Phrase 2">
                </input>
                <button className="form--button" onClick={onClickHandler}>Get me a new meme !</button>
                <img src={memeImage} className="meme--image"/>
            </div>
        </main>
    )
}