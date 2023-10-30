import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizzaById() {
      try {
        const { data } = await axios.get('https://6535501cc620ba9358ec5fd1.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Get some error. Redirect to main page.');
        navigate('/');
      }
    }

    fetchPizzaById();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
}
