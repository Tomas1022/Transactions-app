import "./movements.css";

export default function Index() {

return (
<div className="row m-0">
    <div className="row text-center col-md-12 mt-5">
        <div className="container ">
        <h2>Movement History</h2>
            <div className="transaction ">
                <div>
                    <div><strong>Enviaste a Juan Pérez</strong></div>
                    <div className="status">Enviaste • 05 Feb 2025</div>
                </div>
                <div className="amount sent">- $50000.00</div>
            </div>
            <div className="transaction">
            <div>
              <div><strong>Transferencia recibida de Mariana Hernandez</strong></div>
              <div className="status">Recibiste • 04 Feb 2025</div>
            </div>
            <div className="amount received">+ $1,200.00</div>
            </div>
            <div className="transaction">
            <div>
              <div><strong>Enviaste a Maty Herrera</strong></div>
              <div className="status">Enviaste • 03 Feb 2025</div>
          </div>
          <div className="amount sent">- $250000.00</div>
        </div>
        </div>
    </div>
</div>)
  }