

// eslint-disable-next-line react/prop-types
const RecipeIndex = ({alphaIndex}) => {
   const alpha = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   return (
        <>
            {   
                alpha.map(item => {
                    return(
                    <div className="numBox" key={item} onClick={()=>alphaIndex(item)}>
                        <h3>{item}</h3>
                    </div>)
                })
            }
        </>
    )
}
export default RecipeIndex;