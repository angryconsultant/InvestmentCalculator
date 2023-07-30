import logo from '../assets/investment-calculator-logo.png';
import styles from './InvestmentHeader.module.css'

const InvestmentHeader = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Ränta på ränta kalkylator</h1>
    </header>
  );
};

export default InvestmentHeader;
