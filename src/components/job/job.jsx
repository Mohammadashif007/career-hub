import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const {
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
        id
    } = job;
    return (
        <div className="border-2 p-3">
            <img src={logo} alt="" />
            <p className="text-[20px] font-bold">{job_title}</p>
            <p>{company_name}</p>
            <div>
                <span>{remote_or_onsite}</span>
                <span>{job_type}</span>
            </div>
            <div>
                <span>{location}</span>
                <span>{salary}</span>
            </div>
            <Link to={`/details/${id}`}>
                <button className="px-10 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff] text-[18px] rounded-xl">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default Job;
