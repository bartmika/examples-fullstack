import { React, Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isSidebarOpen: false,
        }
        this.onSidebarClick = this.onSidebarClick.bind(this);
    }

    onSidebarClick(e) {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        });

    }

    render() {
        const { isSidebarOpen } = this.state;
        console.log("isSidebarOpen", isSidebarOpen);
        return (
            <>
                {/* SIDEBAR */}
                <div className={`w3-sidebar w3-bar-block w3-border-right w3-collapse w3-card`} style={{zIndex:"5", width: isSidebarOpen ? "200px" : "0px", display:isSidebarOpen ? "block" : "none"}} id="mySidebar">
                  <button onClick={this.onSidebarClick} className="w3-bar-item w3-large">Close &times;</button>
                  <a href="#" className="w3-bar-item w3-button">Link 1</a>
                  <a href="#" className="w3-bar-item w3-button">Link 2</a>
                  <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div>

                {/* OVERLAY */}
                <div className="w3-overlay" onClick={this.onSidebarClick} style={{cursor:"pointer", display:isSidebarOpen ? "block" : "none" }} id="myOverlay"></div>

                {/* PAGE CONTENT */}
                <div style={{ marginLeft: isSidebarOpen ? "200px" : "0px" }}>
                    <div className="w3-teal">
                          <button className="w3-button w3-teal w3-xlarge" onClick={this.onSidebarClick}>☰</button>
                          <div className="w3-container">
                            <h1>My Page</h1>
                          </div>
                    </div>

                        <div className="w3-container">
                        <p>This sidebar is hidden by default, (style="display:none")</p>
                        <p>You must click on the "hamburger" icon (top left) to open it.</p>
                        <p>The sidebar will hide a part of the page content.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
