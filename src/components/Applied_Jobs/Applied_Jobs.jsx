import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/ls";
import { useEffect, useState } from "react";

const Applied_Jobs = () => {
    const jobsData = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication("application");
        if (jobsData.length > 0) {
            const jobApplied = jobsData.filter((job) =>
                storedJobIds.includes(job.id)
            );
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, [jobsData]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    // console.log(application);
    // const search = jobsData.filter((x) => application.includes(x.id));

    return (
        <div className="w-4/5 mx-auto">
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}>
                        <a>All</a>
                    </li>
                    <li onClick={() => handleJobsFilter('remote')}>
                        <a>Remote</a>
                    </li>
                    <li onClick={() => handleJobsFilter('onsite')}>
                        <a>On Site</a>
                    </li>
                </ul>
            </details>
            {displayJobs.map((x) => (
                <div
                    key={x.id}
                    className="flex items-center justify-between border-2 gap-4 p-5 my-3"
                >
                    <div className="flex gap-3 items-center">
                        <img src={x.logo} alt="" />
                        <div>
                            <p className="text-[20px] font-bold">
                                {x.job_title}
                            </p>
                            <p>{x.company_name}</p>
                            <div>
                                <button>{x.remote_or_onsite}</button>
                                <button>{x.job_type}</button>
                            </div>
                            <div>
                                <p>{x.contact_information.address}</p>
                                <p>{x.salary}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/details/${x.id}`}>
                        <button className="bg-cyan-600 px-5 py-2">
                            View Details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Applied_Jobs;
