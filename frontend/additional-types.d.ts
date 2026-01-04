// additional-types.d.ts

// 1. CSS 및 스타일 파일 모듈 선언
// TypeScript가 .css 파일을 만났을 때 에러를 내지 않고 일반 모듈로 인식하게 합니다.
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// 2. 정적 자원(이미지 등) 모듈 선언
// 이미지 파일을 import 할 때 발생할 수 있는 에러를 방지합니다.
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.webp";

// 3. Tailwind CSS 관련 (필요 시)
// Tailwind v4의 특수한 지시어나 모듈 인식을 돕습니다.
declare module "tailwindcss";