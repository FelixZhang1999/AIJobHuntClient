import "./Parameters.css";

const Parameters = () => {
    return (
        <>
            <div className="home-component">
                <span className="component-text">Desired Job Title*:</span>
                <input
                    type="text"
                    placeholder="Software Engineer"
                    className="component-input"
                    name="desiredTitle"
                    maxLength={40}
                    required
                />
            </div>
            <div className="home-component">
                <span className="component-text">Location:</span>
                <input
                    type="text"
                    placeholder="California"
                    className="component-input"
                    name="location"
                    maxLength={40}
                />
            </div>
            <div className="home-component">
                <span className="component-text">Website to search:</span>
                <select className="component-select" name="website" defaultValue="Linkedin">
                    <option value="Linkedin">Linkedin</option>
                </select>
            </div>
        </>
    );
}

export default Parameters;