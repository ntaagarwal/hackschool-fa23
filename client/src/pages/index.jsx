import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmlogo from '../assets/acmlogo.png'
import Navbar from '@/components/navbar-component/navbar'; 


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
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
      </div>
    </div>
  )
}
