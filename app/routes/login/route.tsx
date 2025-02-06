import "./login.css";

export default function Transaction() {
  return (
    <div className="row m-0">
      <div className="row text-center col-md-12 mt-3">
        <h1 className="text-black">Login</h1>
      </div>
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="form_user col-md-4 bg-white">
          <form className="loginForm">
            <div className="form_center row justify-content-center">
              <fieldset className="form_fieldset">
                <label htmlFor="identification" className="form-label">
                  Email
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="identification"
                />
              </fieldset>
              <fieldset className="form_fieldset">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </fieldset>
            </div>
            <div className="row form_center justify-content-center">
              <button type="submit" className="btn btn-dark col-md-6">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
