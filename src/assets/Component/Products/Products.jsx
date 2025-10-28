import { Link } from 'react-scroll';
import lipstick from "../../../../src/Gallery/lipstick.webp";
import lipstick2 from "../../../../src/Gallery/lipstick2.webp";
import lipstick3 from "../../../../src/Gallery/lipstick3.jpeg";
import lipstick4 from "../../../../src/Gallery/lipstick4.webp";
import lipstick5 from "../../../../src/Gallery/lipstick5.jpeg";
import lipstick6 from "../../../../src/Gallery/lipstick6.jpeg";
import "./Products.css";

const products = [
  { image: lipstick4, name: "Crimson Kiss", price: "$19.99" },
  { image: lipstick, name: "Velvet Rouge", price: "$22.99" },
  { image: lipstick3, name: "Blush Bloom", price: "$18.50" },
  { image: lipstick6, name: "Berry Charm", price: "$21.00" },
  { image: lipstick5, name: "Peach Passion", price: "$20.50" },
  { image: lipstick2, name: "Ruby Rush", price: "$23.75" },
];

export default function Products() {
  return (
    <div id='/Products' className="py-20 px-6 md:px-20 bg-red-200">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-red-50 textshadow">
        Best Lipsticks
      </h1>

      {/* Adding <marquee> tag */}
      <marquee behavior="scroll" direction="left" scrollamount="6" onmouseover="this.stop();" onmouseout="this.start();">
        <div className="flex gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-red-50 shadow-lg rounded-xl flex-shrink-0 hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 md:h-60 w-full object-cover rounded-t-md"
              />
              <div className='px-6 py-5'>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 font-bold mb-4">{product.price}</p>
                <Link to='/Contact' smooth={true} duration={1000}>
                  <button className="bg-red-300 textshadow text-white px-6 py-2 rounded-full hover:bg-red-400 transition-all">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </marquee>
    </div>
  );
}
