import "./profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Transaction() {
  return (<div className="row m-0">
    <div className="row text-center col-md-12 mt-3">
      <h1 className="text-white">Hello Tomas</h1>
    </div>
    <div className="row mt-4 justify-content-center align-items-center">
      <div className="profileForm col-md-8 bg-white">
        <form className="ProfileForm">
          <div className="form_center row justify-content-center">
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="nams" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nams"
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                />
              </fieldset>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                />
              </fieldset>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="identification" className="form-label"
                  >Identification</label>
                <input
                  type="number"
                  className="form-control"
                  id="identification"
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="dniExpedition" className="form-label">Expedition</label>
                <input
                  type="date"
                  className="form-control"
                  id="dniExpedition"
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="telephone" className="form-label">Telephone</label>
                <input
                  type="number"
                  className="form-control"
                  id="telephone"
                />
              </fieldset>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="city" className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form_fieldset">
                <label htmlFor="pass" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                />
                </fieldset>
            </div>
          </div>
          <div className="row form_center justify-content-center">
            <button type="submit" className="btn btn-dark col-md-6">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )}