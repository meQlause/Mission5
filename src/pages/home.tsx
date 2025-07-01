import { ButtonComponent } from "../components/ui/button";
import { DividerUI } from "../components/ui/divider";
import { TextInput } from "../components/ui/input";
import { StarRatingUi } from "../components/ui/stars";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";
import { useIsMobile } from "../utils/useIsMobile";

export const HomePage = () => {
  const isMobile = useIsMobile();
  const contents = [
    {
      id: 1,
      contentImage: "assets/contents/content1.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar1.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 2,
      contentImage: "assets/contents/content2.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar2.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 3,
      contentImage: "assets/contents/content3.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar3.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 4,
      contentImage: "assets/contents/content4.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar4.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 5,
      contentImage: "assets/contents/content5.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar5.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 6,
      contentImage: "assets/contents/content6.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar6.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 7,
      contentImage: "assets/contents/content7.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar7.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 8,
      contentImage: "assets/contents/content8.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar8.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
    {
      id: 9,
      contentImage: "assets/contents/content9.jpg",
      title: "Big Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
      avatar: "assets/contents/avatar9.png",
      name: "Jena Ortega",
      position: "Senior accountant di Gojek",
      rating: 3.5,
      reviewCount: 86,
      price: "Rp 300K",
    },
  ];

  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-16 py-14">
        <div className="relative mx-auto h-fit max-w-[1100px]">
          <img
            src="/assets/hero.jpg"
            className="absolute z-10 h-full w-full overflow-hidden rounded-xl object-cover brightness-[.3]"
          />
          <div className="flex w-full flex-col items-center justify-center gap-5 px-4 py-10 md:px-40">
            <h1 className="z-20 text-center text-heading3 font-bold text-white md:text-heading1">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
              berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
              interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <ButtonComponent className="z-20 mt-4 max-w-96 px-2 py-3 text-bodySmall md:mt-5 md:text-bodyMedium">
              Temukan Video Course untuk Dipelajari!
            </ButtonComponent>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-heading3 font-bold">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="text-bodySmall font-light md:text-bodyMedium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
          <ul className="mt-5 flex flex-row gap-10">
            {["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"].map(
              (category) => (
                <li
                  key={category}
                  className={`cursor-pointer font-sans font-medium hover:text-red-600 ${category === "Semua Kelas" ? "text-red-600" : ""}`}
                  onClick={() => console.log(category)}
                >
                  {category}
                </li>
              )
            )}
          </ul>
          <DividerUI width="5%" color="#dc2626" thick="5px" />

          <div className="mt-5 box-border grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 py-[20px_10px]">
            {!isMobile
              ? contents.map((item) => (
                  <DefaultLayout className="rounded-md p-7">
                    <div className="flex flex-col gap-1">
                      <img
                        className="mb-5 h-[200px] w-auto rounded-md object-cover"
                        src={item.contentImage}
                        alt={item.title}
                      />
                      <h3 className="text-heading5 font-bold">{item.title}</h3>
                      <p className="text-bodyMedium">{item.description}</p>
                      <div className="mt-5 flex items-center gap-5">
                        <img className="h-10 w-10 rounded-sm" src={item.avatar} alt={item.name} />
                        <div className="flex flex-col">
                          <h4 className="text-heading6 font-bold">{item.name}</h4>
                          <p className="text-bodyMedium font-medium">
                            Senior accountant di <strong>Gojek</strong>
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <StarRatingUi rating={item.rating} size={20} />
                          <p className="text-bodyMedium font-medium">
                            {item.rating} ({item.reviewCount})
                          </p>
                        </div>
                        <p className="text-heading4 font-bold text-[#3ECF4C]">{item.price}</p>
                      </div>
                    </div>
                  </DefaultLayout>
                ))
              : contents.map((item) => (
                  <DefaultLayout className="rounded-md p-4">
                    <div className="flex flex-row gap-3">
                      <img
                        className="h-[86px] w-[85px] rounded-md object-cover"
                        src={item.contentImage}
                        alt={item.title}
                      />
                      <div className="flex flex-col justify-between">
                        <h3 className="text-heading6 font-bold">{item.title}</h3>
                        <div className="flex items-center gap-3">
                          <img className="h-8 w-8 rounded-sm" src={item.avatar} alt={item.name} />
                          <div className="flex flex-col">
                            <h4 className="text-bodyMedium font-bold">{item.name}</h4>
                            <p className="text-bodySmall font-medium">Senior accountant</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center gap-2">
                        <StarRatingUi rating={item.rating} size={20} />
                        <p className="text-bodyMedium font-medium">
                          {item.rating} ({item.reviewCount})
                        </p>
                      </div>
                      <p className="text-heading4 font-bold text-[#3ECF4C]">{item.price}</p>
                    </div>
                  </DefaultLayout>
                ))}
          </div>
        </div>
        <div className="relative mx-auto h-fit max-w-[1100px]">
          <img
            src="/assets/hero.jpg"
            className="absolute z-10 h-full w-full overflow-hidden rounded-xl object-cover brightness-[.3]"
          />
          <div className="flex w-full flex-col items-center justify-center gap-5 px-4 py-10 md:px-40">
            <h6>NEWSLETTER</h6>
            <h1 className="z-20 text-center text-heading3 font-bold text-white md:text-heading1">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari
              program-program terbaik hariesok.id
            </p>
            <div className="relative w-full max-w-[400px]">
              <TextInput placeholder="Masukan Emailmu" label="Email" className="z-10 w-full py-3" />
              <ButtonComponent
                variant="quaternary"
                className="absolute right-3 top-2/3 z-10 max-w-28 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                Subscribe
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
