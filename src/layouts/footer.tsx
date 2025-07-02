import { CategoryComponent } from "../components/category";
import { DividerUI } from "../components/ui/divider";

export const FooterLayout = () => {
  const perusahaanContent: Record<string, string>[] = [
    {
      "Tentang Kami": "#",
      FAQ: "#",
      "Kebijakan Privasi": "#",
      "Ketentuan Layanan": "#",
      Bantuan: "#",
    },
  ];

  const kategoriContent: Record<string, string>[] = [
    {
      "Digital & Teknologi": "#",
      Pemasaran: "#",
      "Manajemen Bisnis": "#",
      "Pengembangan Diri": "#",
      Desain: "#",
    },
  ];

  const komunitasContent: Record<string, string>[] = [
    {
      "Tips Sukses": "#",
      Blog: "#",
    },
  ];
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
        <div className="m-0 my-5 flex flex-col gap-10 md:flex-row md:items-start md:justify-start">
          <CategoryComponent title="Kategori" content={kategoriContent} />
          <CategoryComponent title="Perusahaan" content={perusahaanContent} />
          <CategoryComponent title="Komunitas" content={komunitasContent} />
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
