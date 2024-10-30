import React from "react";
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
      <button type="button" onClick={prevAction} disabled={!prevAction}>
        Previous
      </button>
      {finishAction ? (
        <button type="button" onClick={finishAction}>
          Finish
        </button>
      ) : (
        <button type="button" onClick={nextAction} disabled={!nextAction}>
          Next
        </button>
      )}
    </div>
  </div>
);
