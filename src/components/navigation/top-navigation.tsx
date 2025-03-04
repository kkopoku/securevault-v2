'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { useRouter } from 'next/navigation'

export function TopNavigation() {

  // const router = useRouter()

  return (
    <motion.nav
      className="py-4 px-6 flex justify-between items-center border-b border-gray-400"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex items-center space-x-1">
        <motion.div
          className="w-7 h-7 rounded-lg bg-purple-600 text-white text-base font-bold flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SV
        </motion.div>
        <span className="text-sm font-semibold text-gray-900">SecureVault</span>
      </Link>
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <Link href="/" className="text-black hover:text-purple-600 transition-colors">
          Features
        </Link>
        <Link href="/" className="text-black hover:text-purple-600 transition-colors">
          Pricing
        </Link>
        <Link href="/" className="text-black hover:text-purple-600 transition-colors">
          FAQ
        </Link>
      </div>
      {/* <div className="flex items-center space-x-4">
        <Button variant="ghost" className="transition-all hidden hover:text-purple-600 md:inline-flex" onClick={()=>router.push("/auth/login")}>
          Log in
        </Button>
        <Button className='hover:bg-purple-600 transition-all' onClick={()=>router.push("/auth/signup")}>Get Started</Button>
      </div> */}
    </motion.nav>
  )
}