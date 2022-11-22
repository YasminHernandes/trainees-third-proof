import { Header } from "../../components";
import { GlobalLayout } from "../../layouts/global";

export const DashboardPage = () => {
  return (
    <>
      <GlobalLayout>
        <Header className="px-6 w-full flex justify-between">
          <div className="flex items-center gap-2">
            <img src="/src/assets/store.svg" alt="" />
            <h1 className="font-normal text-white">Academy Store</h1>
          </div>
          <div className="flex items-center gap-6 ">
            <img src="/src/assets/help.svg" alt="help icon" />
            <img src="/src/assets/notification.svg" alt="notification icon" />
            <div className="flex gap-4 items-center">
              <img src="/src/assets/usericon.svg" alt="user icon" />
              <p className="user-name text-white font-medium">Gustavo Silva</p>
            </div>
          </div>
        </Header>
      </GlobalLayout>
      <div className="h-full flex">
        <div className="menu-block flex flex-col h-full bg-white">
          <nav className="px-4 pt-24">
            <ul className="w-full flex flex-col gap-4">
              <li className="flex gap-2 bg-active-bg p-3 text-blue font-semibold">
                <img src="/src/assets/relatorios.svg" alt="" />
                Relatorios
              </li>
              <li className="flex gap-2 p-3 font-medium">
                <img src="/src/assets/pra-vender.svg" alt="" />
                Pra vender
              </li>
              <li className="flex gap-2 p-3 font-medium">
                <img src="/src/assets/assinatura.svg" alt="" />
                Assinaturas
              </li>
              <li className="flex gap-2 p-3 font-medium">
                <img src="/src/assets/financeiro.svg" alt="" />
                Financeiro
              </li>
              <li className="flex gap-2 p-3 font-medium">
                <img src="/src/assets/configs.svg" alt="" />
                Configurações
              </li>
              <li className="flex gap-2 p-3 font-medium">
                <img src="/src/assets/ferramentas.svg" alt="" />
                Ferramentas
              </li>
            </ul>
          </nav>
        </div>
        <div className="content-block w-full flex flex-col gap-2 pt-16">
          <div className="flex flex-col mt-8 ml-8">
            <h2 className="font-semibold text-3xl">Olá, Gustavo</h2>
            <p className="font-medium text-gray-medium">
              Veja abaixo o resumo da sua organização
            </p>
          </div>
          <div className="w-auto flex flex-col bg-white rounded-lg mx-8 mt-8 px-6">
            <nav>
              <ul className="w-full flex gap-8">
                <li className="border-b px-4 py-6 text-blue font-bold text-sm">
                  Receita
                </li>
                <li className="px-4 py-6 font-bold text-sm">Parceiros</li>
                <li className="px-4 py-6 font-bold text-sm">Comissões</li>
              </ul>
            </nav>

            <h3 className="mt-6 font-bold text-xl mb-4">Receita</h3>
            <ul className="flex gap-2 mb-3">
              <li className="w-auto py-2 px-4 text-xs bg-active-bg text-center flex items-center rounded">
                Hoje
              </li>
              <li className="w-auto py-2 px-4 text-xs bg-active-bg text-center flex items-center rounded">
                7 dias
              </li>
              <li className="w-auto py-2 px-4 text-xs bg-active-bg text-center flex items-center rounded">
                15 dias
              </li>
              <li className="w-auto py-2 px-4 text-xs bg-active-bg text-center flex items-center rounded">
                1 mês
              </li>
              <li className="w-auto py-2 px-4 text-xs bg-active-bg text-center flex items-center rounded">
                6 meses
              </li>
              <li className="w-auto py-2 px-4 text-xs bg-blue text-center text-white flex items-center rounded">
                1 ano
              </li>
              <li className="w-auto py-2 px-4 text-xs bg-active-bg text-center flex items-center rounded">
                Personalizado
                <img src="/src/assets/arrow-bottom.svg" alt="" />
              </li>
            </ul>
            <p>
              Exibindo dados do período 10 de novembro de 2021 à
              <span className="text-blue">10 de outubro de 2022</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
