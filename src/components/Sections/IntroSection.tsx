import React from "react";
import { ReferenceLink } from "../References/ReferenceLink";

export function IntroSection() {
  return (
    <section id="intro" className="mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Введение</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-8 leading-relaxed">
          Современные информационно-коммуникационные технологии (ИКТ) стали
          ключевым двигателем глобального прогресса, затрагивая практически все
          аспекты человеческой жизни. На 2024 год свыше 65% мирового населения
          имеет доступ к Интернету, что свидетельствует о глубокой интеграции
          цифровых технологий в повседневную жизнь.
        </p>

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">
            Технологический контекст:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Развитие искусственного интеллекта (ИИ) способствует решению
              сложных задач в области диагностики заболеваний, прогнозирования
              природных катастроф и автоматизации бизнес-процессов.
            </li>
            <li>
              Большие данные (Big Data) открывают новые горизонты анализа
              информации, позволяя компаниям принимать более обоснованные
              решения на основе аналитики в реальном времени.
            </li>
            <li>
              Интернет вещей (IoT) объединяет миллиарды устройств по всему миру,
              создавая экосистемы, где бытовые приборы, автомобили и
              промышленные установки взаимодействуют друг с другом.
            </li>
          </ul>
        </div>

        <img
          src="https://www.cleverence.ru/upload/manager/365/e6gntwmdw95w79ey5ua7bfaasmdtn819/content_img.jpeg"
          alt="IoT Network"
          className="rounded-lg w-[800px] h-auto shadow-lg mb-8 "
        />

        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Социальный контекст:</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ИТ играют двойственную роль: с одной стороны, они обеспечивают более
            широкий доступ к знаниям и услугам, с другой — усугубляют цифровое
            неравенство между регионами с различным уровнем развития. Например,
            в странах с низким уровнем доходов доступ к Интернету ограничен, что
            создает барьеры для участия в цифровой экономике.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h4 className="font-semibold mb-2">Связанные исследования:</h4>
          <div className="space-y-2">
            <ReferenceLink
              href="https://dspace.ut.ee/server/api/core/bitstreams/b4fc5fb3-da0e-4853-a4d9-4389e781a3e0/content"
              title="Web 3.0 в финансовой индустрии (2023)"
              type="research"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
