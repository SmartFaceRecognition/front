import styles from "./Present.module.css";
import Header from "./Header";
import Head from "./Head";
import React from "react";

function Present() {
  return (
    <div>
      <Header />
      <Head title={"인원현황"} />
      <div className={styles.container}>
        <div className={styles.item}></div>
        <div className={styles.item}>
          <input
            className={`${styles.in} form-control`}
            id="search"
            placeholder="검색"
          />
          <div></div>
          <select
            className={`${styles.filter} form-select-xs`}
            aria-label="Default select example"
          >
            <option selected>제 1 부두</option>
            <option value="1">제 2 부두</option>
            <option value="2">제 3 부두</option>
          </select>
        </div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}>
          <table className="text-center">
            <thead>
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>직책</th>
                <th>출입시간</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>김철수</td>
                    <td>사원</td>
                    <td>2023-06-27 08:00</td>
                    <td>없음</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={`${styles.item} ${styles.paging}`}>1/10</div>
        <div className={styles.item}></div>
      </div>
    </div>
  );
}
export default Present;
