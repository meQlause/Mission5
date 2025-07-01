export const HeaderLayout = () => {
  return (
    <header>
      <img className="h-[60px]" src="/assets/logo.png" alt="Logo videobelajar" />
      <div>
        <img
          className="block h-[12px] w-[18px] md:hidden"
          src="/assets/dropdown-icon.png"
          alt="Dropdown menu"
        />
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-10">
            <div>Kategori</div>
            <img className="avatar h-[45px]" src="/assets/avatar.png" alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};
