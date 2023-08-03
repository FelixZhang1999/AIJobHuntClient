function EduComponent(props: ComponentProps) {
    const id = props.index;
    return (
        <div className="component" key={id}>
            <a href="#" className="close" onClick={() => props.handleDelete(id)}></a>
            <div className="inner-component">
                <span className="component-text">School:</span>
                <input
                    type="text"
                    placeholder="Stanford"
                    className="component-input"
                    name="school"
                    maxLength={40}
                />
            </div>
            <div className="inner-component">
                <span className="component-text">Major:</span>
                <input
                    type="text"
                    placeholder="Computer Science"
                    className="component-input"
                    name="major"
                    maxLength={40}
                />
            </div>
            <div className="inner-component">
                <span className="component-text">Degree:</span>
                <select className="component-select"
                        name="degree"
                        defaultValue="Bachelor">
                    <option value="High School">High School</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Phd">Phd</option>
                    <option value="Master">Master</option>
                </select>
            </div>
            <div className="inner-component">
                <span className="component-text">Graduted:</span>
                <input
                    type="checkbox"
                    className="component-checkbox"
                    name="graduated"
                    defaultChecked
                />
            </div>
        </div>
    );
}

export default EduComponent;