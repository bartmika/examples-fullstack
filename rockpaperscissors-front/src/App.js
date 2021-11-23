import { React, Component } from "react";

// Turn Verdict
const GAME_STARTED_VERDICT = 0;
const PLAYER_WIN_VERDICT = 1;
const TIE_VERDICT = 2;
const COMPUTER_WIN_VERDICT = 3;

// Player and Computer Choice
const ROCK_CHOICE = 1;
const PAPER_CHOICE = 2;
const SCISSORS_CHOICE = 3;

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerScore: 0,
            computerScore: 0,
            tieScore: 0,
            playerChoice: 0,
            computerChoice: 0,
            turnVerdict: GAME_STARTED_VERDICT,
            gameVerdict: GAME_STARTED_VERDICT,
        }
        this.onUserPick = this.onUserPick.bind(this);
    }

    onUserPick(e, playerChoice) {
        // STEP 1: User/Computer Input
        const computerChoice = randomIntFromInterval(1,3);

        // STEP 2: Evaluation
        let turnVerdict = GAME_STARTED_VERDICT;
        let { playerScore, computerScore, tieScore } = this.state;
        if (computerChoice === ROCK_CHOICE && playerChoice === SCISSORS_CHOICE) {
            turnVerdict = COMPUTER_WIN_VERDICT;
            computerScore += 1;
        } else if (computerChoice === SCISSORS_CHOICE && playerChoice === PAPER_CHOICE) {
            turnVerdict = COMPUTER_WIN_VERDICT;
            computerScore += 1;
        } else if (computerChoice === PAPER_CHOICE && playerChoice === ROCK_CHOICE) {
            turnVerdict = COMPUTER_WIN_VERDICT;
            computerScore += 1;
        } else if (playerChoice === ROCK_CHOICE && computerChoice === SCISSORS_CHOICE) {
            turnVerdict = PLAYER_WIN_VERDICT;
            playerScore += 1;
        } else if (playerChoice === SCISSORS_CHOICE && computerChoice === PAPER_CHOICE) {
            turnVerdict = PLAYER_WIN_VERDICT;
            playerScore += 1;
        } else if (playerChoice === PAPER_CHOICE && computerChoice === ROCK_CHOICE) {
            turnVerdict = PLAYER_WIN_VERDICT;
            playerScore += 1;
        } else {
            turnVerdict = TIE_VERDICT;
            tieScore += 1;
        }

        let gameVerdict = 0;
        if (playerScore >= 5) {
            gameVerdict = PLAYER_WIN_VERDICT;
        } else if (computerScore >= 5) {
            gameVerdict = COMPUTER_WIN_VERDICT;
        }

        this.setState({
            playerChoice: playerChoice,
            computerChoice: computerChoice,
            playerScore: playerScore,
            tieScore: tieScore,
            computerScore: computerScore,
            turnVerdict: turnVerdict,
            gameVerdict: gameVerdict,
        });
    }

    render() {
        const {
            playerScore, computerScore, tieScore, playerChoice, computerChoice, turnVerdict, gameVerdict
        } = this.state;
        return (
            <>
                {/*  DESKTOP */}
                {/* ---------------------------------------------------------------------------------------------- */}
                <div className="w3-hide-small w3-hide-medium w3-center">
                    <div className="w3-row">
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-user"></i>&nbsp;{playerScore}</div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-handshake-o"></i>&nbsp;{tieScore}</div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-android"></i>&nbsp;{computerScore}</div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <i className="fa fa-home w3-jumbo"></i>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <i className="fa fa-home w3-jumbo"></i>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <i className="fa fa-home w3-jumbo"></i>
                    <div className="w3-row w3-bottom">
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-home"></i></div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-home"></i></div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-home"></i></div>
                    </div>
                </div>

                {/* TABLET */}
                {/* ---------------------------------------------------------------------------------------------- */}
                <div className="w3-hide-small w3-hide-large w3-center">
                    <div className="w3-row">
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-user"></i>&nbsp;{playerScore}</div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-handshake-o"></i>&nbsp;{tieScore}</div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-android"></i>&nbsp;{computerScore}</div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <i className="fa fa-home w3-jumbo"></i>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <i className="fa fa-home w3-jumbo"></i>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <i className="fa fa-home w3-jumbo"></i>
                    <div className="w3-row w3-bottom">
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-hand-scissors-o"></i></div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-hand-rock-o"></i></div>
                        <div className="w3-col s4 w3-center w3-jumbo"><i className="fa fa-hand-paper-o"></i></div>
                    </div>
                </div>

                {/* MOBILE */}
                {/* ---------------------------------------------------------------------------------------------- */}
                <div className="w3-hide-large w3-hide-medium w3-center">
                    {gameVerdict === 0 &&
                        <div className="w3-row">
                            <div className="w3-col s4 w3-center w3-xxlarge"><i className="fa fa-user w3-text-green"></i>&nbsp;{playerScore}</div>
                            <div className="w3-col s4 w3-center w3-xxlarge"><i className="fa fa-handshake-o w3-text-yellow"></i>&nbsp;{tieScore}</div>
                            <div className="w3-col s4 w3-center w3-xxlarge"><i className="fa fa-android w3-text-red"></i>&nbsp;{computerScore}</div>
                        </div>
                    }
                    {gameVerdict === PLAYER_WIN_VERDICT &&
                        <div className="w3-row">
                            <div className="w3-col s12 w3-center w3-xxlarge"><i className="fa fa-user w3-text-green"></i>&nbsp;Player Wins!</div>
                        </div>
                    }
                    {gameVerdict === COMPUTER_WIN_VERDICT &&
                        <div className="w3-row">
                            <div className="w3-col s12 w3-center w3-xxlarge"><i className="fa fa-user w3-text-red"></i>&nbsp;Computer Wins!</div>
                        </div>
                    }

                    <br /><br /><br /><br /><br /><br /><br />

                    {computerChoice === 0 &&
                        <i className="fa fa-question w3-xxlarge"></i>
                    }
                    {computerChoice === ROCK_CHOICE &&
                        <i className="fa fa-hand-rock-o w3-xxlarge"></i>
                    }
                    {computerChoice === PAPER_CHOICE &&
                        <i className="fa fa-hand-paper-o w3-xxlarge"></i>
                    }
                    {computerChoice === SCISSORS_CHOICE &&
                        <i className="fa fa-hand-scissors-o w3-xxlarge"></i>
                    }

                    <br /><br /><br /><br /><br /><br /><br />

                    {turnVerdict === GAME_STARTED_VERDICT &&
                        <i className="fa fa-cloud w3-xxlarge w3-text-blue"></i>
                    }
                    {turnVerdict === COMPUTER_WIN_VERDICT &&
                        <i className="fa fa-android w3-xxlarge w3-text-red"></i>
                    }
                    {turnVerdict === TIE_VERDICT &&
                        <i className="fa fa-handshake-o w3-xxlarge w3-text-yellow"></i>
                    }
                    {turnVerdict === PLAYER_WIN_VERDICT &&
                        <i className="fa fa-user w3-xxlarge w3-text-green"></i>
                    }

                    <br /><br /><br /><br /><br /><br /><br />

                    {playerChoice === 0 &&
                        <i className="fa fa-question w3-xxlarge"></i>
                    }
                    {playerChoice === ROCK_CHOICE &&
                        <i className="fa fa-hand-rock-o w3-xxlarge"></i>
                    }
                    {playerChoice === PAPER_CHOICE &&
                        <i className="fa fa-hand-paper-o w3-xxlarge"></i>
                    }
                    {playerChoice === SCISSORS_CHOICE &&
                        <i className="fa fa-hand-scissors-o w3-xxlarge"></i>
                    }

                    <div className="w3-row w3-bottom">
                        <div className="w3-col s4 w3-center w3-xxlarge" onClick={ (e,p) => this.onUserPick(e, SCISSORS_CHOICE) }>
                            <i className="fa fa-hand-scissors-o"></i>
                        </div>
                        <div className="w3-col s4 w3-center w3-xxlarge" onClick={ (e,p) => this.onUserPick(e, ROCK_CHOICE) }>
                            <i className="fa fa-hand-rock-o"></i>
                        </div>
                        <div className="w3-col s4 w3-center w3-xxlarge" onClick={ (e,p) => this.onUserPick(e, PAPER_CHOICE) }>
                            <i className="fa fa-hand-paper-o"></i>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
