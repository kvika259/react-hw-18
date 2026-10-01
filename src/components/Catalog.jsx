function Catalog({ setCart }) {
  const products = [
    { id: 1, name: "Рубашка" },
    { id: 2, name: "Брюки" },
    { id: 3, name: "Туфли" },
    { id: 4, name: "Рыба" },
    { id: 5, name: "Автомобиль" },
  ];

  const handleClick = item => {
    setCart(prev => {
      if (prev.find(i => i.id == item.id)) {
        return [...prev].map(i => {
          if (i.id == item.id) {
            return { ...i, qual: i.qual + 1 };
          } else {
            return { ...i };
          }
        });
      } else {
        return [...prev, { ...item, qual: 1 }];
      }
    });
  };

  return (
    <div>
      <h2>Каталог</h2>
      <ol>
        {products.map(i => (
          <li key={i.id}>
            {i.name}
            <button onClick={() => handleClick(i)}>
              Добавить товар в корзину
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Catalog;
