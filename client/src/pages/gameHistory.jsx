// Import the GameHistory component
// import GameHistory from "@/components/game-history-component/gameHistory";
import CardComponent from "@/components/game-history-component/gameHistory";
import styles from "../styles/History.module.css"


export default function GameHistory() {
    return (
        <div className={styles.container}>
            <h1>Previous Games</h1>

            {/* Container for top 3 games */}
            <div className={styles.top_three}>
                <h3 className={styles.header}> Top 3 Games</h3>
                <div className={styles.top_three_cards}>
                    <CardComponent sentence={"This was the fasted typed sentence"}/>
                    <CardComponent wpm={67}/>
                    <CardComponent corrrectCharacters={5} incorrectCharacters={7}/>
                </div>
            </div>



            {/* Container for all games */}
            <div className={styles.all_games}>
                <h3 className={styles.header}> All games</h3>
                <div className={styles.top_three_cards}>
                    <CardComponent sentence={"This was the fasted typed sentence"}/>
                    <CardComponent wpm={67}/>
                    <CardComponent incorrectCharacters={7}/>
                    <CardComponent incorrectCharacters={8}/>
                </div>
            </div>
        </div>
    );
}