import { DividerUI } from "../components/ui/divider";

export const FooterLayout = () => {
  return (
    <footer className="flex flex-col pt-10">
      <div className="flex w-full flex-col justify-between gap-5 pb-3 md:flex-row md:pb-7">
        <div className="flex flex-col gap-2">
          <img className="h-[52px] max-w-40" src="/assets/logo.png" alt="Logo videobelajar" />
          <h3 className="text-heading6 font-bold">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id
          </h3>
          <div>
            <p className="text-bodyMedium font-medium">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-bodyMedium font-medium">+62-877-7123-1234</p>
          </div>
        </div>
        <div className="my-5 flex flex-col gap-10 md:my-0 md:flex-row md:gap-10">
          <ul className="flex w-full flex-row items-center justify-between md:flex-col md:items-start md:justify-start">
            <p className="text-heading6 font-bold md:mb-5">Kategori</p>
            <div className="hidden flex-col gap-2 md:flex">
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">
                Digital & Teknologi
              </li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Pemasaran</li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Manajemen Bisnis</li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">
                Pengembangan Diri
              </li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Desain</li>
            </div>
            <img
              className="mr-5 block h-[15px] md:hidden"
              src="/assets/right-arrow.png"
              alt="Logo"
            />
          </ul>
          <ul className="flex w-full flex-row justify-between md:flex-col md:items-start md:justify-start">
            <p className="text-heading6 font-bold md:mb-5">Perusahaan</p>
            <div className="hidden flex-col gap-2 md:flex">
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Tentang Kami</li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">FAQ</li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">
                Kebijakan Privasi
              </li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">
                Ketentuan Layanan
              </li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Bantuan</li>
            </div>
            <img
              className="mr-5 block h-[15px] md:hidden"
              src="/assets/right-arrow.png"
              alt="Logo"
            />
          </ul>
          <ul className="flex w-full flex-row justify-between md:flex-col md:items-start md:justify-start">
            <p className="text-heading6 font-bold md:mb-5">Komunitas</p>
            <div className="hidden flex-col gap-2 md:flex">
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Tips Sukses</li>
              <li className="text-bodyMedium font-normal md:whitespace-nowrap">Blog</li>
            </div>
            <img
              className="mr-5 block h-[15px] md:hidden"
              src="/assets/right-arrow.png"
              alt="Logo"
            />
          </ul>
        </div>
      </div>
      <DividerUI />
      <div className="flex w-full flex-col-reverse justify-start gap-2 py-5 md:flex-row md:justify-between">
        <p className="text-bodyMedium font-light">@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="flex flex-row gap-2">
          <div className="circle cursor-pointer hover:opacity-80">
            <img src="/assets/In.png" alt="Logo" />
          </div>
          <div className="circle cursor-pointer hover:opacity-80">
            <img style={{ width: "7px", height: "11px" }} src="/assets/facebook.png" alt="Logo" />
          </div>
          <div className="circle cursor-pointer hover:opacity-80">
            <img src="/assets/instagram.png" alt="Logo" />
          </div>
          <div className="circle cursor-pointer hover:opacity-80">
            <img src="/assets/twitter.png" alt="Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};
