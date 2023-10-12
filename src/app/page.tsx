import Calculator from "./components/calculator"

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen bg-gray-200">
      <div className="w-4/12 mt-5">
        <Calculator/>
      </div>
    </main>
  )
}
