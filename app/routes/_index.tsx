import "./index.css"

export default function Index() {
  return( 
    <div className="row m-5">
      <div className="row text-center col-md-12 mt-5">  
        <div  className="container">         
          <h2>Hola, <span id="userName">Usuario</span></h2>
          <p>Tienes <strong>$<span id="balance">1000</span></strong> disponibles.</p></div>
      </div>
    </div>)  
};