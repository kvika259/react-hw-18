function Info({ theme, auth, cart }) {
  return (
    <div>
      <h1>Информация по всем сохранённым данным</h1>
      <p>LocalStorage: {theme}</p>
      {/* при изменении LocalStorage страница не рендерится, поэтому заход через пропсы */}
      <p>SessionStorage: {JSON.stringify(cart)}</p>
      <p>Cookies: {auth ? document.cookie : "Куки пусты"}</p>
    </div>
  );
}

export default Info;
