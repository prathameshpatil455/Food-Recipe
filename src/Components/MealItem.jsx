import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MealItem=({data})=>{
    console.log(data);
    let navigate = useNavigate();
    return(
        <>  
            {
                // eslint-disable-next-line react/prop-types
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                        <h3>{item.strMeal}</h3>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;