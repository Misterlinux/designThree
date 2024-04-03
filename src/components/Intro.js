import { useStato, useStatoset } from "../data/Context";

function Intro(){


  //We need the MarginTop to the media query
  return(
    <div className="row mx-0 col-12 cent-flex position-relative" style={{ height: "55vh" }}>
      {/* double background */}
      <div className="position-absolute sfondo px-0">
        <div style={{width: "100%", height: "100%", backgroundColor: `hsl(120, 100%, 36%)`, opacity: 0.2 }}></div>
      </div>

      <div className="col-10 col-md-11 flex-column cent-flex position-relative introText hammer"
        style={{color: "hsl(300, 100%, 36%)"}}>
        <h1 className="text-center">Welcome to TuneFuse</h1>
        <p style={{fontSize: "1.5em"}}>Where Melodies Unite!</p>
      </div>
      
    </div>
  )
}

export default Intro;