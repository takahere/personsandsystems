"use client";

import { useState } from "react";
import Header from "@/components/Header";
import VisualStage from "@/components/VisualStage";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  // State: Current active section index (0, 1, 2)
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Header - Full width, fixed at top */}
      <Header />

      {/* Content area - Below header */}
      <div className="pt-12 h-full">
        {/* Left: Visual Stage (70% width) - Nature backgrounds + Hero text */}
        <div className="fixed left-0 top-12 bottom-0 w-[70%]">
          <VisualStage currentSection={currentSection} />
        </div>

        {/* Right: Fixed Sidebar (30% width) */}
        <div className="fixed right-0 top-12 bottom-0 w-[30%]">
          <Sidebar
            currentSection={currentSection}
            onSectionChange={setCurrentSection}
          />
        </div>
      </div>
    </main>
  );
}
