
// import { Inter } from 'next/font/google'
import Login from './login'

// const inter = Inter({ subsets: ['greek'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
          <Login handleChange='change'/>
    
    </main>
  )
}
