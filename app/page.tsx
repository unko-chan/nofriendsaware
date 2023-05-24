import Image from 'next/image'
import { InputForm } from './components/inputForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <InputForm />
    </main>
  )
}
