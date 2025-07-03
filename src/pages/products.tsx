import { CategoryComponent } from "../components/category";
import { CheckboxUI } from "../components/ui/checkbox";
import { DefaultLayout } from "../layouts/default";
import { FooterLayout } from "../layouts/footer";
import { HeaderLayout } from "../layouts/header";

export const ProductsPage = () => {
  const content: Record<string, React.ReactNode> = {
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
  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-row gap-5 py-14">
        <DefaultLayout className="w-full max-w-80 rounded-md p-5">
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
                content={content}
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
                content={content}
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
                content={content}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
        </DefaultLayout>
      </div>
      <FooterLayout />
    </>
  );
};
