import { ActionFunctionArgs } from "@remix-run/node";
import "./transfers.css";
import { useActionData, Form } from "@remix-run/react";
import db from "~/service/db";
import { Transfer } from "@prisma/client";


export const loader = async () => {
  return ({ message: "Complete los datos para la transacción" });
};

export const action = async ({ request }: ActionFunctionArgs ) => {
  const formDataSave = await request.formData();
  const transaction: Transfer = {
    senderId: (parseInt(formDataSave.get("receptor") ?? "1", 10) || 1),
    amount: formDataSave.get("amount"),     
    recipientId: "1",     
    stripePaymentId:"1" 
  };
  db.transfer.create(transaction)
  return { success: true, transaction };
  };

export default function TransactionForm() {
  const actionData = useActionData<typeof action>(); 
  return (
    <div className="row m-0">
      <div className="row text-center col-md-12 mt-3">
        <h1 className="text-black">Transaction</h1>
      </div>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="transactionForm col-md-5 bg-white">
          <Form method="post" className="TransactionForm">
            <div className="form_center row justify-content-center">
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="receptor" className="form-label">
                    Receptor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="receptor"
                    required
                  />
                </fieldset>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    required
                  />
                </fieldset>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <fieldset className="form_fieldset">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="message"
                    required
                  />
                </fieldset>
              </div>
            </div>
            <div className="row form_center justify-content-center">
              <button type="submit" className="btn btn-dark col-md-6">
                Send Transfer
              </button>
            </div>
          </Form>
          {actionData?.success && (
            <div className="alert alert-success mt-3">
              <p>¡Transacción enviada con éxito!</p>
              <pre>{JSON.stringify(actionData.transaction, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
