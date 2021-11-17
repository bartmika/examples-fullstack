import { React, Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "search",
        };
        this.onNavClick = this.onNavClick.bind(this);
    }

    onNavClick(e, page) {
        console.log("page:", page);
        this.setState({
            page: page,
        });
    }

    render() {
        const { page } = this.state;
        return (
            <>
                {/* Tablet and Desktop */}
                <div className="w3-hide-small w3-bottom">
                    <div className="w3-bar w3-black w3-xlarge ">
                        <div className={`w3-bar-item w3-btn w3-mobile w3-padding-16 ${page === "home" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "home") }>Home</div>
                        <div className={`w3-bar-item w3-btn w3-mobile w3-padding-16 ${page === "about" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "about") }>About</div>
                        <div className={`w3-bar-item w3-btn w3-mobile w3-padding-16 ${page === "contact" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "contact") }>Contact</div>
                        <input className="w3-bar-item w3-input w3-mobile w3-padding-16 w3-border w3-border-dark-grey" type="text" placeholder="Search ..." />
                        <button className="w3-bar-item w3-button w3-mobile w3-padding-16 w3-teal">Search</button>
                    </div>
                </div>

                {/* Mobile Only */}
                <div className="w3-hide-medium w3-hide-large">
                    <div className="w3-bar-block w3-black">
                        <div className={`w3-bar-item w3-btn w3-mobile ${page === "home" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "home") }><i className="fa fa-home"></i>&nbsp;Home</div>
                        <div className={`w3-bar-item w3-btn w3-mobile ${page === "about" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "about") }>About</div>
                        <div className={`w3-bar-item w3-btn w3-mobile ${page === "contact" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "contact") }>Contact</div>
                        <div className={`w3-bar-item w3-btn w3-mobile ${page === "search" ? "w3-green" : ""}`} onClick={ (e, page) => this.onNavClick(e, "search") }>Search</div>
                        {page === "search" &&
                            <div className="w3-show w3-padding">
                                <div className="">
                                    <div className="">
                                        <input className="w3-input w3-border w3-border-dark-grey w3-block" type="text" placeholder="Search ..." />
                                    </div>
                                    <div className="">
                                        <button className="w3-button w3-block w3-teal"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <h3>Scroll this page to see the effect.</h3>
<p>Some text to enable scrolling..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text to enable scrolling..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text to enable scrolling..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text to enable scrolling..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
<p>Some text some text some text some text..</p>
            </>
        );
    }
}

export default App;
