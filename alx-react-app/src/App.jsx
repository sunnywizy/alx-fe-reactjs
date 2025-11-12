import { useState } from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <Footer />
        <UserProfile 
          name="Alice Johnson"
          age="25" 
          bio="An adventurous traveler who always seeks out the best local cuisine in New York, Paris, and Tokyo." 
        />

         <UserProfile 
          name="Obasi Sunday"
          age="25" 
          bio="Learning how work and ReactJs" 
        />
      </div>
  )
}

export default App
