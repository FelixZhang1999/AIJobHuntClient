/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import DataList from "./DataList";
import EduComponent from "./EduComponent";
import ExpComponent from "./ExpComponent";
import Parameters from "./Parameters";
import ResultBox from "./ResultBox";
import "./Component.css";
import "./Home.css";

const Home = () => {

    const [nextStart, setNextStart] = useState(0);
    const [lastJobTitle, setLastJobTitle] = useState("");
    const [lastLocation, setLastLocation] = useState("");
    const [buttonText, setButtonText] = useState("Search");
    const [errorMessage, setErrorMessage] = useState("");
    const [job, setJob] = useState({
            "title": "",
            "company": "",
            "location": "",
            "url": ""
        });
    const [jobs, setJobs] = useState([]);

    const fillJobData = (newJob: any) => {
        if (newJob == null){
            newJob = jobs[0];
            setJobs(oldJobs => {
                oldJobs.shift();
                return oldJobs;
            });
        }
        setJob({
            "title": newJob["title"],
            "company": newJob["company"],
            "location": newJob["location"],
            "url": newJob["url"]
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setButtonText("Please wait..");
        e.target.searchButton.disabled = true;
        setErrorMessage("");

        const resumeData = new Map<string, any>([
            ["desiredTitle", e.target.desiredTitle.value],
            ["location", e.target.location.value],
            ["website", e.target.website.value],
            ["nextStart", 0],
            ["education", []],
            ["experience", []]
        ]);
        if (lastJobTitle === e.target.desiredTitle.value && lastLocation === e.target.location.value) {
            if (jobs.length > 0) {
                setTimeout(() => {
                    fillJobData(null);
                    setButtonText("Search");
                    e.target.searchButton.disabled = false;
                }, 1000);
                return;
            }
            resumeData.set("nextStart", nextStart);
        } else {
            setNextStart(0);
        }
        setLastJobTitle(e.target.desiredTitle.value);
        setLastLocation(e.target.location.value);
        if (e.target.school instanceof RadioNodeList) {
            e.target.school.forEach((_item: any, i: number) =>
                resumeData.get("education").push({
                    "school": e.target.school[i].value,
                    "major": e.target.major[i].value,
                    "graduated": e.target.graduated[i].checked,
                    "degree": e.target.degree[i].value
                }));
        } else {
            resumeData.set("education", [{
                "school": e.target.school.value,
                "major": e.target.major.value,
                "graduated": e.target.graduated.checked,
                "degree": e.target.degree.value
            }]);
        }
        if (e.target.company instanceof RadioNodeList) {
            e.target.company.forEach((_item: any, i: number) =>
            resumeData.get("experience").push({
                "title": e.target.title[i].value,
                "duration": e.target.duration[i].value,
                "description": e.target.description[i].value,
                "company": e.target.company[i].value
            }));
        } else {
            resumeData.set("experience", [{
                "title": e.target.title.value,
                "duration": e.target.duration.value,
                "description": e.target.description.value,
                "company": e.target.company.value
            }]);
        }
        console.log(resumeData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(resumeData))
        };
        fetch('https://aijobhunt.xyz/api/submit', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data["error"] == true){
                    setErrorMessage(data["message"]);
                } else {
                    fillJobData(data["jobs"][0]);
                    data["jobs"].shift();
                    setJobs(data["jobs"]);
                }
                setNextStart(data["nextStart"]);
                setButtonText("Search");
                e.target.searchButton.disabled = false;
            });
    }
    return (
        <div className="home">
            <h2>Enter your resume, we will find a suitable job posting for you.</h2>
            <form onSubmit={handleSubmit}>
                <DataList title="Education" component={EduComponent} />
                <DataList title="Experience" component={ExpComponent} />
                <Parameters />
                <button name="searchButton" id="common-button" type="submit">{buttonText}</button>
            </form>
            <span className="home-error" id="error-message">{errorMessage}</span>
            <ResultBox job={job}/>
        </div>
    );
}

export default Home;