'use client'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 flex-col items-center justify-center text-center p-6">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
        <Heart className="text-red-500 w-20 h-20" fill="red"/>
      </motion.div>
      <h1 className="text-5xl font-bold text-pink-700 mt-4">Happy Birthday Sayang!</h1>
      <p className="mt-4 text-lg">Aku bikin website ini khusus buat kamu 💖</p>
    </main>
  )
}
