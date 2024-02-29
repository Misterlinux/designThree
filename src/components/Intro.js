import { useStato, useStatoset } from "../data/Context";

function Intro(){

  return(
    <div className="row mx-0 col-12 d-flex justify-content-center position-relative" style={{ height: "50vh" }}>
      <div className="position-absolute sfondo"></div>

      <div className="col-10 col-md-7 d-flex flex-column justify-content-center align-items-center text-danger position-relative">
        <h1 className="hammer text-center" style={{fontSize: "3em"}}>Welcome to TuneFuse</h1>
        <p className="hammer" style={{fontSize: "1.2em"}}>Where Melodies Unite!</p>
      </div>

      <div className="position-absolute text-white d-flex align-items-center" style={{ bottom: 0, height: "15vh"}}>
        <h1 className="align-self-center" style={{ marginLeft: "32%" }}> </h1>
      </div>


    </div>
  )
}

export default Intro;