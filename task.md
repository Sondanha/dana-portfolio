# Portfolio Website - Task Tracker

## Phase 1~5: 완료 ✅
> 빌드 성공, 전체 섹션 구조·데이터 바인딩·React Islands 애니메이션·SEO 완비

---

## Phase 6: 폴리싱 (진행 예정)

---

## Phase 7: 리디자인 완료 ✅

### 7-1. 라이트 모드로 전환 (다크 → 라이트 기본)
- [x] `global.css`의 `@theme` 색상 토큰 전체를 라이트 팔레트로 교체
  - Background: `#fffdf9` / `#f7f4ed` / `#ffffff` (웜 아이보리 라이트 팔레트)
  - Text/Navy: `#17243e` (primary) / `#4c5870` (secondary) / `#7d8799` (tertiary)
  - Border: `#e8e1d6` / `#d8cbbb`
  - Brand accents: Coral `#e85d3f` (decorative) / `#c54b32` (accessible text), Gold `#f2b84b`, Navy `#17243e`
- [x] Stripe 보라색 중심 팔레트를 투명 DH 파비콘의 네이비·코럴·골드 조합으로 교체
- [x] 다크모드 전용 Tailwind 클래스 (`bg-[#0a0a0a]` 등) 모두 라이트 대응값으로 교체
- [x] Hero gradient, card 배경색 라이트 모드 재정의

### 7-2. Hero 섹션 — 태그 버튼 제거/교체
- [x] "Product Owner & IT Leader" pill 버튼(초록 점 + 어두운 배경 캡슐형) **삭제**
  - 현재 스타일: `rounded-full border bg-card px-4 py-1.5` → 제거 대상
- [x] 대신 깔끔한 eyebrow 텍스트 형식으로 교체 (예: `PRODUCT OWNER · IT LEADER`, 작은 대문자 트래킹)
- [x] 스크롤 인디케이터도 라이트 모드에 맞게 색상 조정

### 7-3. 카드/컨테이너 Border Radius — 절제된 SaaS 스타일 적용
- [x] 일관된 border-radius 기준 적용
  - 카드: `rounded-lg` (8px) ~ `rounded-xl` (12px)
  - 버튼/뱃지: `rounded-md` (6px) 또는 `rounded-lg` (8px)
  - 큰 섹션 컨테이너: `rounded-xl` (12px)
- [x] `global.css` `--radius-card: 0.75rem (12px)`으로 수정
- [x] 모든 `rounded-2xl` → `rounded-xl` or `rounded-lg` 교체

### 7-4. Projects 그리드 — 에디토리얼 SaaS 스타일 재설계
- [x] 카드 레이아웃 기준:
  - 카드가 크고 여백 넉넉, 텍스트 좌측 정렬
  - 카드 상단에 아이콘/애니메이션 영역 (thumbnail 대신)
  - 깔끔한 border + subtle shadow (라이트 모드)
  - 호버 시 elevation shadow 강화
- [x] 그리드 재구성: Featured 전체 너비 + Study 2열
  - Featured 프로젝트: full-width 카드, 좌측 텍스트 + 우측 미리보기
  - Study 프로젝트: 2~3열 작은 카드
- [x] 카드 내부: 생성 이미지를 사용하는 컬러 비주얼 영역 + 그라디언트 fallback
- [x] 애니메이션: 호버 시 subtle shadow 상승, 과한 glow 제거

### 7-5. Contact Me 섹션 신규 추가
- [x] 별도 섹션으로 독립 강조 (`id="contact"`)
- [x] 브랜드 CTA 배너 형식:
  - 전체 너비 배너, 네이비 배경 + 코럴·골드 글로우
  - 대형 헤딩: "함께 만들어갈 프로덕트가 있다면"
  - 서브: "커피 한 잔 사주세요. 비즈니스 얘기 나눠봐요."
  - [x] 이메일 primary CTA
  - [x] LinkedIn 미사용 결정에 따라 이메일 CTA만 제공
- [x] `portfolio.json` contact 필드 추가
- [x] Header 네비게이션에 "Contact" 링크 추가

