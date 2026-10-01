import { useNavigate } from "react-router-dom";

function ShoppingCart({ cart, setCart }) {
  const navigate = useNavigate();

  const handleClick = item => {
    setCart(prev =>
      [...prev].map(i => {
        if (i.id == item.id) {
          return { ...i, qual: i.qual + 1 };
        } else {
          return { ...i };
        }
      }),
    );
  };

  const handleDelete = item => {
    setCart(prev => [...prev].filter(i => i.id !== item.id));
  };
  return (
    <div>
      <h1>Корзина товаров</h1>
      {cart.length == 0 && <p>В корзине нет товаров</p>}
      <ol>
        {cart.map(i => (
          <li key={i.id}>
            {i.name} Кол-во:{i.qual}
            <button onClick={() => handleClick(i)}>Увеличить количество</button>
            <button onClick={() => handleDelete(i)}>Удалить товар</button>
          </li>
        ))}
      </ol>
      <button onClick={() => navigate("/catalog")}>Добавить товар</button>
      <button onClick={() => setCart([])}>Очистить корзину</button>
    </div>
  );
}

export default ShoppingCart;
