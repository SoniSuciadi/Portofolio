import { NavLink } from "react-router-dom";
const styleNavLink =
  "text-slate-600 py-4 px-3 block hover:text-slate-500 focus:outline-none";
const styleNavLinkActive =
  "text-slate-500 py-4 px-3 block hover:text-slate-500 focus:outline-none border-b-2 font-medium border-slate-500";
export const NavBar = () => {
  return (
    <nav className="flex flex-row justify-center">
      <NavLink
        to={""}
        className={({ isActive }) =>
          isActive ? styleNavLinkActive : styleNavLink
        }
        end
      >
        About
      </NavLink>
      <NavLink
        to={"education"}
        className={({ isActive }) =>
          isActive ? styleNavLinkActive : styleNavLink
        }
      >
        Education
      </NavLink>
      <NavLink
        to={"experience"}
        className={({ isActive }) =>
          isActive ? styleNavLinkActive : styleNavLink
        }
      >
        Experience
      </NavLink>
      <NavLink
        to={"skill"}
        className={({ isActive }) =>
          isActive ? styleNavLinkActive : styleNavLink
        }
      >
        Skill
      </NavLink>
      <NavLink
        to={"project"}
        className={({ isActive }) =>
          isActive ? styleNavLinkActive : styleNavLink
        }
      >
        Project
      </NavLink>
    </nav>
  );
};
