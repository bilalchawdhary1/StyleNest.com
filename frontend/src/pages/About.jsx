// import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl pt-8 text-center border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex my-10 flex-col md:flex-row gap-16">
        <div className="w-full md:max-w-[450px]">
          <img
            className="rounded-lg border border-gray-400"
            src={assets.about_img}
            alt="about us image"
          />
        </div>
        <div className="flex flex-col justify-center md:w-2/4 gap-6">
          <p className="text-gray-600">
            StyleNest was founded by two passionate women who wanted to create a
            place where people could enjoy their favorite clothes made from the
            finest materials. They met at a small coffee shop in Pakistan and
            decided to combine their love for crafting and their desire for a
            place to showcase their work.
          </p>
          <h2 className="text-xl mt-2">Our Mission</h2>
          <p className="text-gray-600">
            To create a platform where people can buy, sell, and rent
            high-quality clothing made from the finest materials, while
            providing a safe and transparent environment for people to express
            their opinions and make informed purchasing decisions.
          </p>
          <p>
            We strive to make our customers feel heard and valued, and to help
            them find the perfect fit for their style and comfort.
          </p>
        </div>
      </div>
      {/* why Choose us */}
      <div className="flex flex-col  items-center py-10">
        <h className="text-3xl">WHY CHOOSE US</h>
        <div className="flex flex-col gap-6 mt-5">
          <div>
            <p className="font-semibold my-3"><span>1. </span>Free Delivery</p>
            <p>
              We offer free shipping on orders over $500. No need to worry about
              missing your items.
            </p>
          </div>
          <div>
            <p className="font-semibold my-3 "><span>2. </span>Easy Exchange Policy</p>
            <p>
              We have an easy exchange policy. If you are not satisfied with your
              purchase, you can return it within 30 days.
            </p>
          </div>
          <div>
            <p className="font-semibold my-3"><span>3. </span>7 Days Return Policy</p>
            <p>
              We provide 7 days free return policy. If you are not satisfied with
              your purchase, you can return it within 30 days.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
      <NewsLetterBox/>
      </div>
    </div>
  );
};

export default About;
