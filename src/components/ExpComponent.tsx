function ExpComponent(props: ComponentProps) {
    const id = props.index;
    return (
        <div className="component" key={id}>
            <a href="#" className="close" onClick={() => props.handleDelete(id)}></a>
            <div className="inner-component">
                <span className="component-text">Job Title:</span>
                <input
                    type="text"
                    placeholder="Software Engineer"
                    className="component-input"
                    name="title"
                    maxLength={40}
                />
            </div>
            <div className="inner-component">
                <span className="component-text">Company:</span>
                <input
                    type="text"
                    placeholder="Google"
                    className="component-input"
                    name="company"
                    maxLength={40}
                />
            </div>
            <div className="inner-component">
                <span className="component-text">How Long:</span>
                <input
                    type="text"
                    placeholder="2 years"
                    className="component-input"
                    name="duration"
                    maxLength={20}
                />
            </div>
            <div className="inner-component">
                <span className="component-text">
                    What did you worked on:
                </span>
                <br />
                <textarea
                    placeholder="Java, Spring Boot"
                    className="component-textarea"
                    name="description"
                    maxLength={100}
                ></textarea>
            </div>
        </div>
    );
}

export default ExpComponent;