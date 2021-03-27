import { Keyframes, Frame } from "./react-keyframes";
import styles from "./terminal.module.css";
import { useState } from "react";

const sleepDuration = 500;
const getTypingDuration = () => 80 + 80 * (Math.random() - 0.5);

const Line = ({ text, noPrompt = false, noCaret = false }) => (
  <>
    {!noPrompt && <span>▲ ~ </span>}
    {text}
    {!noCaret && <span className={styles.caret} />}
  </>
);

const Terminal = () => {
  const [lineCount, setLineCount] = useState(0);

  const renderLine = (text) => {
    const frames = [];

    // starting frame
    frames.push(
      <Frame duration={sleepDuration} key={`${text}-first`}>
        <Line text={null} />
      </Frame>
    );

    // typing out the line
    for (let i = 0; i < text.length; i++) {
      const isLastLetter = i === text.length - 1;
      const duration = isLastLetter ? sleepDuration : getTypingDuration();
      frames.push(
        <Frame duration={duration} key={`${text}-${i}`}>
          <Line text={text.slice(0, i + 1)} />
        </Frame>
      );
    }

    // ending frame
    frames.push(
      <Frame key={`${text}-last`}>
        <Line text={text} noCaret />
      </Frame>
    );

    return (
      <Keyframes component="p" onEnd={() => setLineCount((c) => c + 1)}>
        {frames}
      </Keyframes>
    );
  };

  return (
    <div className={styles.root}>
      <div
        className={`${styles.inner}${lineCount >= 6 ? " " + styles.rose : ""}`}
      >
        <div className={styles.header}>
          <span className={styles.icon} />
          <span className={styles.icon} />
          <span className={styles.icon} />
        </div>
        <div className={styles.body}>
          {renderLine(
            "# Performant Commits is a new, sleeker, more efficient way to write your commit messages"
          )}
          {lineCount >= 1 &&
            renderLine(
              "# Avoids all of the jargon and focuses on human-machine readability & execution"
            )}
          {lineCount >= 2 && renderLine("# Beautiful, elegant, and modern")}
          {lineCount >= 3 && renderLine("# git add .")}
          {lineCount >= 4 &&
            renderLine(
              'git commit -m "ft[state/Audio] => 🎙 Improve volume and tonality for audio rendering stores"'
            )}
          {lineCount >= 5 && renderLine("git push -u origin develop")}
          {lineCount >= 6 && (
            <>
              <p className={styles.green}>
                <Line
                  text={`Enumerating objects: 21, done. remote: Resolving deltas: 100% (8/8), completed with 8 local objects.\n`}
                  noPrompt
                  noCaret
                />
              </p>
              <p>
                <Line text={null} />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
