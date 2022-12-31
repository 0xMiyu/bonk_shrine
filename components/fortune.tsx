import { FC, useCallback, useState, useRef, createElement } from "react";
import styles from '../styles/Home.module.css'
import { TwitterShareButton, TwitterIcon } from 'react-share';

export const FortuneElement: FC = () => {
    const fortune_results = ['大吉', '小吉', '吉', '末吉', '大凶', '小凶', '凶', '末凶'];
    const fortune_descriptions = [
        '大吉 = "Big Luck" LFGGGG!', 
        '小吉 = "Small Luck"', 
        '吉 = "Luck" ', 
        '末吉 = "Future Luck"', 
        '大凶 = "Big Misfortune"', 
        '小凶 = "Small Misfortune"', 
        '凶 = ""Misfortune', 
        '末凶 = "Future Misfortune"'];
    const res = Math.floor(Math.random() * 8);
    return(
        <div className={styles.fortune_container} style={{zIndex:'5'}}>
            <div className={styles.fortune}>
              <div className={styles.fortune_cover}>
                <div className={styles.fortune_result}>{fortune_results[res]}</div>
              </div>
              <div className={styles.fortune_desc}>{fortune_descriptions[res]}</div>
              <div className={styles.fortune_share}>
                Share your fortune
                <div className={styles.fortune_share_buttons}>
                  <TwitterShareButton
                    url={"insert url here"}
                    title={"I got " + fortune_results[res] + " from the Shrine of Bonk!"}
                    className="Demo__some-network__share-button">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <button className={styles.fortune_share_retry} onClick={() => window.location.reload()}>Retry</button>
              </div>
            </div>
            <svg className={styles.fortune_ribbon} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
                <path id="svg_6" d="m6.3333,410.42681c72.2575,-138.95673 174.1591,-177.86461 300.14653,-179.71736c125.98743,-1.85276 270.50243,72.2575 324.23236,-37.05513c18.52756,-94.49057 -157.48429,-135.25121 -296.44101,38.90788c-103.75435,53.72993 -309.41031,111.16538 -307.55755,-55.58269c16.67481,-196.39217 418.72293,133.39846 532.97628,233.69433" strokeWidth="10" stroke="#ff0000" fill="none" />
            </svg>
          </div>
    );
}






//description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
{/* <div className={styles.fortune_container}>
            <div className={styles.fortune}>
              <div className={styles.fortune_cover}>
                <div className={styles.fortune_result}>大吉</div>
              </div>
              <div className={styles.fortune_desc}>description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className={styles.fortune_share}>
                Share your fortune
                <div className={styles.fortune_share_buttons}>
                  <TwitterShareButton
                    url={"insert url here"}
                    title={"I got " + "大吉" + " from the Shrine of Bonk!"}
                    className="Demo__some-network__share-button">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <button className={styles.fortune_share_retry} onClick={() => window.location.reload()}>Retry</button>
              </div>
            </div>
            <svg className={styles.fortune_ribbon} width="640" height="480" preserveAspectRatio="xMidYMin" viewBox="0 0 640 480">
                <path id="svg_6" d="m6.3333,410.42681c72.2575,-138.95673 174.1591,-177.86461 300.14653,-179.71736c125.98743,-1.85276 270.50243,72.2575 324.23236,-37.05513c18.52756,-94.49057 -157.48429,-135.25121 -296.44101,38.90788c-103.75435,53.72993 -309.41031,111.16538 -307.55755,-55.58269c16.67481,-196.39217 418.72293,133.39846 532.97628,233.69433" strokeWidth="10" stroke="#ff0000" fill="none" />
            </svg>
          </div> */}