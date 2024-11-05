import React from 'react'
import Do1 from "../../images/Do1.webp";
import Do2 from "../../images/Do2.webp";
import Do3 from "../../images/Do3.webp";
import Do4 from "../../images/Do4.webp";
import Do5 from "../../images/Do5.webp";
import Do6 from "../../images/Do6.webp";

export const navLinks = [
    {
      id: "#landingPage",
      title: "Home",
      to: "/",
      titleTo: "/",
      showToggle: false,
    },
  
    {
      id: "/#about",
      title: "The Hospital",
      to: "/about",
      titleTo: "/about/",
      showToggle: false,
    },
    {
        id: "/#stories",
        title: "Patient Stories",
        to: "/stories",
        titleTo: "/stories/",
        showToggle: false,
      },
    {
        id: "/#blog",
        title: "Our Blog",
        to: "/blog",
        titleTo: "/blog/",
        showToggle: false,
      },
    {
      id: "/#contact",
      title: "Contact Us",
      to: "/contact",
      titleTo: "/contact/",
      showToggle: false,
    },
  ];
  

  export const whatweDoViews = [
    {
      id: 0,
      copies:
        "Deformity Correction and\nPediatric Orthopedic Services",
      img: {   
        url: Do1,
        alt: "do1",
      },
    },
    {
      id: 1,
      copies: "Management of Fracture and Complication of Fractures",
      img: {
        url: Do2,
        alt: "do2",
      },
    },
    {
      id: 2,
      copies:
        "General Surgery and Plastic Surgical Services",
      img: {
        url: Do3,
        alt: "do3s",
      },
    },
   
  ];
  export const whatweDo2Views = [
   
    {
      id: 3,
      copies:
        "Full Laboratory and General Medical Services",
      img: {
        url: Do5,
        alt: "do5",
      },
    },
    {
      id: 4,
      copies:
        "Medical Imaging, Physiotherapy and Medical Rehabilitation",
      img: {
        url: Do4,
        alt: "do4",
      },
    },
    {
      id: 5,
      copies:
        "Management of Accident Victims and Ambulance Services",
      img: {
        url: Do6,
        alt: "do6",
      },
    },
  ];
  