let result = '';
    let score;

    try {
      // Attempt to parse JSON from localStorage
      score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    } catch (error) {
      // Handle JSON parsing error
      console.error('Error parsing JSON from localStorage:', error);
      // Provide a fallback in case of parsing error
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    }

  updateScore();

    function play(playerMove) {
      let comp = pick();
      console.log(`${comp}`);

      if (playerMove === 'rock') {
        if (comp === 'rock') {
          result = 'Tie';
        } else if (comp === 'paper') {
          result = 'you lose';
        } else if (comp === 'scissors') {
          result = 'you win';
        }
      } else if (playerMove === 'paper') {
        if (comp === 'rock') {
          result = 'you win';
        } else if (comp === 'paper') {
          result = 'tie';
        } else if (comp === 'scissors') {
          result = 'you lose';
        }
      } else if (playerMove === 'scissors') {
        if (comp === 'rock') {
          result = 'you lose';
        } else if (comp === 'paper') {
          result = 'you win';
        } else if (comp === 'scissors') {
          result = 'tie';
        }
      }

      if (result === 'you win') {
        score.wins += 1;
      } else if (result === 'you lose') {
        score.losses += 1;
      } else if (result === 'tie') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));
    updateScore();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML= `you <img src="${playerMove}-emoji.png" class="icon">computer <img src="${comp}-emoji.png" class="icon" >` ;
    }
function updateScore(){
      document.querySelector('.js-score').innerHTML= `wins:${score.wins}  losses:${score.losses}  ties:${score.ties}`;

} 

// const sutoplay = ()=> {};

   let isAutoplay = false;
let intervalId;
   function autoplay(){
   if(! isAutoplay) {
   intervalId= setInterval(()=>{
     playerMove=pick();
      play(playerMove);
    }, 1000);
    isAutoplay=true;
   }

   else{
    clearInterval(intervalId);
    isAutoplay=false;
   }
  }
    function pick() {
      const Random = Math.random();
      let comp = '';
      if (Random >= 0 && Random <= 1 / 3) {
        comp = 'rock';
      } else if (Random >= 1 / 3 && Random < 2 / 3) {
        comp = 'paper';
      } else if (Random >= 2 / 3 && Random < 1) {
        comp = 'scissors';
      }
      return comp;
    }

    function resetScore() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      updateScore();
    }
