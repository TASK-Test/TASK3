import styles from "../Chip.module.css";
type StatusProp ={
name:string;
color:string|null;
}
const StatusChip=(props:StatusProp)=>{
return (
    <span className={styles.chip} style={{backgroundColor:props.color||"gray"}}>
        {props.name}
    </span>
);
}

export default StatusChip;