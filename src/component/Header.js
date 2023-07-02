import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const movePage = useNavigate();
  
  const handleClick1 = () => {
    movePage('/enroll');
  };

  const handleClick2 = () => {
    movePage('/management');
  };

  const handleClick3 = () => {
    movePage('/present');
  };

  const handleClick4 = () => {
    movePage('/control');
  };
  return (
    <div>
      <h2 className={styles.title}>부두 출입관리 시스템</h2>
      <div className={`${styles.header}`}>
        <div className={styles.container}>
          <div className={styles.item} onClick={handleClick1}>인원등록</div>
          <div className={styles.item} onClick={handleClick2}>인원관리</div>
          <div className={styles.item} onClick={handleClick3}>인원현황</div>
          <div className={styles.item} onClick={handleClick4}>원격제어</div>
        </div>
      </div>
    </div>
  );
}
export default Header;
