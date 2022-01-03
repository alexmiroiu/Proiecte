import * as React from "react";

const SvgLink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    xmlSpace="preserve"
    width="2rem"
    height="2rem"
    {...props}
  >
    <path d="M609.34 13.31c-23.11 8.5-28.16 20.46-28.42 65.35 0 29.49.8 34.8 6.11 45.16 10.89 21.52 13.81 22.31 96.96 23.91l72.25 1.33L568.7 336.32C465.63 439.39 379.57 526.79 377.44 530.77c-4.78 9.3-4.78 24.17 0 33.47 2.13 3.98 15.67 18.86 30.28 33.47 24.17 23.91 27.36 26.3 38.52 27.36 6.64.8 15.41.53 19.66-.26 5.05-1.33 65.88-60.3 196.04-190.46C765.8 330.74 851.6 246.01 852.66 246.01c1.06 0 1.86 32.67 1.86 72.78 0 70.93.26 72.78 6.11 81.29 11.16 16.47 19.39 18.86 63.49 18.06 42.5-.8 46.49-2.12 58.97-19.13 5.58-7.17 5.58-10.36 6.37-180.37l.53-173.2-5.84-11.95c-3.72-6.91-9.83-14.08-15.41-17.27-9.03-5.05-14.08-5.31-179.31-5.84-137.59-.53-171.85.01-180.09 2.93z" />
    <path d="M100.12 121.42c-29.75 5.05-57.91 24.44-73.58 50.47-17.8 29.49-17 10.63-16.2 390.49l.8 343.73 8.5 17.8c9.56 20.19 27.89 41.44 44.36 51 26.83 15.67 8.5 14.87 381.46 14.87 306.28 0 343.2-.53 356.22-4.25 38.25-11.42 68.01-43.57 76.51-82.88 2.13-9.83 2.92-81.82 2.92-235.62v-221.8H745.63v409.08H145.27V256.63h409.08V118.5l-219.68.27c-121.13.26-226.59 1.32-234.55 2.65z" />
  </svg>
);

export default SvgLink;
