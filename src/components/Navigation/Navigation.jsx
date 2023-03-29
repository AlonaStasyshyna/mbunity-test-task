import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="#">Home</NavLink>
        </li>
        <li>
          <NavLink to="#">Features</NavLink>
        </li>
        <li>
          <NavLink to="#">Blog</NavLink>
        </li>
        <li>
          <NavLink to="#">Shop</NavLink>
        </li>
        <li>
          <NavLink to="#">About</NavLink>
        </li>
        <li>
          <NavLink to="contacts">Contact</NavLink>
        </li>

        <div>
          <li>
            <NavLink to="#"></NavLink>
          </li>
          <li>
            <NavLink to="#"></NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
