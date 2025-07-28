

interface ItemProps {
    itemName:string;
}


function Item(itemProps: ItemProps) {
    return(     
        <li>
            {itemProps.itemName}
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}


export default Item;