### 7-6. 썸네일 이미지 생성 (AI 생성 이미지)
**스타일 가이드 (초기 생성 이미지):**
- 사이트 UI는 DH 네이비·코럴·골드 팔레트로 전환하고 프로젝트 이미지는 각 프로젝트의 개별 시각 언어를 유지
- 스타일: 3D isometric UI mockup, 또는 abstract gradient mesh
- 분위기: 미니멀, 클린, 테크/스타트업 감성
- 해상도: 16:9 비율 (1200×675px)

생성 필요 이미지:
- [x] `product-mobile.png` — 앱 UI 모바일 mockup (보라색 그라디언트 배경)
- [x] `product-web.png` — 대시보드/웹 UI mockup (라이트 그레이 + 퍼플 accent)
- [x] `study-1.png` — 추상적 데이터/AI 시각화 (인디고 톤)
- [x] `study-2.png` — 추상적 코드/아키텍처 (민트 + 퍼플)
- [x] `study-3.png` — 추상적 네트워크 그래프 (그레이 + 퍼플 포인트)
- [x] `crate.png` — CRATE 프론트엔드 저장소의 실제 서비스 미리보기

---

## Phase 8: 콘텐츠·프로덕션 품질 점검 (진행 중) 🔄

### 8-1. 실제 콘텐츠 확정
- [x] `portfolio.json`의 임시 프로젝트명을 실제 프로젝트 정보로 교체
- [x] 프로젝트별 설명, 기술 태그, 공개 가능한 GitHub URL 반영
- [x] CRATE를 네 번째 스터디 프로젝트로 추가하고 2인 협업·백엔드 담당 범위 및 BE/FE 저장소 연결
- [x] CRATE 개발 기간(`2025.12–2026.01`)과 MVP 성격 반영; 배포 링크는 없으며 잠정 중단 상태
- [x] `meta.github`와 `meta.velog` 값 및 Footer 링크 생성 방식 수정
- [x] Contact 섹션은 이메일만 공개하고 LinkedIn은 사용하지 않음
- [ ] 출시 예정일, 활동 기간 등 시점에 따라 달라지는 문구 최신화

### 8-2. 정적 자산·SEO 완성
- [x] 생성한 프로젝트 이미지를 `public/images/projects/`에 배치하고 모든 경로 확인
- [x] `/og-image.png` 제작 및 Open Graph/Twitter 메타데이터 연결
- [x] 투명 배경 DH 모노그램 favicon 적용
- [ ] canonical URL, Schema.org JSON-LD, `robots.txt`, sitemap의 도메인을 실제 배포 URL과 일치시킴
- [x] 사용하지 않는 Astro 스타터 파일·이미지 제거

### 8-3. 품질 검증
- [x] `npx astro build` 성공
- [ ] 깨진 내부 링크·외부 링크·누락 이미지가 없는지 확인
- [ ] 모바일/태블릿/데스크탑 반응형 확인
- [ ] 키보드 탐색, 포커스 표시, 이미지 대체 텍스트, 색상 대비 점검
- [ ] Lighthouse 기준 Performance / Accessibility / Best Practices / SEO 점검
- [ ] 브라우저 콘솔 오류와 404 요청이 없는지 확인

---

## Phase 9: Git 저장소·GitHub 연동

### 9-1. 로컬 Git 저장소 준비
- [x] `.gitignore`에 `dist/`, `.astro/`, `node_modules/`, 환경변수 파일이 제외되는지 재확인
- [x] 현재 폴더에서 Git 저장소 초기화 (`git init`)
- [x] 기본 브랜치를 `main`으로 설정
- [x] 커밋 전 `git status`로 포함 파일과 민감정보 확인
- [x] 최종 빌드가 성공한 상태로 초기 커밋 생성

### 9-2. GitHub 저장소 연결
- [x] GitHub에 `Sondanha/dana-portfolio` 저장소 생성
- [x] GitHub SSH 원격 저장소를 `origin`으로 등록
- [ ] `main` 브랜치 push
- [ ] GitHub에서 소스 파일과 커밋이 정상 반영됐는지 확인
- [ ] 브랜치 보호나 Dependabot 등 필요한 저장소 설정 검토

> 주의: 저장소 공개 여부와 이름은 사용자 확인 후 결정한다. 토큰·키·개인 환경파일은 절대 커밋하지 않는다.

