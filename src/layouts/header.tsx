import logo from "../assets/logo.png";
import dropdown from "../assets/dropdown-icon.png";
import avatar from "../assets/avatar.png";

export const HeaderLayout = () => {
  return (
    <header>
      <img className="h-[60px]" src={logo} alt="Logo videobelajar" />
      <div>
        <img className="block h-[12px] w-[18px] md:hidden" src={dropdown} alt="Dropdown menu" />
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-10">
            <div>Kategori</div>
            <img className="avatar h-[45px]" src={avatar} alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};
