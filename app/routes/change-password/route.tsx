import "./change-password.css";
export default function ChangePassword() {
  return (
    <div className="row m-0">
      <div className="row text-center col-md-12 mt-3">
        <h1 className="text-black">Change Password</h1>
      </div>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="changePassword col-md-3 bg-light">
          <form>
            <div className="form_center row justify-content-center">
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </fieldset>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="form_center row justify-content-center">
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                  />
                </fieldset>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="form_center row justify-content-center">
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                  />
                </fieldset>
              </div>
            </div>
            <div className="row form_center justify-content-center">
              <button type="submit" className="btn btn-dark col-md-6">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
