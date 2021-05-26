import styles from "./footer.module.css";
import { IconContext } from "react-icons";

function Icon(props) {
  return (
    <div className="p-1.5 mr-4 border-black border-2 rounded-full">
      <img
        className="h-5 w-5"
        alt={props.slug}
        src={`https://unpkg.com/simple-icons@latest/icons/${props.slug}.svg`}
      />
    </div>
  );
}

function ListContent(props) {
  return (
    <div>
      <strong className="my-5 block">{props.title}</strong>
      <ul>
        {props.list.map((x) => (
          <li className="my-3" key={x}>
            {x}
          </li>
        ))}
      </ul>
      {props.title === "Join IKEA Family" && (
        <button className="bg-black text-white px-6 py-3 rounded-full font-bold">
          Join or log in
        </button>
      )}
    </div>
  );
}

const content = [
  {
    title: "Join IKEA Family",
    list: [
      "Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free. See More.",
    ],
  },
  {
    title: "Help",
    list: [
      "Customer service",
      "FAQ",
      "My orders",
      "Contact Us",
      "Product Recalls",
      "Return Policy",
      "Warranties",
      "Feedback",
    ],
  },
  {
    title: "Shop & Learn",
    list: [
      "Find a Location",
      "IKEA Services",
      "IKEA Catalog & Brochures",
      "IKEA Family",
      "IKEA Planning Tools",
      "Buying Guides",
      "Gift Cards",
      "Gift Registry",
      "IKEA Credit Card Management",
      "IKEA Credit Cards",
      "Explore the New IKEA App",
    ],
  },
  {
    title: "About IKEA",
    list: [
      "This is IKEA",
      "Careers",
      "Newsroom",
      "Life at Home",
      "A Sustainable Everyday",
      "IKEA Foundation",
      "Creating Safer Homes Together",
    ],
  },
  {
    title: "Legal",
    list: [
      "Privacy and Security",
      "Privacy Policy",
      "Terms and conditions",
      "IKEA Children's Product Registration",
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-gray-300">
      <IconContext.Provider value={{ color: "gray" }}>
        <div className="flex">
          <section
            className={`${styles.content} flex items-start justify-between`}
          >
            {content.map((x) => (
              <ListContent
                className="cursor-pointer hover:underline"
                list={x.list}
                title={x.title}
                key={x.title}
              />
            ))}
          </section>
        </div>
        <footer className="flex m-4 justify-between items-center mb-4">
          <div className="flex items-center justify-center cursor-pointer">
            {["facebook", "instagram", "pinterest", "twitter", "youtube"].map(
              (x) => (
                <Icon key={x} slug={x} />
              )
            )}
          </div>
          <div className="cursor-pointer flex border-2 border-black rounded-full mb-2 w-48 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            <span className="my-4"> Change Country</span>
          </div>
        </footer>
        <br />
      </IconContext.Provider>
    </div>
  );
}