---

## Phase 10: Cloudflare Pages 배포

### 10-1. Cloudflare Pages 프로젝트 생성
- [ ] Cloudflare 계정에서 GitHub 연동 권한 확인
- [ ] Phase 9에서 생성한 GitHub 저장소를 Cloudflare Pages에 연결
- [ ] Production branch를 `main`으로 설정
- [ ] Framework preset을 Astro로 설정
- [ ] Build command를 `npm run build`로 설정
- [ ] Build output directory를 `dist`로 설정
- [ ] 필요한 경우 Node.js 버전을 Cloudflare 환경변수로 고정
- [ ] 정적 사이트이므로 불필요한 Astro 서버 어댑터를 추가하지 않음

### 10-2. 첫 프로덕션 배포
- [ ] 첫 배포 로그에서 의존성 설치와 Astro 빌드 성공 확인
- [ ] Cloudflare가 발급한 실제 `*.pages.dev` 주소 기록
- [ ] 실제 주소가 기존 가정값 `https://sondanha.pages.dev`와 다른 경우 전체 URL 설정 수정
- [ ] URL 수정 커밋을 push하고 재배포 확인
- [ ] 필요 시 커스텀 도메인 연결 및 DNS/HTTPS 활성화 확인

---

## Phase 11: 배포 후 검증·자동 배포 확인

- [ ] 프로덕션 홈 화면이 HTTP 200으로 응답하는지 확인
- [ ] CSS, React Islands 애니메이션, 모바일 메뉴가 배포 환경에서 정상 동작하는지 확인
- [ ] 프로젝트 이미지, favicon, OG 이미지, sitemap, `robots.txt`가 정상 제공되는지 확인
- [ ] 이메일·GitHub·Velog 및 프로젝트 외부 링크 확인
- [ ] 모바일/데스크톱 실기기 또는 브라우저에서 최종 smoke test
- [ ] GitHub `main`에 작은 문서 변경을 push하여 Cloudflare 자동 재배포 확인
- [ ] Cloudflare 배포 상태와 실제 serving commit이 최신 GitHub 커밋과 일치하는지 확인
- [ ] 배포 실패 시 Cloudflare 로그를 기준으로 수정하고 재검증

---

## Phase 12: 프로젝트 인계·마감

- [ ] 기본 Astro README를 실제 프로젝트 설명과 로컬 실행·빌드·배포 방법으로 교체
- [ ] README에 GitHub 저장소 URL과 프로덕션 URL 기록
- [ ] `TASK.md`의 완료 항목과 남은 콘텐츠 작업을 실제 상태에 맞게 갱신
- [ ] 최종 Git commit SHA와 Cloudflare 배포 URL 기록
- [ ] 로컬 변경사항이 모두 커밋됐고 `git status`가 깨끗한지 확인
- [ ] 알려진 제한사항이나 후속 개선사항을 문서화

---

## 다음 세션 시작 시 체크리스트
1. `codebase.txt` 읽기 (규칙 확인)
2. Phase 7 순서대로 실행:
   - 7-1 (라이트 모드) → 7-2 (Hero 정리) → 7-3 (Border Radius) → 7-4 (Projects 재설계) → 7-5 (Contact 섹션) → 7-6 (이미지 생성)
3. Phase 8 콘텐츠·프로덕션 품질 점검
4. 각 구현 단계 후 빌드 검증 (`npx astro build`)
5. Dev 서버 실행 후 사용자 디자인 확인 요청
6. 사용자 확인 후 Phase 9 GitHub 연동 진행
7. Phase 10 Cloudflare Pages 배포 후 Phase 11 프로덕션 검증
8. Phase 12 문서화와 최종 인계

---

## 참고: 현재 실행 환경 주의사항
- npm install 시 `--ignore-scripts` 플래그 필수 (EPERM 버그 회피)
- esbuild 수동 실행 필요: `node node_modules/esbuild/install.js`
- dev 서버는 `AGENTS.md` 지침에 따라 `astro dev --background` 사용
- GitHub 저장소 생성·push 및 Cloudflare 연결은 외부 상태를 변경하므로 실행 직전에 대상 계정·저장소명·공개 범위를 확인
