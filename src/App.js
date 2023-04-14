import Header from "./components/Header";
import Lesson from "./components/Lesson";
import LessonCardSection from "./components/LessonCardSection"
import data from "./database/lessonData";
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
      {/* <Lesson data={data[1]} /> */}

      {/* <LessonCardSection /> */}
    </Router>
  );
}

export default App;
