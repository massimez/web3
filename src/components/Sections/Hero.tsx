import { Link } from "react-scroll";

export function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-16 sm:pb-32 flex flex-col items-center justify-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Основные направления развития
            <span className="block text-blue-400">
              современных Интернет-технологий
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Исследование ключевых тенденций и инноваций в сфере современных
            веб-технологий, включая Web 3.0, DAO и децентрализованные финансы.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"intro"} smooth={true} duration={500} className="">
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-3  border-white/20">
                Узнать больше
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
