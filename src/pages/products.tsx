import { CategoryComponent } from "../components/category";
import { CheckboxUI } from "../components/ui/checkbox";
import { TextInput } from "../components/ui/input";
import { StarRatingUi } from "../components/ui/stars";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";
import { useIsMobile } from "../utils/useIsMobile";

export const ProductsPage = () => {
  const isMobile = useIsMobile();
  const categoryContent: Record<string, React.ReactNode> = {
    "1": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Pemasaran
      </div>
    ),
    "2": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Digital & Teknologi
      </div>
    ),
    "3": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Pengembangan Diri
      </div>
    ),
    "4": (
      <div className="ml-1 flex flex-row items-center justify-start gap-5">
        <CheckboxUI />
        Manajemen Bisnis
      </div>
    ),
  };

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
  ];
  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14 md:flex-row">
        <DefaultLayout className="h-fit w-full max-w-80 rounded-md p-5">
          <div className="mb-3 flex w-full flex-row items-center justify-between">
            <h6 className="text-heading6 font-bold">Filter</h6>
            <h6 className="text-heading6 font-bold text-red-500">Reset</h6>
          </div>
          <DefaultLayout className="mb-5 w-full rounded-xl p-5">
            <div className="flex flex-col justify-between">
              <CategoryComponent
                width="max-w-60"
                title={
                  <div className="flex flex-row items-center gap-3">
                    <img className="h-[18px] w-[20px]" src="/assets/notebook.png" />
                    <h6 className="text-heading6 font-bold">Bidang Studi</h6>
                  </div>
                }
                titleClassName="text-[#3ECF4C]"
                content={categoryContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
          <DefaultLayout className="w-full rounded-xl p-5">
            <div className="flex flex-col justify-between">
              <CategoryComponent
                width="max-w-60"
                title={
                  <div className="flex flex-row items-center gap-3">
                    <img className="h-[18px] w-[20px]" src="/assets/shopping-bag.png" />
                    <h6 className="text-heading6 font-bold">Harga</h6>
                  </div>
                }
                titleClassName="text-[#3ECF4C]"
                content={categoryContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
          <DefaultLayout className="mt-5 w-full rounded-xl p-5">
            <div className="flex flex-col justify-between">
              <CategoryComponent
                width="max-w-60"
                title={
                  <div className="flex flex-row items-center gap-3">
                    <img className="h-[18px] w-[20px]" src="/assets/clock.png" />
                    <h6 className="text-heading6 font-bold">Durasi</h6>
                  </div>
                }
                titleClassName="text-[#3ECF4C]"
                content={categoryContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
        </DefaultLayout>
        <div className="flex flex-col py-2">
          <div className="flex flex-row justify-end gap-3" aria-disabled>
            <div className="relative">
              <TextInput
                className="pointer-events-none max-w-36 cursor-default bg-white"
                placeholder="Urutkan"
                disabled
              />
              <img className="absolute right-2 top-[9px]" src="/assets/down.png" />
            </div>
            <div className="relative">
              <TextInput placeholder="Cari Kelas" />
              <img className="absolute right-3 top-[9px]" src="/assets/search.png" />
            </div>
          </div>
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
          <div className="flex flex-row justify-end gap-2 pt-8">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-[#F4F5FA]">
              <img src="/assets/keyboard-arrow-left.png" />
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent bg-yellow-300 text-white">
              1
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
              2
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
              3
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
              4
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-transparent">
              5
            </div>
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-[#F4F5FA]">
              <img src="/assets/keyboard-arrow-right.png" />
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
