import React from 'react'
import Do1 from "../../images/Do1.webp";
import Do2 from "../../images/Do2.webp";
import Do3 from "../../images/Do3.webp";
import Do4 from "../../images/Do4.webp";
import Do5 from "../../images/Do5.webp";
import Do6 from "../../images/Do6.webp";
import ImageStories from "../../images/ImageStories.webp";

interface NavLink {
  id: string;
  title: string;
  to?: string;
  titleTo?: string;
  showToggle?: boolean;
  subLinks?: { id: string; title: string; to: string }[];
}

export const navLinks: NavLink[] = [
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
      showToggle: true,
      subLinks: [
        { id: "/#about/history", title: "About Faith Specialist Hospital", to: "/history" },
        { id: "/#about/services", title: "Our Services", to: "/services" },
        { id: "/#about/team", title: "Our Team", to: "/teams" },
        { id: "/#about/gallery", title: "Our Gallery", to: "/gallery" },
      ],
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

export const testimonials = [
  {
    id: 1,
    title: "John's Journey to Mobility",
    description: `After struggling with severe knee pain for years, I decided to undergo knee replacement surgery at Faith Specialist Hospital. The entire experience was life-changing. The staff was incredibly supportive, and the surgery went smoothly. Today, I can walk without pain and enjoy my daily activities again. Thank you, Faith Specialist Hospital, for giving me my life back!`,
    img: {
      url: ImageStories,
      alt: "do6",
    },
  },
  {
    id: 2,
    title: "John's Journey to Mobility2",
    description: `After struggling with severe knee pain for years, I decided to undergo knee replacement surgery at Faith Specialist Hospital. The entire experience was life-changing. The staff was incredibly supportive, and the surgery went smoothly. Today, I can walk without pain and enjoy my daily activities again. Thank you, Faith Specialist Hospital, for giving me my life back!`,
    img: {
      url: ImageStories,
      alt: "do6",
    },
  },
  {
    id: 3,
    title: "John's Journey to Mobility3",
    description: `After struggling with severe knee pain for years, I decided to undergo knee replacement surgery at Faith Specialist Hospital. The entire experience was life-changing. The staff was incredibly supportive, and the surgery went smoothly. Today, I can walk without pain and enjoy my daily activities again. Thank you, Faith Specialist Hospital, for giving me my life back!`,
    img: {
      url: ImageStories,
      alt: "do6",
    },
  },
];
