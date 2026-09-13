import styles from "./FilterBar.module.css";
type filterBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
};
const FilterBar = ({ search, setSearch }: filterBarProps) => {
  return (
    <div className={styles.filter_bar}>
      <input
        placeholder="search a task"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default FilterBar;
