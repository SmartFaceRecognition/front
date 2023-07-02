import styles from "./Enroll.module.css";
import Header from "./Header";
import Head from "./Head";
import React, { useState } from "react";

function Enroll() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const renderOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      const value = i.toString().padStart(2, "0");
      options.push(
        <option key={value} value={value}>
          {value}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <Header />
      <Head title={"인원등록"} />
      <div className={styles.container}>
        <div className={`${styles.item} ${styles.title}`}>국적</div>
        <div className={styles.item}>
          <select className="form-select" aria-label="Default select example">
            <option selected>대한민국(Korea)</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className={`${styles.item} ${styles.title}`}>사진</div>
        <div className={styles.item}>
          <input
            class="form-control"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className={`${styles.item} ${styles.title}`}>성명</div>
        <div className={styles.item}>
          <input
            className={`${styles.in} form-control`}
            id="name"
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div className={styles.item}>
          {selectedImage && <img src={selectedImage} alt="미리보기" />}
        </div>
        <div className={`${styles.item} ${styles.title}`}>생년월일</div>
        <div className={styles.item}>
          <input className={`${styles.in} form-control`} id="year" />
          <h6></h6>
          <select class="form-select" aria-label="Default select example">
            <option value="1">01</option>
            {renderOptions(1, 12)}
          </select>
          <h6>월</h6>
          <select class="form-select" aria-label="Default select example">
            <option value="1">01</option>
            {renderOptions(1, 31)}
          </select>
          <h6>일</h6>
        </div>
        <div className={`${styles.item} ${styles.title}`}>연락처</div>
        <div className={styles.item}>
          <select class="form-select" aria-label="Default select example">
            <option selected>010</option>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          <h2>-</h2>

          <input className={`${styles.in} form-control`} id="phonenumber2" />

          <h2>-</h2>

          <input className={`${styles.in} form-control`} id="phonenumber2" />
        </div>
        <div className={`${styles.item} ${styles.title}`}>직책</div>
        <div className={styles.item}>
          <select className="form-select" aria-label="Default select example">
            <option selected>대리</option>
            <option value="사원">사원</option>
            <option value="외부인">외부인</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Enroll;
