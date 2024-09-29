import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";
const contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={"Contact"} text2={"US"} />
      </div>
      {/* Contact Information */}
      <div className="flex flex-col mt-10 justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="font-semibold">OUR STORY</h2>
          <p className="text-gray-500">Address: 123 Main St, City, <br /> State, ZIP</p>
          <p className="text-gray-500">Phone: (123) 456-7890</p>
          <p className="text-gray-500">Email: info@example.com</p>
         
          <h2 className="font-semibold">OUR HOURS</h2>
          <p className="text-gray-500">Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
          <p className="text-gray-500">
            We are here to help. Please don not hesitate to reach out.
          </p>
        </div>
      </div>
      {/* Contact Form
      <form className="flex flex-col gap-6 w-full max-w-[480px] mx-auto sm:max-w-[600px]">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded w-full py-1.5 px-3.5"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded w
        
        h-full py-1.5 px-3.5"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded w-full h-32 py-1.5 px-3.5"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBMIT
        </button>
        <p className="text-gray-500 text-sm">
          We ll never share your email address.
        </p>
      </form> */}
      <div className="mt-20">
      <NewsLetterBox/>
      </div>
    </div>
  );
};

export default contact;
