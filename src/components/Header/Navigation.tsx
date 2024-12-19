import { Link } from "react-scroll";
import { BookOpen, Globe, Building2, Wallet } from "lucide-react";

const navItems = [
  { to: "intro", icon: <BookOpen className="w-4 h-4" />, text: "Введение" },
  { to: "web3", icon: <Globe className="w-4 h-4" />, text: "Web 3.0" },
  { to: "dao", icon: <Building2 className="w-4 h-4" />, text: "DAO" },
  {
    to: "finance",
    icon: <Wallet className="w-4 h-4" />,
    text: "Банковское дело и биржи",
  },
  // { to: "conclusion", icon: <Cpu className="w-4 h-4" />, text: "Заключение" },
];

export function Navigation() {
  return (
    <nav>
      <ul className="flex max-md:hidden justify-center space-x-8">
        {navItems.map(({ to, icon, text }) => (
          <li key={to}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              className="flex items-center space-x-2 neon-text hover:text-blue-600 cursor-pointer transition-colors"
            >
              {icon}
              <span className="">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
