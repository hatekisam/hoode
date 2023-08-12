import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TermsConditions from './pages/TermsConditions'
import BecomeProvider from './pages/BecomeProvider'

function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/terms-conditions' element={<TermsConditions />} />
				<Route path='/become-provider' element={<BecomeProvider />} />
			</Routes>
		</Router>
	)
}

export default App
