import Header from "./components/Header";
import Lesson from "./components/Lesson";
import LessonCardSection from "./components/LessonCardSection"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <LessonCardSection />} />
        <Route path='lesson/:id' element={ <Lesson /> } />
        <Route path='*' element={ <LessonCardSection /> } /> {/* Later add error */}
      </Routes>
    </Router>
  );
}

export default App;
