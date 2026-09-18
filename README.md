# Dana Portfolio

Son Danha의 제품 기획, AI·데이터 프로젝트, 백엔드 개발 경험을 소개하는 개인 포트폴리오입니다.

## Tech stack

- Astro 5 (static site generation)
- React 19 islands
- Tailwind CSS 4
- Framer Motion
- Cloudflare Pages

## Local development

```sh
npm install
npm run dev
```

프로덕션 빌드는 다음 명령으로 확인합니다.

```sh
npm run build
npm run preview
```

## Content and structure

- `src/data/portfolio.json`: 프로필, 프로젝트, 기술, 타임라인 콘텐츠
- `src/components/sections/`: 페이지 섹션
- `src/components/ui/`: React 기반 애니메이션 UI
- `src/styles/global.css`: DH 브랜드 팔레트와 전역 디자인 토큰
- `public/images/projects/`: 프로젝트 이미지

## Deployment

`main` 브랜치를 Cloudflare Pages에 연결하는 정적 배포를 사용합니다.

- Build command: `npm run build`
- Output directory: `dist`
- Planned production URL: `https://sondanha.pages.dev`
