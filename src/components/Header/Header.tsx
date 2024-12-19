import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto bg-slate-500/35 rounded-md px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
