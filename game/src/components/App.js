import React, {
    Component
} from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Banner from "./Banner";
import Footer from "./Footer";
import image from "../images"

class Game extends Component {
    state = {
        score: 0,
        highScore: 0,

        navMsgColor: "",
        navMess: "Click a Logo to start",

        allLogos: this.shuffleArr(),

        beenClicked: [],

        shake: false
    };
    clickEvent = this.checkClick.bind(this);

    shuffleArr() {
        const newArry = image.slice();

        const shuffArr = [];

        while (newArry.length > 0) {
            shuffArr.push(newArry.splice(Math.floor(Math.random() * newArry.length), 1)[0]);
        }
        return this.shuffArr;
    }
    checkClick(clickedElem) {
        const prevSt = this.state.beenClicked.slice();

        const shuffled = this.shuffleArr();

        let score = this.state.score;
        let highScore = this.state.highScore;

        if (!this.state.beenClicked.includes(clickedElem)) {
            if (score === highScore) {
                score++;
                highScore++;
            } else {
                score++;
            }
            prevSt.push(clickedElem);
        }

        if (this.state.beenClicked.includes(clickedElem)) {
            let score = 0;
            return this.setState({
                score: score,
                highScore: highScore,
                navMsgColor: 'incorrect',
                navMess: 'Try again',
                allLogos: shuffled,
                beenClicked: [],
                shake: true
            });
        }
        this.setState({
            score: score,    
            highScore: highScore,    
            navMsgColor: 'correct',   
            navMess: 'Keep going',     
            allLogos: shuffled,     
            beenClicked: prevSt,
            shake: false
      
        });
        return setTimeout(() => this.setState({navMsgColor: ""}),500);
}
        render(){
           return( 
            <div>
                <Navbar
                    score={this.state.score}
                    highScore={this.state.highScore}
                    navMess ={this.state.navMess}
                    navMsgColor ={this.state.navMsgColor}
                />
                <Banner/>
                <Container
                    shake={this.state.shake}
                    logos={this.state.allLogos}
                    clickEvent={this.clickEvent}
                />
                <Footer/>
            </div>
            );
        }
}
export default Game;