import React from "react";
import Image from "next/image";
import christian from "../../assets/images/christian.png";
import tesla from "../../assets/images/tesla.svg";
import atlas from "../../assets/images/atlas.svg";

const Cover = () => {
  return (
    <section>
      <div className="mt-8">
        <div className="float-right w-40">
          <Image src={christian} alt="Picture of the author" priority />
        </div>
        <div className="item-body space-y-2 prose dark:prose-invert">
          <p>
            {`I'm Christian 👋, a passionate computer scientist driven to create
            software systems that genuinely impact people's lives. 🚀`}
          </p>
          <p>
            {`Currently, I work at `}
            <a
              className="text-white border dark:border-neutral-700 rounded p-1 mx-1 text-sm no-underline bg-[#3c3c3c]"
              href="https://www.tesla.com"
            >
              <Image
                priority
                src={tesla}
                height={10}
                width={10}
                alt="Tesla Logo"
                className="inline-block mr-1 my-0 align-baseline"
              />
              <span>Tesla</span>
            </a>
            {` as a Software Quality Assurance Intern. My enthusiasm for
            sustainable energy and the opportunity to collaborate with an
            exceptional team aligns perfectly with my eagerness to learn and
            grow. In addition, I am also the proud founder of `}
            <a
              className=" whitespace-nowrap text-white border dark:border-neutral-700 rounded p-1 mx-1 text-sm no-underline bg-[#3c3c3c] "
              href="https://www.atlastechhub.com/"
            >
              <Image
                priority
                src={atlas}
                height={10}
                width={10}
                alt="Atlas logo"
                className="inline-block mr-1 my-0 align-baseline"
              />
              <span className="align-middle">Atlas Tech Hub</span>
            </a>
            {`, a company committed to providing rapid, high-impact project
            delivery to clients while upholding the highest code quality
            standards, all at an affordable price.`}
          </p>
          <p>
            {`I strongly believe in the power of effective teamwork and
            communication. My journey as a computer scientist continues to be a
            thrilling and fulfilling adventure.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cover;
