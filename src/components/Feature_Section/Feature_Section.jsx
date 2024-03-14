import { useState } from "react";
import Section_Title from "../Section_Title/Section_Title";
import { useEffect } from "react";
import Job from "../job/job";
import { Link } from "react-router-dom";

const Feature_Section = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    const url = "jobs.json";
    const loadJobsData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setJobs(data);
    };

    useEffect(() => {
        loadJobsData();
    }, []);

    return (
        <div className="w-4/5 mx-auto my-10">
            <Section_Title
                title={"Featured Jobs"}
                subTitle={
                    "Explore thousands of job opportunities with all the information you need. Its your future"
                }
            ></Section_Title>

            <div className="grid lg: grid-cols-2 gap-3 mt-10">
                {jobs.slice(0, dataLength).map((job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
            <div className={dataLength === jobs.length ? "hidden" : 'flex justify-center'}>
                <button onClick={()=> setDataLength(jobs.length)} className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] text-[18px] rounded-xl text-center mt-10">
                    See All
                </button>
            </div>
        </div>
    );
};

export default Feature_Section;
