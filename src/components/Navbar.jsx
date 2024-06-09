import { Link } from "react-router-dom";
const Navbar = () => {
  const items = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Products", link: "/products" },
    { title: "Contact", link: "/contact" },
    { title: "Search", link: "/search-products" },
  ];
  return (
    <div>
      <div className="py-4 bg-indigo-400">
        <nav className=" container mx-auto flex justify-between">
          <div className="">
            <Link>Rony</Link>
          </div>
          <div>
            <ul className="flex justify-end gap-5">
              {items.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
