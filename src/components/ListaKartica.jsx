const ListaKartica = ({ filter }) => {
  return (
    <div>
      {filter.map((osoba) => (
        <div key={osoba.id}>
          <p>{osoba.first_name}</p>
          <img src={osoba.avatar} alt={osoba.first_name} />
        </div>
      ))}
    </div>
  );
};

export default ListaKartica;
