import { useState } from "react";
import { Flow, FlowScreen } from "./flow";
import styles from "./Demo.module.css";

export const FlowDemo = () => {
  const [flowIndex, setFlowIndex] = useState(0);
  return (
    <>
      <div className={styles.box}>
        <div className={styles.flowContainer}>
          <Flow flowIndex={flowIndex}>
            <FlowScreen nextAction={() => setFlowIndex(1)}>
              <h2 className={styles.flowItemHeading}>Screen 1</h2>
              <p>Start your customer journey here!</p>
            </FlowScreen>
            <FlowScreen
              nextAction={() => setFlowIndex(2)}
              prevAction={() => setFlowIndex(0)}
            >
              <h2 className={styles.flowItemHeading}>Screen 2</h2>
              <p>You have now reached screen 2</p>
            </FlowScreen>
            <FlowScreen
              nextAction={() => setFlowIndex(3)}
              prevAction={() => setFlowIndex(1)}
            >
              <h2 className={styles.flowItemHeading}>Screen 3</h2>
              <p>You have now reached screen 3</p>
            </FlowScreen>
            <FlowScreen
              prevAction={() => setFlowIndex(2)}
              finishAction={() => alert("finished!")}
            >
              <h2 className={styles.flowItemHeading}>Screen 4</h2>
              <p>You have now reached screen 4</p>
            </FlowScreen>
          </Flow>
        </div>
      </div>
    </>
  );
};
