function Downloadbutton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative inline-flex justify-center items-center m-0 font-semibold w-20 h-7 text-b4 rounded-2xl mr-3 bg-darkGreen text-white text-center align-middle bg-none border-transparent">
      {children}
    </button>
  );
}

function StoreDownloadButton({
  downloadLink,
  children,
}: {
  downloadLink: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={downloadLink}
      className="py-3 px-5 text-white text-b2 bg-black mr-1 rounded-lg font-bold flex-row items-center gap-2 relative inline-flex justify-center m-0"
    >
      {children}
    </a>
  );
}

export { Downloadbutton, StoreDownloadButton };
