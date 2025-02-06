import "./transfers.css";

export default function Transaction() {
  return (
    <div className="row m-0">
      <div className="row text-center col-md-12 mt-3">
        <h1 className="text-white">Transaction</h1>
      </div>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="transactionForm col-md-5 bg-light">
          <form className="TransactionForm">
            <div className="form_center row justify-content-center">
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="receptor" className="form-label">
                    Receptor
                  </label>
                  <input type="" className="form-control" id="receptor" />
                </fieldset>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input type="number" className="form-control" id="amount" />
                </fieldset>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <input type="text" className="form-control" id="message" />
                </fieldset>
              </div>
            </div>
            <div className="row form_center justify-content-center">
              <button type="submit" className="btn btn-dark col-md-6">
                Send Transfer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
