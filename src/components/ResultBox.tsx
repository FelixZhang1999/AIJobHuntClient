/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ResultBox.css";

interface resultProps {
    job: any
}

const ResultBox = (props: resultProps) => {
    return (
        <div className="result-component component">
            <br />
            <span className="result-key">Title: </span>
            <span className="result-text" id="result-title">{props.job["title"]}</span>
            <br /><br />
            <span className="result-key">Company: </span>
            <span className="result-text" id="result-company">{props.job["company"]}</span>
            <br /><br />
            <span className="result-key">Location: </span>
            <span className="result-text" id="result-location">{props.job["location"]}</span>
            <br /><br />
            <a className="result-key" id="result-url" href={props.job["url"]} target="_blank">Link</a>
            <br />
        </div>
    );
}

export default ResultBox;