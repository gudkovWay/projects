import React from 'react';
import qs from 'qs';

import { useSelector } from 'react-redux';
import { selectFilter, setCategoryId, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizza } from '../redux/slices/pizzasSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';

import Categories from '../components/Categories';
import Sort, { sortList } from '../components/sort';
import PizzaBlock from '../components/Pizzablock';
import Skeleton from '../components/Pizzablock/Skeleton';
import Pagination from '../Pagination';

export default function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { categoryId, sort } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);
  const sortType = sort.sortProperty;

  const [currentPage, setCurrentPage] = React.useState(1);

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      if (sort) {
        dispatch(
          setFilters({
            ...params,
            // @ts-expect-error
            sort,
          }),
        );
      }
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, currentPage]);

  const getPizzas = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        currentPage: String(currentPage),
      }),
    );
  };

  const pizzas = items.map((obj: any) => (
      <PizzaBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories onClickCategory={onChangeCategory} value={categoryId} />
          <Sort />
        </div>
        <h2 className="content__title">Все питцы🍕</h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>ERROR😞</h2>
            <p>
              Вы напоролись на ошибку. Сожалеем, но нам не удалось отдать вам каталог наших питс.
              Попробуйте позже.
            </p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )}

        <Pagination onChangePage={(number: number) => setCurrentPage(number)} />
      </div>
    </>
  );
}
