import React from 'react';

interface Deformity5Props {
    isActive: boolean;  // This will control whether the gradient is applied
  }
  
  export const Deformity5: React.FC<Deformity5Props> = ({ isActive }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradientFillDeformity5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF7E5F', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FEB47B', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path 
        d="M37.534 18.938L31.872 10.715C31.7785 10.5811 31.6542 10.4716 31.5096 10.3958C31.365 10.3199 31.2043 10.2798 31.041 10.279H26.02V8.997C26.02 8.73258 25.915 8.47899 25.728 8.29201C25.541 8.10504 25.2874 8 25.023 8H3.995C3.73111 8 3.47803 8.10483 3.29143 8.29143C3.10483 8.47803 3 8.73111 3 8.995V27.558C3 27.907 3.283 28.19 3.632 28.192H6.615V28.133C6.615 26.9711 7.07657 25.8568 7.89817 25.0352C8.71976 24.2136 9.83409 23.752 10.996 23.752C12.1579 23.752 13.2722 24.2136 14.0938 25.0352C14.9154 25.8568 15.377 26.9711 15.377 28.133V28.195V28.192H22.442V28.133C22.442 26.9711 22.9036 25.8568 23.7252 25.0352C24.5468 24.2136 25.6611 23.752 26.823 23.752C27.9849 23.752 29.0992 24.2136 29.9208 25.0352C30.7424 25.8568 31.204 26.9711 31.204 28.133V28.195V28.192H37.187C37.3548 28.1915 37.5155 28.1244 37.634 28.0056C37.7525 27.8868 37.819 27.7258 37.819 27.558V19.798C37.8082 19.4877 37.709 19.1869 37.533 18.931L37.537 18.937L37.534 18.938ZM18.25 16.633H15.552V19.33H13.104V16.636H10.406V14.186H13.104V11.479H15.552V14.176H18.25V16.633ZM36.153 19.223C36.1341 19.2582 36.106 19.2876 36.0716 19.3081C36.0373 19.3285 35.998 19.3392 35.958 19.339H26.022V11.478H30.473C30.6227 11.4787 30.7701 11.5151 30.903 11.5841C31.0359 11.6531 31.1504 11.7529 31.237 11.875L31.239 11.878L36.145 18.998C36.1669 19.0296 36.1794 19.0668 36.181 19.1052C36.1826 19.1436 36.1732 19.1817 36.154 19.215L36.155 19.214L36.153 19.223Z" 
        fill={isActive ? "url(#gradientFillDeformity5)" : "#90949E"}
      />
      <path 
        d="M10.9859 24.4101C10.2355 24.4101 9.50101 24.6327 8.87709 25.0495C8.25317 25.4664 7.76688 26.059 7.47972 26.7522C7.19256 27.4455 7.11743 28.2084 7.26382 28.9443C7.41021 29.6803 7.77156 30.3563 8.30216 30.8869C8.83276 31.4175 9.50878 31.7788 10.2447 31.9252C10.9807 32.0716 11.7436 31.9965 12.4368 31.7093C13.1301 31.4222 13.7226 30.9359 14.1395 30.312C14.5564 29.6881 14.7789 28.9545 14.7789 28.2041V28.2011C14.7781 27.1956 14.3782 26.2315 13.667 25.5207C12.9558 24.8098 11.9915 24.4104 10.9859 24.4101ZM10.9859 29.4931C10.7306 29.4931 10.481 29.4174 10.2687 29.2756C10.0564 29.1337 9.8909 28.9321 9.79319 28.6962C9.69548 28.4603 9.66991 28.2007 9.71973 27.9503C9.76954 27.6999 9.8925 27.4698 10.073 27.2893C10.2536 27.1087 10.4836 26.9858 10.7341 26.9359C10.9845 26.8861 11.2441 26.9117 11.48 27.0094C11.7159 27.1071 11.9175 27.2726 12.0593 27.4849C12.2012 27.6972 12.2769 27.9468 12.2769 28.2021V28.2031C12.2769 28.5453 12.141 28.8734 11.8991 29.1153C11.6572 29.3572 11.328 29.4931 10.9859 29.4931ZM26.8149 24.4101H26.8139C26.0635 24.4101 25.33 24.6327 24.7061 25.0495C24.0822 25.4664 23.5959 26.059 23.3087 26.7522C23.0216 27.4455 22.9464 28.2084 23.0928 28.9443C23.2392 29.6803 23.6006 30.3563 24.1312 30.8869C24.6618 31.4175 25.3378 31.7788 26.0737 31.9252C26.8097 32.0716 27.5726 31.9965 28.2658 31.7093C28.9591 31.4222 29.5516 30.9359 29.9685 30.312C30.3854 29.6881 30.6079 28.9545 30.6079 28.2041V28.2011C30.6071 27.1956 30.2072 26.2315 29.496 25.5207C28.7848 24.8098 27.8205 24.4104 26.8149 24.4101ZM26.8149 29.4931C26.5597 29.4931 26.3101 29.4174 26.0978 29.2756C25.8855 29.1337 25.7201 28.9321 25.6224 28.6962C25.5247 28.4603 25.4991 28.2007 25.5489 27.9503C25.5987 27.6999 25.7217 27.4698 25.9022 27.2893C26.0827 27.1087 26.3127 26.9858 26.5632 26.9359C26.8137 26.8861 27.0733 26.9117 27.3181 27.0094C27.563 27.1071 27.7646 27.2726 27.9064 27.4849C28.0482 27.6972 28.1238 27.9468 28.1238 28.2021V28.2031C28.1238 28.5453 27.9879 28.8734 27.746 29.1153C27.5041 29.3572 27.1749 29.4931 26.8149 29.4931Z" 
        fill={isActive ? "url(#gradientFillDeformity5)" : "#90949E"}
      />
    </svg>
  );
};
