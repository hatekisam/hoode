import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TermsConditions from './pages/TermsConditions'

function App() {

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/terms-conditions' element={<TermsConditions />} />
			</Routes>
		</Router>
	)
}

export default App
