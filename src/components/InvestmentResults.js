import styles from "./InvestmentResults.module.css";

const InvestmentResults = (props) => {
  console.log(props.data);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>År</th>
          <th>Totalt Sparande</th>
          <th>Ränta (År)</th>
          <th>Ränta (totalt)</th>
          <th className={styles["hidden-mobile"]}>Investerat kapital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((dataPoint) => (
          <tr key={dataPoint.year}>
            <td>{dataPoint.year}</td>
            <td>{formatter.format(dataPoint.savingsEndOfYear)}</td>
            <td>{formatter.format(dataPoint.yearlyInterest)}</td>
            <td>
              {formatter.format(dataPoint.savingsEndOfYear -
                props.initialInvestment -
                dataPoint.yearlyContribution * dataPoint.year)}
            </td>
            <td className={styles["hidden-mobile"]}>{formatter.format(props.initialInvestment + (dataPoint.yearlyContribution * dataPoint.year))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentResults;
