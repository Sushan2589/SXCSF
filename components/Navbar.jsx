const Navbar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#35332c] px-10 py-3 bg-[#161512]">
      <div className="flex items-center gap-4 text-white">
        
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          SXCSF
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
       
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#FFD700] text-[#161512] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Get Started</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar