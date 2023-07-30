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
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
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
            <td>{formatter.format(props.initialInvestment + (dataPoint.yearlyContribution * dataPoint.year))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentResults;
