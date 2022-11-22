import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../graphql/mutations/signIn";
import { SignInInput, UserToken } from "../../typings/signIn";

export const Form = () => {
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  if (loading) return <>Logando...</>;
  // if (error || !data?.signIn) return <>Deu ruim</>;

  return (
    <>
      <div className="w-sm flex flex-col items-start justify-center py-10 px-8 mt-16 bg-white border border-gray-light mb-16">
        <h1 className="m-auto mb-8 text-center font-medium text-black">
          Olá, entre com e-mail e senha.
        </h1>
        <label className="w-full mb-5" htmlFor="email">
          Seu email
          <input
            className="flex flex-col w-full h-input-hg py-3 px-4 border border-gray-light rounded"
            type="email"
            id="email"
          />
        </label>
        <label className="w-full mb-5" htmlFor="password">
          <div className="flex justify-between">
            <span>Senha</span>
            <span className="text-blue font-medium">Esqueci minha senha</span>
          </div>
          <input
            className="flex flex-col w-full h-input-hg py-3 px-4 border border-gray-light rounded"
            type="password"
            id="password"
          />
        </label>
        <label className="w-full flex items-center gap-2" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          Manter conectado
        </label>
        <button className="w-full py-3 mx-auto mt-8 mb-10 bg-blue rounded text-white">
          Entrar
        </button>
        <hr />
        <h2 className="text-blue-dark font-bold">
          Não possui conta? Cadastre-se
        </h2>
      </div>
    </>
  );
};
