import React from "react";
import styles from "./styles.module.css";

interface TabProps {
  children: React.ReactNode;
  tabIndex: number;
}

interface TabPageProps {
  children: React.ReactNode;
  title: string;
}

interface TabButtonsProps {
  children: React.ReactNode;
}

export const Tab = ({ children, tabIndex }: TabProps) => {
  const tabs = React.Children.toArray(children);
  const [currentTabIndex, setCurrentTabIndex] = React.useState(tabIndex);

  const handleClick = (i: number) => {
    setCurrentTabIndex(i);
  };

  return (
    <div>
      <TabButtons>
        {React.Children.map(children, (child, i) =>
          React.isValidElement(child) && "title" in child.props ? (
            <button
              key={i}
              onClick={() => handleClick(i)}
              style={{
                backgroundColor: i === currentTabIndex ? "blue" : "gray"
              }}
            >
              {child.props.title}
            </button>
          ) : null
        )}
      </TabButtons>
      <TabContent>{tabs[currentTabIndex]}</TabContent>
    </div>
  );
};

export const TabPage = ({ children, title }: TabPageProps) => {
  return <>{children}</>;
};

const TabButtons = ({ children }: TabButtonsProps) => {
  return <div className={styles.buttons}>{children}</div>;
};

const TabContent = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
