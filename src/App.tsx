import React from "react";
import { Header } from "./components/Header/Header";
import { IntroSection } from "./components/Sections/IntroSection";
import { KeyDirectionsSection } from "./components/Sections/SectionTwo";
import { BankingAndExchangesSection } from "./components/Sections/SectionThree";
import { ConclusionSection } from "./components/Sections/Conclusion";
import { References } from "./components/Sections/References";
import { Hero } from "./components/Sections/Hero";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Hero></Hero>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <IntroSection />
        <KeyDirectionsSection></KeyDirectionsSection>
        <BankingAndExchangesSection />
        <ConclusionSection></ConclusionSection>
        <References></References>
      </main>
    </div>
  );
}

export default App;
