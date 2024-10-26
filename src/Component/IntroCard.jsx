import "./IntroCard.css";
import introImg from "/intro-img.png";

const InroCard = () => {
  return (
    <div className='IntroCard'>
      <img src={introImg} alt="into-card" />
      <h2>Focus On Your Day</h2>
      <p>
      Stay organized and focused with your personalized task manager
      </p>
    </div>
  )
}

export default InroCard
