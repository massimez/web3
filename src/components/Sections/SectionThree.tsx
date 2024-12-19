import React from "react";
import { Link } from "react-scroll";

export function BankingAndExchangesSection() {
  return (
    <section id="finance" className="mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Банковское дело и биржи
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-8 leading-relaxed">
          Традиционные банки и биржи всё больше интегрируют технологии Web 3.0,
          чтобы повысить свою конкурентоспособность. Это связано с растущим
          интересом к децентрализованным финансам (DeFi), которые предлагают
          прозрачность, меньшие издержки и исключение посредников.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Содержание раздела</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link
                to="role-in-finance"
                smooth={true}
                duration={500}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Роль Web 3.0 в трансформации финансового сектора
              </Link>
            </li>
          </ul>
        </div>

        <div id="role-in-finance" className="my-8">
          <h3 className="text-xl font-semibold mb-4">
            Роль Web 3.0 в трансформации финансового сектора
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Традиционные банки и биржи всё больше интегрируют технологии Web
            3.0, чтобы повысить свою конкурентоспособность. Это связано с
            растущим интересом к децентрализованным финансам (DeFi), которые
            предлагают прозрачность, меньшие издержки и исключение посредников.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Децентрализованные финансы (DeFi):</strong> DeFi — это
            экосистема финансовых услуг, предоставляемых на основе блокчейна.
            Они включают кредитование, страхование, обмен активов и даже
            создание новых валют. Например:
          </p>
          <img
            src="https://insidebitcoins.com/wp-content/uploads/2023/05/DPBTHTJEAZBK7AZEYHPWQS4JME-1-scaled.jpg"
            alt="Defi"
            className="rounded-lg w-[400px]  shadow-lg mb-8 mx-auto"
          />
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Пользователи могут получить кредит на платформе Compound,
              закладывая криптовалюту в качестве обеспечения.
            </li>
            <li>
              На платформах, таких как Curve Finance, можно обменивать
              стейблкоины с минимальными комиссиями.
            </li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            DeFi-платформы используют смарт-контракты, чтобы исключить
            необходимость участия традиционных финансовых учреждений. Процессы
            автоматизированы, а данные хранятся децентрализованно, что уменьшает
            риск манипуляций и мошенничества.
          </p>
          <h4 className="font-semibold mb-2">Примеры применения:</h4>
          <h5 className="font-semibold mb-2">Банковское дело:</h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Криптовалютные карты:</strong> Такие компании, как
              Crypto.com и Binance, выпускают карты, позволяющие тратить
              криптовалюту в реальном мире.
            </li>
            <li>
              <strong>Доступность кредитования:</strong> В DeFi-кредитовании
              отсутствуют проверки кредитоспособности, что делает его доступным
              даже для пользователей без кредитной истории.
            </li>
          </ul>
          <h5 className="font-semibold mb-2">Биржи:</h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Децентрализованные биржи (DEX):</strong> Платформы, такие
              как PancakeSwap и SushiSwap, предлагают возможность торговли без
              регистрации и необходимости доверять посреднику.
            </li>
            <li>
              <strong>Токенизация активов:</strong> Акции, недвижимость и даже
              произведения искусства могут быть представлены в виде токенов, что
              упрощает их покупку и продажу.
            </li>
          </ul>
          <h4 className="font-semibold mb-2">
            Преимущества для пользователей:
          </h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Прозрачность:</strong> Все транзакции в DeFi видны в
              блокчейне, что исключает скрытые комиссии и мошенничество.
            </li>
            <li>
              <strong>Доступность:</strong> Услуги DeFi доступны круглосуточно,
              в отличие от традиционных банков, работающих по фиксированному
              графику.
            </li>
            <li>
              <strong>Быстрота:</strong> Переводы и транзакции происходят в разы
              быстрее, чем в традиционных системах, благодаря исключению
              посредников.
            </li>
          </ul>
          <h4 className="font-semibold mb-2">Вызовы внедрения:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Регулирование:</strong> Деятельность децентрализованных
              платформ часто выходит за рамки существующего законодательства,
              что вызывает настороженность у регуляторов.
            </li>
            <li>
              <strong>Волатильность криптовалют:</strong> Курсы криптовалют
              подвержены резким колебаниям, что создает риски для пользователей.
            </li>
            <li>
              <strong>Образовательный барьер:</strong> Многим пользователям
              сложно освоить децентрализованные платформы из-за их
              технологической сложности.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
