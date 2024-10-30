import { useState } from "react";
import { Flow, FlowScreen } from "./flow";
import { Tab, TabPage } from "./tab";
import styles from "./Demo.module.css";

export const FlowDemo = () => {
  const [flowIndex, setFlowIndex] = useState(0);
  const [tabIndex] = useState(0);
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
      <h3>Code:</h3>
      <Tab tabIndex={tabIndex}>
        <TabPage title="Example">
          <pre className={styles.codebox}>
            {`<div className={styles.box}>
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
          `}
          </pre>
        </TabPage>
        <TabPage title="Component">
          <pre className={styles.codebox}>
            {`import React from "react";
import styles from "./Styles.module.css";

interface FlowProps {
  children: React.ReactNode;
  flowIndex: number;
}

interface FlowScreenProps {
  children: React.ReactNode;
  nextAction?: () => void;
  prevAction?: () => void;
  finishAction?: () => void;
}

export const Flow = ({ children, flowIndex }: FlowProps) => {
  const screens = React.Children.toArray(children);
  return (
    <>
      <div>{screens[flowIndex]}</div>
      <div className={styles.steps}>
        {screens.map((item, i) => (
          <div
            key={i}
            className={
              item === screens[flowIndex] ? styles.active : styles.default
            }
          ></div>
        ))}
      </div>
    </>
  );
};

export const FlowScreen = ({
  children,
  nextAction,
  prevAction,
  finishAction
}: FlowScreenProps) => (
  <div>
    {children}
    <div className={styles.actionButtons}>
      <button onClick={prevAction} disabled={!prevAction}>
        Previous
      </button>
      {finishAction ? (
        <button onClick={finishAction}>Finish</button>
      ) : (
        <button onClick={nextAction} disabled={!nextAction}>
          Next
        </button>
      )}
    </div>
  </div>
);
`}
          </pre>
        </TabPage>
        <TabPage title="CSS">
          <pre className={styles.codebox}>
            {`.steps {
  margin-top: 2rem;
  display: flex;
  gap: 12px;
  justify-content: center;
  height: 10px;
}

.default {
  width: 100%;
  background-color: rgb(194, 194, 194);
  height: 10px;
  border-radius: 15px;
}

.active {
  width: 100%;
  background-color: rgb(136, 136, 136);
  height: 10px;
  border-radius: 15px;
}

.actionButtons {
  display: flex;
  justify-content: space-between;
}
`}
          </pre>
        </TabPage>
      </Tab>
    </>
  );
};
