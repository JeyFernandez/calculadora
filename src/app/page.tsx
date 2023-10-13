import Calculator from "./components/calculator"

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen  bg-gradient-to-r from-purple-500 to-pink-50">
      <div className="w-4/12 mt-5">
        <Calculator />
      </div>
    </main>
  );
}
