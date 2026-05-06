"use client";
import styles from "./Buttons.module.scss";
import LoadMore from "@/components/Buttons/LoadMore";
import StandardButton from "@/components/Buttons/StandardButton";
import ButtonGroup from "@/components/Buttons/ButtonGroup";
import { useState } from "react";
import CodeBlock from "@/appComponents/CodeBlock/CodeBlock";

const standardButtonFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Buttons/StandardButton/StandardButton.tsx",
  },
  {
    name: "Module.css",
    filePath: "components/Buttons/StandardButton/StandardButton.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Buttons/StandardButton/index.tsx",
  },
];

const loadMoreFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Buttons/LoadMore/LoadMore.tsx",
  },
  {
    name: "Module.css",
    filePath: "components/Buttons/LoadMore/LoadMore.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Buttons/LoadMore/index.tsx",
  },
];

const buttonGroupFiles = [
  {
    name: "Component.tsx",
    filePath: "components/Buttons/ButtonGroup/ButtonGroup.tsx",
  },
  {
    name: "Module.css",
    filePath: "components/Buttons/ButtonGroup/ButtonGroup.module.scss",
  },
  {
    name: "Index.tsx",
    filePath: "components/Buttons/ButtonGroup/index.tsx",
  },
];

export default function Header() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="main">
      <section className={styles.componentsSection}>
        <div className={styles.pageTitleContainer}>
          <h1 className={styles.pageTitle}>Button Components</h1>
          <hr className={styles.divider} />
        </div>

        <div className={styles.componentContainer}>
          <h2 className={styles.componentTitle}>Standard Button</h2>
          <div className={styles.componentDisplay}>
            <StandardButton size="small" text="Button" primary={true} />
            <StandardButton size="med" text="Button" primary={true} />
            <StandardButton size="large" text="Button" primary={true} />
          </div>
          <p className={styles.descriptionText}>
            A standard button component. Accepts a text argument at this time.
          </p>
        <CodeBlock files={standardButtonFiles} />
        </div>

        <hr className={styles.divider} />

        <div className={styles.componentContainer}>
          <h2 className={styles.componentTitle}>Load More Button</h2>
          <div className={styles.componentDisplay}>
            <LoadMore increaseFunction={setCount} increaseAmount={1} size="small" text="Load More" />
            <LoadMore increaseFunction={setCount} increaseAmount={1} size="med" text="Load More" />
            <LoadMore increaseFunction={setCount} increaseAmount={1} size="large" text="Load More" />
          </div>
          <div className={styles.countDemo}>
            <p className={styles.count}>Button Click Counter: {count}</p>
          </div>
          <p className={styles.descriptionText}>
            An incremental counter button designed to take a setter function for a numerical count and an increase amount.
          </p>
          <CodeBlock files={loadMoreFiles} />
        </div>

        <hr className={styles.divider} />

        <div className={styles.componentContainer}>
          <h2 className={styles.componentTitle}>Button Group</h2>
          <div className={styles.componentDisplay}>
            <ButtonGroup />
          </div>
          <p className={styles.descriptionText}>
            A button group component for navigation or pagination. Displays 3 buttons in a row with equal widths.
          </p>
          <CodeBlock files={buttonGroupFiles} />
        </div>
      </section>
    </main>
  );
}