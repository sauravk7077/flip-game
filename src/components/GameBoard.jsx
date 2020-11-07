import React from "react";

class GameBoard extends React.Component {
    constructor() {
        super();
        this.state = {
        score: 0,
        time: 0
        }
    }
    render() {
        return (
        <div class="gameBoard">
            <Card show={true}/>
        </div>
        );
    }
}

export default GameBoard;