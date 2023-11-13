export default function Downloadbutton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="relative inline-flex justify-center items-center m-0 font-semibold w-20 h-7 text-b4 rounded-2xl mr-3 bg-darkGreen text-white text-center align-middle bg-none border-transparent">
      {children}
    </button>
  );
}
