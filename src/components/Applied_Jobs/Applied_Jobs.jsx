import { Link, useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../utilities/localStorage";

const Applied_Jobs = () => {
    const jobsData = useLoaderData();
    const application = getLocalStorage("application");
    console.log(application);
    const search = jobsData.filter((x) => application.includes(x.id));
   

    return (
        <div className="w-4/5 mx-auto">
            {search.map((x) => (
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
