import { QuoterProvider, QuoterContext } from './context/QuoterProvider';
import { AppInsurance } from './components/AppInsurance';
import './App.css'

function App() {
  return (
    <div className="app">
      <QuoterProvider>
        <AppInsurance/>
      </QuoterProvider>
    </div>
  )
}

export default App
