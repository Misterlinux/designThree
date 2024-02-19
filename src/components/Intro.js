import { useStato, useStatoset } from "../data/Context";

function Intro(){

  return(
    <div className="row mx-0 col-12 d-flex justify-content-center position-relative" style={{ height: "50vh" }}>
      <div className="position-absolute sfondo"></div>

      <div className="col-7 d-flex flex-column justify-content-center align-items-center text-danger position-relative">
        <h2>Siamo stati andati</h2>
        <p>Siamo stati noi</p>
      </div>

      <div className="position-absolute text-white" style={{ bottom: 0, height: "15vh"}}>
        <h1 style={{ marginLeft: "32%" }}>Our days going on</h1>
      </div>
    </div>
  )
}

export default Intro;