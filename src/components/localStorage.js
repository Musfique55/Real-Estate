import { toast } from "react-toastify";

const getItem =  () => {
    const foundItem = localStorage.getItem('estate');
    if(foundItem){
       return JSON.parse(foundItem);
    }
    return [];
}

const setItem = (id) => {
    const foundItem = getItem();
    const exist = foundItem.find(itemid => itemid == id);
    console.log(exist);
    if(!exist){
        foundItem.push(id);
        localStorage.setItem('estate',JSON.stringify(foundItem));
        return toast.success('Saved Item Successfully');
    }
    else{
        return toast.error('Already added this item');
    }
}

export {getItem,setItem}