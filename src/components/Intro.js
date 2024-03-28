import { useStato, useStatoset } from "../data/Context";

function Intro(){


  //We need the MarginTop to the media query
  return(
    <div className="row mx-0 col-12 d-flex justify-content-center position-relative" style={{ height: "55vh" }}>
      <div className="position-absolute sfondo px-0">
        <div style={{width: "100%", height: "100%", backgroundColor: "green", opacity: 0.3 }}></div>
      </div>

      <div className="col-10 col-md-8 flex-column cent-flex position-relative introText"
        style={{color: "hsl(300, 100%, 36%)"}}>
        <h1 className="hammer text-center" style={{fontSize: "3.5em"}}>Welcome to TuneFuse</h1>
        <p className="hammer" style={{fontSize: "1.5em"}}>Where Melodies Unite!</p>
      </div>

      <div className="position-absolute text-white d-flex align-items-center" style={{ bottom: 0, height: "15vh"}}>
        <h1 className="align-self-center" style={{ marginLeft: "32%" }}> </h1>
      </div>

    </div>
  )
}

export default Intro;