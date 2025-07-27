
interface items{
    item1: number;
    item2: number;
    item3: number; 
}

const Itemlist = (item:items) => {
    return(
        <ul>
            <li>{item.item1}<button>Edit</button><button>Delete</button></li>
            <li>{item.item2}<button>Edit</button><button>Delete</button></li>
            <li>{item.item3}<button>Edit</button><button>Delete</button></li>
    </ul>      
    )
}

export default Itemlist;