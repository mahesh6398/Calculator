import style from "./buttoncontainer.module.css";
const Buttoncontainer = ({ onCal }) => {
  const data = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
  ];
  return (
    <div className={style.btncontainer}>
      {data.map((item) => {
        return (
          <button
            className={style.btn}
            type="button"
            onClick={() => onCal(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Buttoncontainer;
