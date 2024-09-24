import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo here" />
          <p className="w-full md:w-2/3  text-gray-600">
            {" "}
            At StyleNest, we are committed to ensuring sustainable consumption
            and production patterns, making sure there is no wastage. Your order
            is made from the finest materials, meticulously crafted in Pakistan
            using premium fabrics.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/">Delivery</a>
            </li>
            <li>
              <a href="/">Privacy Policy </a>
            </li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="https://wa.me/+923186191327">+923186191327</a>
            </li>
            <li>
              <a href="mailto:chbilalc627@gmail.com">contact@StyleNest.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          © 2023 StyleNest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
