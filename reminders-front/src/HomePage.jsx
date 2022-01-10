import { React, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {


    return(
        <>
            <div className="w3-container">
                <h1>Welcome to my app!</h1>

                <div className="w3-row">

                    <div className="w3-col m4 w3-padding">
                        <div className="w3-card-4">
                            <header className="w3-container w3-blue">
                              <h1>Header</h1>
                            </header>

                            <div className="w3-container">
                              <p>Lorem ipsum...</p>
                            </div>

                            <footer className="w3-container w3-blue">
                              <h5>Footer</h5>
                            </footer>
                        </div>
                    </div>

                    <div className="w3-col m4 w3-padding">
                        <div className="w3-card-4">
                            <header className="w3-container w3-blue">
                              <h1>Header</h1>
                            </header>

                            <div className="w3-container">
                              <p>Lorem ipsum...</p>
                            </div>

                            <footer className="w3-container w3-blue">
                              <h5>Footer</h5>
                            </footer>
                        </div>
                    </div>

                    <div className="w3-col m4 w3-padding">
                        <div className="w3-card-4">
                            <header className="w3-container w3-blue">
                              <h1>Header</h1>
                            </header>

                            <div className="w3-container">
                              <p>Lorem ipsum...</p>
                            </div>

                            <footer className="w3-container w3-blue">
                              <h5>Footer</h5>
                            </footer>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default HomePage;
