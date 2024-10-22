import confetti from "canvas-confetti";
import splash from '../sounds/whip-whoosh-02.mp3'
import ring from '../sounds/magic-chime-02.mp3'
// const confettiSound = new Audio(
//   "https://www.soundjay.com/misc/sounds/whip-whoosh-02.mp3"
// );
// const sparklesSound = new Audio(
//   "https://www.soundjay.com/misc/sounds/magic-chime-02.mp3"
// );

// const confettiSound = new Audio(
//   splash
// );
// const sparklesSound = new Audio(
//   ring
// );

const Hero = () => {
  const handleButtonClick = (e) => {
    const confettiSound = new Audio(
      splash
    );
    const sparklesSound = new Audio(
      ring
    );    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    e.target.style.transform = "scale(0.95)";
    e.target.style.background = "red";
    setTimeout(() => {
      confettiSound.play();
      e.target.style.transform = "scale(1.05)";
      sparklesSound.play();
      setTimeout(() => {
        e.target.style.background = "aliceblue";
        e.target.style.color = "SteelBlue";
        e.target.style.transform = "scale(1)";
      }, 100);
    }, 100);
  };  
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>backroads <br /> continue explore</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <button
              onMouseEnter={handleButtonClick}><a href='#tours' className='btn hero-btn '>
          explore tours
        </a>
        </button>
      </div>
    </section>
  )
}
export default Hero
