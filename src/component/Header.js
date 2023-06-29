import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <h2  style={{ color: "#000000", textAlign: "start",marginLeft: "10%"}}>
        부두 출입관리 시스템
      </h2>
      <div className={`${styles.header}`}>
        <div className="container text-center">
          <div className="row" style={{paddingBottom:"5px"}}>
            <div className="col-2">인원등록</div>
            <div className="col-8 ">인원관리</div>
            <div className="col-2">인원현황</div>
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
