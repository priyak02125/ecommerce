import React from "react";
import Title from "../Title";
import Image from "next/image";
import { assets } from "../../assests/assets";
import NewsletterBox from "../../components/NewsletterBox"
function About() {
  return (
    <div className="px-22">
      <div className="text-2xl border-gray-300 text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex gap-12">
        <Image
          src={assets.about_img}
          alt="search icon"
          width={400}
          height={400}
          className="cursor-pointer"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are an ecommerce platform dedicated to bringing you high-quality
            products at affordable prices. Our goal is to make online shopping
            simple, reliable, and enjoyable by offering a wide range of
            carefully curated items that suit your everyday needs and lifestyle.
          </p>

          <p>
            Customer satisfaction is at the heart of everything we do. From
            secure payments and fast delivery to easy returns and responsive
            support, we strive to provide a seamless shopping experience that
            you can trust. Shop with confidence and discover products that add
            real value to your life.
          </p>
          <div className="font-semibold">
            <p>Our mission</p>
          </div>
          <p>
            Our mission is to make online shopping accessible, affordable, and
            enjoyable for everyone. We aim to connect customers with
            high-quality products while maintaining transparency, trust, and
            convenience at every step of the shopping journey.
          </p>
        </div>
      </div>
      <div className="text-xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
     <div className="flex md:flex-row text-sm mb-20 border border-gray-300">
  <div className="border border-gray-300 px-10 md:px-16 py-4 sm:py-12 flex flex-col gap-3">
    <p className="font-semibold">Quality Assurance:</p>
    <p className="text-gray-600">
      Every product is carefully checked to ensure quality, durability,
      and authenticity before it reaches you.
    </p>
  </div>

  <div className="border border-gray-300 px-10 md:px-16 py-4 sm:py-12 flex flex-col gap-3">
    <p className="font-semibold">Convenience:</p>
    <p className="text-gray-600">
      Enjoy easy browsing, secure payments, and fast delivery for a smooth
      shopping experience.
    </p>
  </div>

  <div className="border border-gray-300 px-10 md:px-16 py-4 sm:py-12 flex flex-col gap-3">
    <p className="font-semibold">Exceptional Customer Service:</p>
    <p className="text-gray-600">
      Our support team is always ready to help and ensure your
      satisfaction.
    </p>
  </div>
</div>

      <NewsletterBox/>
    </div>
  );
}

export default About;
