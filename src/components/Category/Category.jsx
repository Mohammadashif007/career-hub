import Section_Title from "../Section_Title/Section_Title";
import category1 from "../../assets/icons/accounts.png";
import category2 from "../../assets/icons/marketing.png";
import category3 from "../../assets/icons/chip.png";
import category4 from "../../assets/icons/creative.png";


const Category = () => {
    return (
        <div className="w-4/5 mx-auto my-10">
            <Section_Title
                title={"Job Category List"}
                subTitle={
                    "Explore thousands of job opportunities with all the information you need. Its your future"
                }
            ></Section_Title>
            <div className="flex justify-center items-center gap-5">
                <div className="border-2 p-3 bg-cyan-100 rounded mt-5">
                    <img src={category1} alt="" />
                    <p className="text-[16px] font-bold py-1">Account & Finance</p>
                    <p>300 Jobs Available</p>
                </div>
                <div className="border-2 p-3 bg-cyan-100 rounded mt-5">
                    <img src={category2} alt="" />
                    <p className="text-[16px] font-bold py-1">Marketing & Sales</p>
                    <p>300 Jobs Available</p>
                </div>
                <div className="border-2 p-3 bg-cyan-100 rounded mt-5">
                    <img src={category3} alt="" />
                    <p className="text-[16px] font-bold py-1">Engineering Job</p>
                    <p>300 Jobs Available</p>
                </div>
                <div className="border-2 p-3 bg-cyan-100 rounded mt-5">
                    <img src={category4} alt="" />
                    <p className="text-[16px] font-bold py-1">Creative Design</p>
                    <p>Creative Design</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
