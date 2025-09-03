const RestroCard = (props) => {
    const {resData} = props;
    
    return (
        <div className="res-card">
        <img alt="res-logo" className="res-logo"
            src={resData.image} /> 

        <h3>{resData.name}</h3>
        <h4>{resData.cuisines}</h4>
        <h5>{resData.avgRating}</h5>
        <h5>{resData.costForTwo}</h5>
        </div>
    )
};

export default RestroCard ;