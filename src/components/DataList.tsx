import { useState } from "react";
import "./DataList.css";

interface listProps {
    title: string,
    component: (arg0: ComponentProps) => JSX.Element,
}

const DataList = (props : listProps) => {
    const component = props.component;
    const title = props.title

    const [listCount, setlistCount] = useState(0);
    
    const handleDelete = (id: number) => {
        setItemList(oldList => oldList.filter(item => oldList.length <= 1 || item.key != id));
    }

    const handleAdd = () => {
        const index = listCount + 1;
        setItemList(oldList => [...oldList,  component({index, handleDelete})]);
        setlistCount(index);
    }

    const index = listCount;
    const [itemList, setItemList] = useState([component({index, handleDelete})]);

    return (
        <div className="data-list">
            <h3>{title}</h3>
            {itemList.map((component) => (
                component
            ))}
            <button type="button" onClick={() => handleAdd()}>Add</button>
        </div>
    );
}

export default DataList;