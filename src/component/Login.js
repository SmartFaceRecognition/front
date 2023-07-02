import styles from "./Login.module.css";

function Login() {
  (() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  return (
    <div className={styles.App}>
      <div className={styles.box}>
        <div className="container text-center">
          <div className="row">
            <div className={`col ${styles.padding}`}>부두 출입관리 시스템</div>
          </div>

          <form className="needs-validation" noValidate>
            <div className="row" style={{ paddingTop: "60px" }}>
              <div className="col-2" />
              <label
                for="id"
                className="form-label col"
                style={{ textAlign: "start" }}
              >
                id
              </label>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="아이디를 입력하세요"
                  aria-label="Username"
                  required
                />
              </div>
              <div className="col-1" />
            </div>

            <div className="row" style={{ paddingTop: "80px" }}>
              <div className="col-2" />
              <label
                for="password"
                className="form-label col"
                style={{ textAlign: "start" }}
              >
                password
              </label>
              <div className="col-4">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>
              <div className="col-1" />
            </div>

            <button
              class="btn btn-outline-light btn-lg"
              style={{ marginTop: "80px" }}
              type="submit"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
