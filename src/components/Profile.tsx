import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fbjp4-1.fna.fbcdn.net/v/t1.0-9/139995469_3627194537356121_1809147081421389025_o.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=6oUSirIda2kAX_2FLOF&_nc_ht=scontent.fbjp4-1.fna&oh=2edb334cf71981cbebcbb7e72d2d8893&oe=605A5570" alt="Natasha Freitas"/>
            <div>
                <strong>Natasha Freitas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}