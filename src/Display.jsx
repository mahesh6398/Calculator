import style from "./display.module.css";
const Display=({calval})=>{
return(
    <input type="text" id={style.display} value={calval}readOnly></input>
)
}
export default Display;