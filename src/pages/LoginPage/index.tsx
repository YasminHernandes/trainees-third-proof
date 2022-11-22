import { Form } from "../../components";
import { Header } from "../../components/Header";
import { GlobalLayout } from "../../layouts/global";

export const LoginPage = () => {
  return (
    <>
      <GlobalLayout>
        <Header className="w-full">
          <div className="text-center text-3xl font-bold text-white">
            Academy
            <span className="text-green ml-2">Store</span>
          </div>
        </Header>
      </GlobalLayout>
      <div className="h-full flex flex-col items-center justify-center overflow-hidden">
        <Form />
      </div>
    </>
  );
};
