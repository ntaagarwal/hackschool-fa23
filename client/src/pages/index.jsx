import Image from 'next/image';
<<<<<<< HEAD
import styles from '../styles/Home.module.css'
import acmlogo from '../assets/acmlogo.png'
import Navbar from '@/components/navbar-component/navbar'; 
=======
import styles from '../styles/Home.module.css';
import acmLogo from '../assets/acmlogo.png';
>>>>>>> upstream/part4


function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.welcome}>
<<<<<<< HEAD
          <h1> Welcome to HackRacer! </h1>
          {/* Replace the heading, and add a short paragraph about your website here! */}
          <h2> Made by Nitya :D</h2>
          <p> I am a complete beginner so dont judge my website!</p>
          <p> You can navigate to <i>Add Sentence</i> button at the top to add a new sentence</p>
        </div>
      <div className={styles.image}>
        {/* Put the ACM logo here! */}
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
        <Image src={acmlogo} width={250} height={250} alt="the thing didnt load whoops" />
=======
          <h2>Welcome to HackRacer!</h2>
          <p>You can navigate to <i>Add Sentence</i> button at the top to add a new sentence. 
              Then you can go over to <i>Play Game</i> to start playing the game. 
          </p>
      </div>
      <div className={styles.image}><Image src={acmLogo} width={200} height={200} alt="acmlogo"/>
>>>>>>> upstream/part4
      </div>
    </div>
  );
}

export default Home;
