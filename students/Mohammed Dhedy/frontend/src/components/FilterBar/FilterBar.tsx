import styles from "./FilterBar.module.css";
type filterBarProps = {
  search: string;
  statusFilter: string;
  targetDateFilter: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  setTargetDateFilter: React.Dispatch<React.SetStateAction<string>>;
};
const FilterBar = (props: filterBarProps) => {
  return (
    <div className={styles.filter_bar}>
      <input
        placeholder="search a task"
        type="search"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <select value={props.statusFilter} onChange={(e)=>props.setStatusFilter(e.target.value)} className={styles.dropdown_menu}>
        <option value="all">filter by status(all)</option>
        <option value="Backlog">backlog</option>
        <option value="In Progress">in progres</option>
        <option value="Done">done</option>
      </select>
      <select value={props.targetDateFilter} onChange={(e)=>props.setTargetDateFilter(e.target.value)} className={styles.dropdown_menu}>
        <option value="none">sort(none)</option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
};
export default FilterBar;