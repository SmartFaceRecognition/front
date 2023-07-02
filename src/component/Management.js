import styles from "./Management.module.css";
import Header from "./Header";
import Head from "./Head";
import React from "react";

function Management() {
  return (
    <div>
      <Header />
      <Head title={"인원관리"} />
      <div className={styles.container}>
        <div className={styles.item}></div>
        <div className={styles.item}>
          <input
            className={`${styles.in} form-control`}
            id="search"
            placeholder="검색"
          />
          <div></div>
          <div className={styles.user}>직원</div>
          <div className={styles.user}>외부인</div>
          <select
            className={`${styles.filter} form-select-xs`}
            aria-label="Default select example"
          >
            <option selected>이름순</option>
            <option value="1">등록순</option>
            <option value="2">생년월일순</option>
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
                <th>국적</th>
                <th>생년월일</th>
                <th className="text-center">전화번호</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>김철수</td>
                    <td>대한민국</td>
                    <td>1999-04-02</td>
                    <td>010-0000-0000</td>
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
export default Management;
