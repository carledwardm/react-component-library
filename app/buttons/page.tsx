"use client";
import Link from "next/link";
import styles from "./Buttons.module.scss";
import LoadMore from "@/components/Buttons/LoadMore";
import StandardButton from "@/components/Buttons/StandardButton";
import { FaChevronRight } from "react-icons/fa";
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

export default function Header() {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="main">
      <section className={styles.componentsSection}>
        <h1 className={styles.pageTitle}>Button Components</h1>
        <hr className={styles.divider} />

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

        </div>

<CodeBlock files={standardButtonFiles} />
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

        </div>

        <CodeBlock files={loadMoreFiles} />
      </section>
    </main>
  );
}