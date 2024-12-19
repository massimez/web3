export function References() {
  const references = [
    {
      author: "Ширинов, А.",
      year: "2023",
      title: "Web 3.0 в финансовой индустрии. Магистерская диссертация",
      institution:
        "Факультет наук и технологий, Институт компьютерных наук, Тартуский университет",
      url: "https://dspace.ut.ee/server/api/core/bitstreams/b4fc5fb3-da0e-4853-a4d9-4389e781a3e0/content",
    },
    {
      author: "Maticz",
      year: "н.д.",
      title:
        "Что такое Web3 в банковском деле и его примеры применения и преимущества?",
      url: "https://maticz.com/web3-in-banking",
    },
    {
      author: "Appinventiv",
      year: "2024",
      title: "Как блокчейн в банковском деле трансформирует индустрию",
      url: "https://appinventiv.com/blog/blockchain-in-banking/",
    },
    {
      author: "Acuity Knowledge Partners",
      year: "2023",
      title: "Web 3.0 для банков – переосмысляя текущий формат кредитования",
      url: "https://www.acuitykp.com/blog/web-3-0-for-banks-redefining-the-current-lending-format/",
    },
  ];

  return (
    <section
      id="references"
      className="bg-gray-100 py-10 px-6 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Полезные материалы и исследования
      </h2>
      <ul className="space-y-4">
        {references.map((ref, index) => (
          <li key={index} className="bg-white p-4 rounded-md shadow">
            <p className="text-gray-800 font-medium">
              {ref.author} ({ref.year}).{" "}
              <span className="italic">{ref.title}</span>
            </p>
            {ref.institution && (
              <p className="text-gray-700 text-sm">{ref.institution}</p>
            )}
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-sm underline"
            >
              {ref.url}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
