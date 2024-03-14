

const Section_Title = ({title, subTitle}) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default Section_Title;