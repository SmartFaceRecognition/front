import styles from "./Head.module.css";

function Head(props) {
  return (
    <div>
      <div className={styles.title}>{props.title}</div>
      <hr/>
    </div>
  );
}
export default Head;
