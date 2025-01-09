import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const TeamComponent = () => {
  return (
    <>
    {/* desktop */}
    <div className="hidden lg:block">
      <div className="w-full ">
        <StaticImage
          src="../../images/team1.webp"
          alt="Hero Image 1"
        //   layout="fullWidth"
          className=""
        />
      </div>
      <div className="flex pt-[4em] pl-[8em] pr-[8em] gap-12 mb-[1em]">
        <StaticImage
          src="../../images/director.webp"
          alt="Hero Image 1"
          className="h-[500px] w-[500px]"
        />
        <div className="flex flex-col mt-[1em]">
          <h3 className="lg:text-[20px] font-semibold">
            Dr. Afolabi Odunsi, MD, FACS
          </h3>
          <p className="lg:text-[14px] font-normal text-[#666F89] mb-5">
            Medical Director
          </p>
          <p className="lg:text-[14px] font-normal text-[#666F89] mb-5">
            Our Medical Director, a Specialist Orthopedic Surgeon and
            Traumatologist, brings <br/>extensive expertise in managing acute
            injuries from industrial, road, and domestic<br/> accidents. He began his
            medical journey at Olabisi Onabanjo University, excelling in<br/>
            Physiology, Biochemistry, and Pathology, and completed his
            internship at University<br/> College Hospital, Ibadan.
          </p>
          <p className="lg:text-[14px] font-normal text-[#666F89]">
            He served with the National Youth Service Corps in Zamfara State
            before undertaking <br/>postgraduate training in trauma and orthopedics
            at Obafemi Awolowo University <br/>Teaching Hospital, Ile-Ife. After
            rigorous training, he earned Fellowships from both the <br/>National
            Postgraduate Medical College of Nigeria and the West African College
            of <br/> Surgeons. Committed to advancing trauma care, he has participated
            in specialized <br/>courses such as the Ilizarov and Ponseti Workshops,
            with research interests centered<br/> on accident prevention and improved
            trauma response.
          </p>
          <div className="flex gap-3 mt-[2em]">
          <StaticImage src="../../images/LinkedP.png" alt="LinkedIn" />
          <StaticImage src="../../images/mailP.png" alt="Email" />
       
        </div>
        </div>
      </div>
      <div className="flex flex-col px-[8em] mt-[5em]">
        <StaticImage
          src="../../images/team2.webp"
          alt="Hero Image 1"
          className=""
        />
        <p className="font-semibold lg:text-[17px] mt-[1em] mb-4">Nursing Staff</p>
        <p className="lg:text-[14px] font-normal text-[#666F89]">
          Our team of experienced nurses provides compassionate and skilled care
          to all our patients. From pre-operative care to post-operative
          recovery, our nurses are dedicated to ensuring your comfort and
          well-being. They work closely with our medical team to deliver
          seamless, patient-centered care.
        </p>
      </div>
      <div className="flex flex-col mt-[5em] px-[8em] mb-[3em]">
        <StaticImage
          src="../../images/team3.webp"
          alt="Hero Image 1"
          layout="fullWidth"
          className=""
        />
        <p className="font-semibold lg:text-[17px] mt-[1em] mb-4">Administrative and Support Staff</p>
        <p className="lg:text-[14px] font-normal text-[#666F89]">
          Behind the scenes, our administrative and support staff ensure the
          smooth operation of our hospital. From scheduling appointments to
          managing patient records, they are dedicated to providing a positive
          and efficient experience for every patient. Their commitment to
          excellence supports our mission of delivering high-quality healthcare.
        </p>
      </div>
    </div>

    {/* mobile */}
    <div className="lg:hidden">
      <div className="w-full ">
        <StaticImage
          src="../../images/teamMobile1.webp"
          alt="Hero Image 1"
        //   layout="fullWidth"
          className="h-[500px] w-full"
        />
      </div>
      <div className="flex flex-col pt-[4em] px-[1em] gap-12 mb-[1em]">
        <StaticImage
          src="../../images/director.webp"
          alt="Hero Image 1"
          className="h-[500px] w-full"
        />
        <div className="flex flex-col mt-[-0.8em]">
          <h3 className="text-[23px] font-semibold">
            Dr. Afolabi Odunsi, MD, FACS
          </h3>
          <p className="text-[16px] font-normal text-[#666F89] mb-5">
            Medical Director
          </p>
          <p className="text-[14px] font-normal text-[#666F89] mb-5">
            Our Medical Director, a Specialist Orthopedic Surgeon and
            Traumatologist, brings extensive expertise in managing acute
            injuries from industrial, road, and domestic accidents. He began his
            medical journey at Olabisi Onabanjo University, excelling in
            Physiology, Biochemistry, and Pathology, and completed his
            internship at University College Hospital, Ibadan.
          </p>
          <p className="text-[14px] font-normal text-[#666F89]">
            He served with the National Youth Service Corps in Zamfara State
            before undertaking postgraduate training in trauma and orthopedics
            at Obafemi Awolowo University Teaching Hospital, Ile-Ife. After
            rigorous training, he earned Fellowships from both the National
            Postgraduate Medical College of Nigeria and the West African College
            of Surgeons. Committed to advancing trauma care, he has participated
            in specialized courses such as the Ilizarov and Ponseti Workshops,
            with research interests centered on accident prevention and improved
            trauma response.
          </p>
          <div className="flex gap-3 mt-[2em]">
          <StaticImage src="../../images/LinkedP.png" alt="LinkedIn" />
          <StaticImage src="../../images/mailP.png" alt="Email" />
       
        </div>
        </div>
      </div>
      <div className="flex flex-col px-[1em] mt-[3em]">
        <StaticImage
          src="../../images/team2.webp"
          alt="Hero Image 1"
          className=""
        />
        <p className="font-semibold text-[19px] mt-[1em] mb-4">Nursing Staff</p>
        <p className="text-[14px] font-normal text-[#666F89]">
          Our team of experienced nurses provides compassionate and skilled care
          to all our patients. From pre-operative care to post-operative
          recovery, our nurses are dedicated to ensuring your comfort and
          well-being. They work closely with our medical team to deliver
          seamless, patient-centered care.
        </p>
      </div>
      <div className="flex flex-col mt-[3em] px-[1em] mb-[3em]">
        <StaticImage
          src="../../images/team3.webp"
          alt="Hero Image 1"
          layout="fullWidth"
          className=""
        />
        <p className="font-semibold text-[19px] mt-[1em] mb-4">Administrative and Support Staff</p>
        <p className="text-[14px] font-normal text-[#666F89]">
          ehind the scenes, our administrative and support staff ensure the
          smooth operation of our hospital. From scheduling appointments to
          managing patient records, they are dedicated to providing a positive
          and efficient experience for every patient. Their commitment to
          excellence supports our mission of delivering high-quality healthcare.
        </p>
      </div>
    </div>
    </>
  );
};

export default TeamComponent;
