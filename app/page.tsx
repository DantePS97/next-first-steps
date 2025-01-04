import Link from "next/link";

export default function Home() {
  return (

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span className="text-5xl">Hola mundo!</span>
        <Link href="/about" />
      </main>
      
  );
}
