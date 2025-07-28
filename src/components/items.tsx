
const numbers = [1, 2, 3];


const Itemlist = () => {
    
    return(
        <ul>
            {numbers.map(num => 
            <li>{num}<button>Edit</button><button>Delete</button></li>
             )}
        </ul> 
        )     
   
}

export default Itemlist;    