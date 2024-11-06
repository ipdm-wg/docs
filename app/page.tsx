import './styles/theme.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PaperSection from './components/PaperSection'
import FeaturesSection from './components/FeaturesSection'
import AdditionalLandingSections from './components/PlusSection'
import WindexerSection from './components/WindexerSection'
import Footer from './components/Footer'

export default function IPDMLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <AdditionalLandingSections />
        <WindexerSection />
        <PaperSection />
      </main>
      <Footer />
    </div>
  )
}