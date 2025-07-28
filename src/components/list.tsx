import Item from "./Item"


const numbers = ['1', '2', '3'];


const  List = () => {
    return(
        <ul>
             {numbers.map(num => 
                <Item itemName={num}/>
                )}
        </ul>
             
     
    
    )
}


export default List;    