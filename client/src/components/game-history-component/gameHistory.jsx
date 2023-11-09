// import styles from './gameHistory.module.css';

// Create a functional component that will display game history
// Remember to return one top-level div, and nest the rest of your elements inside of it
// It should take in props for the sentence, correctChars, incorrectChars, wpm, and time
// Export your GameHistory component!

// import Link from 'next/link';
import styles from './GameHistory.module.css';

const CardComponent = ({sentence, correctCharacters, incorrectCharacters, wpm, time}) => {
    return (
        // Next uses Link component for prefetching and client-side navigation
        // which extends the <a> element
        <div className={styles.card}>
            <p className={styles.cardContent}> 
                <b> Sentence: </b> {sentence}
            </p>
            <p className={styles.cardContent}>
                <b> Correct Characters: </b> {correctCharacters}
            </p>
            <p className={styles.cardContent}>
                <b> Incorrect Characters: </b> {incorrectCharacters}
            </p>
            <p className={styles.cardContent}>
                <b> WPM: </b> {wpm}
            </p>
            <p className={styles.cardContent}>
                <b> Time: </b> {time}
            </p>
        </div>
    )
}

export default CardComponent;