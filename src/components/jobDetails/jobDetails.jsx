import { useLoaderData, useParams } from "react-router-dom";
import { saveLocalStorage } from "../../utilities/localStorage";

const JobDetails = () => {
    const data = useLoaderData();
    const currentId = useParams();
    const search = data.find((x) => x.id == currentId.id);

    const {
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        job_title,
        contact_information,
        id
    } = search;

    const handleApply = id => {
        saveLocalStorage(id)
    }

    return (
        <div>
            <h1>Job Details</h1>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="col-span-2">
                    <p>
                        <span className="font-bold">Description : </span>{" "}
                        {job_description}
                    </p>
                    <p>
                        <span className="font-bold">Job Responsibility : </span>
                        {job_responsibility}
                    </p>
                    <p>
                        <span className="font-bold">
                            Education Requirement :{" "}
                        </span>
                        {educational_requirements}
                    </p>
                    <p>
                        <span className="font-bold">Experience : </span>
                        {experiences}
                    </p>
                </div>
                <div>
                    <p>Job Details</p>
                    <p>Salary: {salary}</p>
                    <p>Job Title: {job_title}</p>
                    <p>Contact Info</p>
                    <p>Phone: {contact_information.phone}</p>
                    <p>Email: {contact_information.email}</p>
                    <p>Email: {contact_information.address}</p>
                    <button onClick={()=>handleApply(id)} className="border bg-cyan-600 px-3 py-1">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
