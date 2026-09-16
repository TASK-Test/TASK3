import { useEffect, useState } from "react";
import styles from "./FilterBar.module.css";
import type { Status } from "../../types/task";
import { getStatuses } from "../../api/client";
import QuickMessage from "../QuickMessage/QuickMessage";
type filterBarProps = {
  search: string;
  statusFilter: string;
  targetDateFilter: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  setTargetDateFilter: React.Dispatch<React.SetStateAction<string>>;
};
const FilterBar = (props: filterBarProps) => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    const getRes = async () => {
      try {
        const response: Status[] = await getStatuses();
        setStatuses(response);
        if (response.length <= 0) throw new Error("There is no statuses !");
      } catch (error) {
        setError(error instanceof Error ? error.message : "");
      }
    };
    getRes();
  }, []);
  return (
    <>
      {error.length > 0 && <QuickMessage type="error" message={error} />}
      <div className={styles.filter_bar}>
        <input
          placeholder="search a task"
          type="search"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
        <select
          disabled={error.length > 0}
          value={props.statusFilter}
          onChange={(e) => props.setStatusFilter(e.target.value)}
          className={styles.dropdown_menu}
        >
          <option value="all">filter by status(all)</option>
          {statuses.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        <select
          value={props.targetDateFilter}
          onChange={(e) => props.setTargetDateFilter(e.target.value)}
          className={styles.dropdown_menu}
        >
          <option value="none">sort(none)</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </>
  );
};
export default FilterBar;
