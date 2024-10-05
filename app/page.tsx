import './styles/theme.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PaperSection from './components/PaperSection'
import FeaturesSection from './components/FeaturesSection'
import AdditionalLandingSections from './components/PlusSection'
import CypherSection from './components/CypherSection'
import Footer from './components/Footer'

export default function IPDMLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <AdditionalLandingSections />
        <CypherSection />
        <PaperSection />
      </main>
      <Footer />
    </div>
  )
}