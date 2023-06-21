import "./Meme.css"
export default function Meme () {
    return (
        <main className= 'main'>
            <form className="form">
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
                <button className="form--button">Get me a new meme !</button>
            </form>
        </main>
    )
}