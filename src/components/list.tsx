
const numbers = [1, 2, 3];


const  Listitems = () => {
    return(
        <ul>
            {numbers.map(num => 
                <li key={num}>{num}<button>Edit</button><button>Delete</button></li>
            )}
       </ul>
    
    )
}


export default Listitems;    