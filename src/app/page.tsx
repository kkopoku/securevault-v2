'use client'

import { AnimatedBackground } from '@/components/background/animated-background'
import { TopNavigation } from '@/components/navigation/top-navigation'
import { HeroSection } from '@/components/pages/landing-page/hero-section'
import { SecureVaultForm } from '@/components/pages/landing-page/secure-vault-form'
import { TrustBadges } from '@/components/pages/landing-page/trust-badges'
import { BottomNavigation } from '@/components/navigation/bottom-navigation'

export default function Home() {

  return (
    <main className="min-h-screen relative font-sans tracking-tighter mb-24">
      <AnimatedBackground />
      <div className="relative z-10">
        <TopNavigation />
        <div className="container mx-auto md:py-2 px-4">
          <>
            <HeroSection />
            <SecureVaultForm />
            <TrustBadges />
          </>
        </div>
        <BottomNavigation />
      </div>
    </main>
  )
}

