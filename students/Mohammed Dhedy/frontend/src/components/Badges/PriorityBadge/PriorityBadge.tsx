import styles from "../Chip.module.css";
import type { Priority } from "../../../types/task";
type PriorityBadgeProps={
    priority:Priority;
}
const PriorityBadge=({priority}:PriorityBadgeProps)=>{
return (
    <span className={`${styles.chip} ${styles[priority]}`}>
        {priority}
    </span>
);
}
export default PriorityBadge;