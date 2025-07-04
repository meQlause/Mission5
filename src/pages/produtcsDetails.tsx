import { ButtonUI } from "../components/UIs/button";
import { ImageAsBackgroudUI } from "../components/UIs/imageAsBackground";
import { StarRatingUi } from "../components/UIs/stars";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const ProductsDetailsPage = () => {
  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-5 py-14">
        <p className="text-bodyMedium font-medium">
          Beranda / Desain /
          <strong> Gapai Karir Impianmu Seorang UI/UX Designer & Product Manager</strong>
        </p>
        <ImageAsBackgroudUI className="mb-5" src="/assets/hero.jpg">
          <div className="flex flex-col items-start justify-center gap-5 px-4 py-14 md:px-10 lg:px-20">
            <h1 className="z-20 text-heading3 font-bold text-white md:text-heading1">
              Gapai Karir Impianmu Seorang UI/UX Designer & Product Manager
            </h1>
            <div className="flex flex-col items-start gap-1">
              <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
                Belajar bersama tutor di video course.
              </p>
              <p className="z-20 text-center font-sans text-bodySmall font-light text-white md:text-bodyMedium">
                Kapanpun, dimana pun.
              </p>
            </div>
            <div className="z-30 flex flex-row items-center gap-2">
              <StarRatingUi rating={2.5} size={20} />
              <p className="text-bodyMedium font-medium text-white">
                {2.5} ({86})
              </p>
            </div>
          </div>
        </ImageAsBackgroudUI>

        <div className="flex w-full flex-col justify-between gap-5 md:flex-row">
          <div className="flex flex-col"> test</div>
          <DefaultLayout className="flex max-w-80 flex-col gap-2 rounded-lg p-5">
            <h2 className="text-heading6 font-bold">
              Gapai Karir Impianmu Seorang UI/UX Designer & Product Manager.
            </h2>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-start gap-2">
                <p className="text-bodyMedium font-bold text-[#3ECF4C]">Rp 250K</p>
                <p className="text-bodyMediumfont-bold text-[#7b7c7b] line-through">Rp 250K</p>
              </div>
              <div className="max-w-24 rounded-md bg-[#ffbd3a] p-1 text-bodySmall font-thin text-white">
                Diskon 50%
              </div>
            </div>
            <p className="text-bodyMedium font-thin text-[#0980E2]">
              Penawaran spesial tersisa 2 hari lagi!
            </p>
            <ButtonUI className="font-bold"> Beli Sekarang </ButtonUI>
            <div className="mt-2 flex flex-col">
              <h3 className="text-bodyMedium font-bold"> Kelas ini sudah termasuk</h3>
              <div className="grid grid-cols-2">
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    Ujian Akhir
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    49 Video
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />7 Dokumen
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    Sertifikat
                  </div>
                </div>
                <div className="py-2 text-bodySmall font-thin">
                  <div className="flex flex-row gap-2">
                    <img src="/assets/star.svg" />
                    Pretest
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col">
                <h3 className="text-bodyMedium font-bold"> Bahasa Pengantar</h3>
                <div className="grid grid-cols-2">
                  <div className="py-2 text-bodySmall font-thin">
                    <div className="flex flex-row gap-2">
                      <img src="/assets/star.svg" />
                      Bahasa Indonesia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DefaultLayout>
        </div>
      </div>
    </>
  );
};
