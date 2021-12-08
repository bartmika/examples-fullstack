function App() {
    return (
        <>
            <div className="w3-display-container">
                <img src="https://www.w3schools.com/w3css/img_lights.jpg"  className="w3-image" style={{width:"100%", height:"200px"}} />
                <div className="w3-padding w3-display-bottomright">
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png"  className="w3-image w3-circle" style={{height:"150px"}} />
                </div>
            </div>
            <div className="w3-container w3-light-grey">
                <h1>John Smith</h1>
            </div>
            <div className=" w3-border-top">
                <div className="w3-bar w3-panel">
                    <div className="w3-bar-item w3-center w3-border" style={{width:"25%"}}>
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <br />
                        <span className="w3-tiny">Facebook</span>
                    </div>
                    <div className="w3-bar-item w3-center w3-border" style={{width:"25%"}}>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <br />
                        <span className="w3-tiny">Twitter</span>
                    </div>
                    <div className="w3-bar-item w3-center w3-border" style={{width:"25%"}}>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <br />
                        <span className="w3-tiny">Instagram</span>
                    </div>
                    <div className="w3-bar-item w3-center w3-border" style={{width:"25%"}}>
                        <i class="fa fa-snapchat-ghost" aria-hidden="true"></i>
                        <br />
                        <span className="w3-tiny">Snapchat</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
