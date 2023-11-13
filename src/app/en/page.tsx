import Link from "next/link";

export default function EnHomePage() {
  return (
    <main className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-full flex items-center flex-col justify-between">
        <div className="mt-44 flex items-center flex-col gap-6 justify-start">
          <h1 className="text-t1 text-center">
            SORRY. THIS PAGE IS NOT READY YET.
          </h1>
          <Link href="/">
            <button className="text-b1 text-center w-28 h-12 rounded-xl bg-darkGreen text-white">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
