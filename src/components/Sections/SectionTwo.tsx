import { Link } from "react-scroll";

export function KeyDirectionsSection() {
  return (
    <section id="web3" className="mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Ключевые направления развития ИТ в концепции «Web 3.0»
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-8 leading-relaxed">
          Одной из главных особенностей Web 3.0 является децентрализация
          управления данными. Вместо использования централизованных серверов,
          где данные хранятся и обрабатываются в одном месте, в Web 3.0
          информация распределяется по сети, что обеспечивает высокую
          устойчивость к сбоям и атакам. Это означает, что даже если одна часть
          сети выходит из строя, остальные узлы продолжают функционировать, что
          значительно повышает надежность и безопасность данных.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Содержание раздела</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link
                to="trends"
                smooth={true}
                duration={500}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Основные технологические тренды Web 3.0
              </Link>
            </li>
            <li>
              <Link
                to="dao"
                smooth={true}
                duration={500}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Децентрализованные автономные организации (DAO)
              </Link>
            </li>
          </ul>
        </div>

        <div id="trends" className="my-8">
          <h3 className="text-xl font-semibold mb-4">
            Основные технологические тренды Web 3.0
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Одной из главных особенностей Web 3.0 является децентрализация
            управления данными. Вместо использования централизованных серверов,
            данные распределяются по сети, что обеспечивает надежность и
            безопасность.
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBkjj_m3nM-fBR8GQZpoXYv74WiCDKXFNbw&s"
            alt="Web3 Decentralization"
            className="rounded-lg w-[400px] h-auto shadow-lg mb-8 mx-auto"
          />
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Экономика создателей:</strong> Эта модель способствует
            прямому взаимодействию между пользователями и создателями контента,
            устраняя необходимость в платформах-посредниках, которые традиционно
            забирали значительную часть доходов авторов. Например, с помощью
            токенизации создатели могут выпускать свои собственные токены,
            которые пользователи могут приобретать, поддерживая тем самым
            любимых авторов и получая доступ к эксклюзивному контенту.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Приватность данных:</strong> Приватность данных также
            занимает центральное место в Web 3.0. В условиях растущих угроз
            кибербезопасности и утечек данных пользователи требуют большего
            контроля над своей личной информацией. Web 3.0 внедряет передовые
            методы криптографии, такие как zk-SNARKs (ноль-знание с нулевым
            раскрытием), которые позволяют пользователям подтверждать свою
            идентичность или выполнять транзакции, не раскрывая при этом свои
            личные данные.
          </p>
        </div>
        <iframe
          width="560"
          height="315"
          className="mx-auto"
          src="https://www.youtube.com/embed/G1shUvR94ns?si=HPp3VH6DcDEMErYz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div id="dao" className="my-8">
          <h3 className="text-xl font-semibold mb-4">
            Децентрализованные автономные организации (DAO)
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            DAO представляют собой новую форму управления, в которой основой
            принятия решений становятся цифровые протоколы на базе блокчейна.
            Этот подход уже трансформирует традиционные представления о
            корпоративной структуре и управлении сообществами.
          </p>
          <img
            src="https://static.wixstatic.com/media/cc2f80_cbe44f6601b348a0874ef9ef5bf7ee14~mv2.png/v1/fill/w_568,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cc2f80_cbe44f6601b348a0874ef9ef5bf7ee14~mv2.png"
            alt="DAO Governance"
            className="rounded-lg w-[400px]  shadow-lg mb-8 mx-auto"
          />
          <h4 className="font-semibold mb-2">Принципы работы DAO:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Участники могут голосовать за финансирование нового проекта, и при
              достижении установленного порога голосов средства автоматически
              выделяются.
            </li>
            <li>
              Смарт-контракт обеспечивает распределение прибыли или других
              ресурсов между членами организации без участия третьих лиц.
            </li>
          </ul>
          <h4 className="font-semibold mb-2">Преимущества DAO:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Глобальная доступность.</li>
            <li>Прозрачность благодаря блокчейну.</li>
            <li>Демократичность управления.</li>
          </ul>
          <h4 className="font-semibold mb-2">Реальные примеры DAO:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uniswap DAO</li>
            <li>Aragon</li>
            <li>Gitcoin DAO</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
