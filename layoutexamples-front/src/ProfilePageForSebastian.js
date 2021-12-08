function App() {
    return (
        <>
            <div className="w3-display-container">
                <img src="/img_lights_cut.jpg" className="w3-image w3-margin-bottom" />
                <div className="w3-display-middle w3-circle w3-border-white" style={{borderWidth:"8px", borderStyle:"solid"}}>
                    <img src="https://www.w3schools.com/w3css/img_avatar3.png"  className="w3-image w3-circle" style={{height:"150px",}} />
                </div>
                <div className="w3-display-bottommiddle">
                    <div className="w3-center">
                        <span className="w3-xlarge">John Smith</span><br />
                        <span className="w3-small w3-text-grey">Product designer</span>
                    </div>
                </div>
            </div>
            <div className="w3-panel">
                <div className="w3-border w3-border-grey w3-margin-bottom">
                    <div className="w3-card">
                        <div class="w3-cell-row">
                            <div class="w3-white w3-cell w3-cell-middle">
                                <div className="w3-center">
                                    <i className="fa fa-calendar w3-xxlarge w3-text-green"></i>
                                </div>
                            </div>

                            <div class="w3-white w3-cell">
                              <p className="w3-large"><strong>Joined Date</strong></p>
                              <p className="w3-text-grey">1 January 2021</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w3-border w3-border-grey w3-margin-bottom">
                    <div className="w3-card">
                        <div class="w3-cell-row">
                            <div class="w3-white w3-cell w3-cell-middle">
                                <div className="w3-center">
                                    <i className="fa fa-cube w3-xxlarge w3-text-green"></i>
                                </div>
                            </div>

                            <div class="w3-white w3-cell">
                              <p className="w3-large"><strong>Active Projects</strong></p>
                              <p className="w3-text-grey">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w3-border w3-border-grey w3-margin-bottom">
                    <div className="w3-card">
                        <div class="w3-cell-row">
                            <div class="w3-white w3-cell w3-cell-middle">
                                <div className="w3-center">
                                    <i className="fa fa-handshake-o w3-xxlarge w3-text-green"></i>
                                </div>
                            </div>

                            <div class="w3-white w3-cell">
                              <p className="w3-large"><strong>Projects Deliviered</strong></p>
                              <p className="w3-text-grey">1</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default App;
