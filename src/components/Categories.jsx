import {memo, useState} from "react";

const Categories = memo(({items, onClickItem}) => {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => setActiveItem(null)}
                    className={activeItem === null ? 'active' : ''}>Все
                </li>
                { items.map((name, index) =>
                    <li
                        onClick={() =>onSelectItem(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={`${name}_${index}`}>{name}
                    </li>)
                }
            </ul>
        </div>
    );
});

export default Categories;