import { FormComponent } from "../components/form";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const LoginPage = () => {
  const toMain = () => {
    console.log("test");
  };
  return (
    <>
      <HeaderLayout />
      <div className="pb-30 m-auto flex items-center">
        <DefaultLayout className="flex flex-col items-center justify-start gap-1 rounded-lg">
          <h1 className="text-heading3 font-bold">Masuk ke Akun</h1>
          <p className="text-bodyMedium font-light">Yuk lanjutin belajarmu di videobelajar.</p>
          <FormComponent className="w-full pt-6" onSubmit={toMain} />
        </DefaultLayout>
      </div>
    </>
  );
};
