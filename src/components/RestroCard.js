const RestroCard = (props) => {
    const {resData} = props;
    
    return (
        <div className="m-4 p-4 w-[200px] cursor-pointer" style={{backgroundColor : "#f0f0f0"}}>
        <img alt="res-logo" className="w-full h-40 object-cover rounded-md mb-2"
            src={resData.image} /> 

        <h3 className="font-bold py-3">{resData.name}</h3>
        <h4>{resData.cuisines}</h4>
        <h5>{resData.avgRating}</h5>
        <h5>{resData.costForTwo}</h5>
        </div>
    )
};

export default RestroCard ;