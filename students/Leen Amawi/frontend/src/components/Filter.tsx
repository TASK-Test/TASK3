type FilterBarProps = { 
    search: string 
    setSearch: (value: string) => void
    statusFilter: string 
    setStatusFilter: (value: string) => void 
    sortByDate: boolean 
    setSortByDate: (value: boolean) => void }

 function FilterBar({ search, setSearch, statusFilter, setStatusFilter, sortByDate, setSortByDate, }: FilterBarProps) {
return (
    <div>
     
      <input className="search" type="text" placeholder="Search" value={search} onChange={(event) => setSearch(event.target.value)}/>
      <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option value="ALL">All statuses</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <label>
        <input type="checkbox" checked={sortByDate} onChange={(event) => setSortByDate(event.target.checked)}/>
        Sort by target date </label>


    </div>
  )}
  export default FilterBar