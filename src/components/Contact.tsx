/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./Contact.css";

const Contact = () => {

    const [submitText, setSubmitText] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        e.target.suggestionButton.disabled = true;

        const suggestion = new Map<string, string>([["content", e.target.suggestion.value]]);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(suggestion))
        };
        console.log(JSON.stringify(Object.fromEntries(suggestion)));
        fetch('https://aijobhunt.xyz/api/sendsuggestion', requestOptions)
            .then(() => {
                setSubmitText("Send suggestion!")
                e.target.suggestionButton.disabled = false;
            });
    };

    return (
        <div>
            <h3>
                Email: aijobhuntwebsite@gmail.com
            </h3>
            <br></br>
            <h3>Send Suggestion: </h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="home-textarea"
                    name="suggestion"
                    maxLength={1000}
                    required
                />
                <button name="suggestionButton" id="common-button" type="submit">Send</button>
            </form>
            <h3>{submitText}</h3>
        </div>
    );
}

export default Contact;