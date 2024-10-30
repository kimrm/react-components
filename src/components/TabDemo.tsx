import { Tab, TabPage } from "./tab";
import styles from "./Demo.module.css";

export const TabDemo = () => {
  return (
    <>
      <Tab tabIndex={0}>
        <TabPage title="Tab 1">
          <div className={styles.box}>
            <h2>Tab 1</h2>
            <p>Tab 1 content</p>
          </div>
        </TabPage>
        <TabPage title="Tab 2">
          <div className={styles.box}>
            <h2>Tab 2</h2>
            <p>Tab 2 content</p>
          </div>
        </TabPage>
        <TabPage title="Tab 3">
          <div className={styles.box}>
            <h2>Tab 3</h2>
            <p>Tab 3 content</p>
          </div>
        </TabPage>
      </Tab>
      <h3>Code:</h3>
      <Tab tabIndex={0}>
        <TabPage title="Example">
          <pre
            className={styles.codebox}
          >{`import { Tab, TabPage } from "./tab";
<Tab tabIndex={0}>
    <TabPage title="Tab 1">
        <div className={styles.box}>
        <h2>Tab 1</h2>
        <p>Tab 1 content</p>
        </div>
    </TabPage>
    <TabPage title="Tab 2">
        <div className={styles.box}>
        <h2>Tab 2</h2>
        <p>Tab 2 content</p>
        </div>
    </TabPage>
    <TabPage title="Tab 3">
        <div className={styles.box}>
        <h2>Tab 3</h2>
        <p>Tab 3 content</p>
        </div>
    </TabPage>
</Tab>`}</pre>
        </TabPage>
        <TabPage title="Component">
          <pre className={styles.codebox}>{`import React from "react";
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
`}</pre>
        </TabPage>
        <TabPage title="CSS">
          <pre className={styles.codebox}>{`.buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
`}</pre>
        </TabPage>
      </Tab>
    </>
  );
};
