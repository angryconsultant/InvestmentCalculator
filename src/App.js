import InvestmentHeader from "./components/InvestmentHeader";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  

  const calculateHandler = (userInput) => {
    console.log(userInput);
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onCalculate={calculateHandler} />
      { !userInput && <p style={{textAlign: 'center'}}>Ingen investering beräknad ännu.</p> }
      { userInput && <InvestmentResults data={yearlyData} initialInvestment={userInput['current-savings']} />}
      
    </div>
  );
}

export default App;
