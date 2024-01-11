import { useEffect, useState } from "react";
import SearchPolje from "./components/SearchPolje";
import ListaKartica from "./components/ListaKartica";

const App = () => {
  const [osobe, setOsobe] = useState([]);
  const [filter, setFilter] = useState(osobe);
  const [searchPolje, setSearchPolje] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setOsobe(data.data));
  }, []);

  useEffect(() => {
    const noviFilter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchPolje);
    });
    setFilter(noviFilter);
  }, [osobe, searchPolje]);

  const onFilterChange = (event) => {
    const searchPoljeString = event.target.value.toLocaleLowerCase();
    setSearchPolje(searchPoljeString);
  };

  return (
    <div>
      <SearchPolje onFilterChange={onFilterChange} />
      <ListaKartica filter={filter} />
    </div>
  );
};

export default App;
