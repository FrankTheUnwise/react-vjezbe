const searchPolje = ({ onFilterChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder="Trazi"
      onChange={onFilterChange}
    />
  );
};
export default SearchPolje;
