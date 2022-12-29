import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import TipButtonGroup from "../components/ButtonGroup";
import { useRouter } from "next/router";

export default function Home() {
  const [tip, setTip] = useState(5);
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("2");
  const router = useRouter();

  const handleSetTip = (tipSelection: string) => {
    const tipVal = parseFloat(tipSelection.replace("%", ""));
    setTip(tipVal);
  };

  const handleSetBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.value);
  };

  const billFloat = parseFloat(bill);
  const peopleInt = parseInt(people);

  let tipAmtPerPerson = 0;
  let totalAmt = 0;

  if (billFloat) {
    const tipAmt = billFloat * (tip / 100);
    tipAmtPerPerson = tipAmt / peopleInt;
    totalAmt = (billFloat + tipAmt) / peopleInt;
  }

  return (
    <>
      <main>
        <div>
          <h1>Splitter</h1>
        </div>
        <div className={styles.container}>
          <div className={styles["inner-container"]}>
            <div className={styles["left-side"]}>
              <div>
                <label htmlFor="bill">Bill</label>
                <input
                  id="bill"
                  name="bill"
                  className={styles["input-text"]}
                  type="text"
                  value={bill}
                  onChange={handleSetBill}
                />
              </div>
              <label htmlFor="tip_pct">Select Tip %</label>
              <TipButtonGroup
                buttons={["5%", "10%", "15%", "25%", "50%"]}
                doSomethingAfterClick={handleSetTip}
              />
              <div>
                <label htmlFor="people">Number of People</label>
                <input
                  name="people"
                  className={styles["input-text"]}
                  type="text"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
            </div>
            <div className={styles["right-side"]}>
              <div className={styles["total-container"]}>
                <div>
                  <div className={styles["text-category"]}>Tip Amount</div>
                  <div
                    className={
                      styles["text-category"] +
                      " " +
                      styles["text-category-sub"]
                    }
                  >
                    / person
                  </div>
                </div>
                <div className={styles["text-currency-val"]}>
                  {"$" + tipAmtPerPerson.toFixed(2)}
                </div>
                <div>
                  <div className={styles["text-category"]}>Total</div>
                  <div
                    className={
                      styles["text-category"] +
                      " " +
                      styles["text-category-sub"]
                    }
                  >
                    / person
                  </div>
                </div>

                <div className={styles["text-currency-val"]}>
                  {"$" + totalAmt.toFixed(2)}
                </div>
              </div>
              <button
                className={styles["reset-btn"]}
                onClick={() => router.reload()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
