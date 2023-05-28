# Fit Club App

## 1. creating with vite, ts

```bash
npm create vite@latest
```

## 2. 사용한 pakages

```bash
npm i @emailjs/browser
npm i framer-motion
npm i number-counter
npm i react-scroll
```

- @emailjs/browser 이메일 보낼 수 있게 하는 라이브러리
  - emailjs 가입 후, email services create → gmail service create
  - email template 생성 후 양식 작성
  - 그 후 샘플코드(send-email) 양식에 맞춰서 email send
- framer-motion : gasp처럼 html 노드에 애니메니션을 줄 수 있게 하는 라이브러리
- number-counter : start와 end, delay 값을 지정하면 start 부터 end 까지 값이 서서히 오르는 애니메이션을 구현하는 라이브러리, @type파일이 없어서 직접 선언해줘야함

```tsx
declare module "number-counter";
```

- react-scroll : 스크롤 스무스하게 이동시켜주는 라이브러리

## 3. vite에서 환경변수 사용하기

1. create .env
2. in .env

```tsx
VITE_API_KEY = YOUR_API_KEY;
```

1. use

```tsx
const apiKey = import.meta.env.VITE_API_KEY;
```

1. Property 'env' does not exist on type 'ImportMeta'.ts(2339) 이런 에러 날경우
2. create custom.d.ts 후 다음과 같이 작성

```tsx
interface ImportMeta {
  env: {
    [key: string]: string;
  };
}
```
