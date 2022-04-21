import {useCallback, useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import Loader from "../components/PizzaBlock/Loader";

import {Categories, PizzaBlock, SortPopup} from "../components";
import {setCategory, setSortBy} from '../redux/action/filters'
import {fetchPizzas} from "../redux/action/pizzas";


const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category]);

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback(type => {
        dispatch(setSortBy(type));
    }, []);

    const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortItems = [
        {name: 'популярности', type: 'popular', order: 'desc'},
        {name: 'цене', type: 'price', order: 'desc'},
        {name: 'алфавиту', type: 'name', order: 'asc'},
    ];

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((obj) => <PizzaBlock key={obj.id} isLoader={true} {...obj}/>)
                : Array(12).fill(0).map((_, index) => <Loader key={index}/>)}
            </div>
        </div>
    );
};

export default Home;