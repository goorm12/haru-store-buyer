# 하루상점 구매자 웹·앱

Next.js App Router + TypeScript + Tailwind CSS + Capacitor 기반 시작 프로젝트입니다.
현재는 프로젝트 기반과 소개 화면만 있으며 예약·로그인 기능은 구현 전입니다.

## 문서

[역할별 문서 안내](docs/README.md)에서 구매자 요구사항·명세와 공통 정책을 확인합니다.
판매자·플랫폼 관리자 문서는 haru-store-management에서 관리합니다.

## 개발

Node.js 24 LTS, npm 기준입니다.

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

`next build`는 `out`에 정적 웹 파일을 생성합니다. `npm start`는 정적 결과 미리보기입니다.

## Capacitor

```sh
npm run cap:sync
npm run cap:android
# Mac + Xcode에서 실행
npm run cap:ios
```

Android Studio와 Android SDK가 있어야 Android 실행·APK 빌드가 가능합니다.
iOS 빌드·실행·네이티브 동기화는 Mac + Xcode에서 수행합니다.
`com.harustore.app`은 개발용 앱 식별자이며 스토어 배포 전에 소유권·최종 식별자를 확인합니다.

## 구조

- `src/app`: Next.js 화면·레이아웃
- `public`: 정적 자산
- `docs`: 서비스 문서
- `android`, `ios`: Capacitor 네이티브 프로젝트
- `capacitor.config.ts`: 앱 이름·식별자·webDir

## 정적 앱 제약

Capacitor에 포함하는 앱은 서버 없이 실행 가능한 정적 출력물을 사용합니다.
런타임 Server Actions, SSR, API Route 등은 이 설정에 추가하지 않습니다.
회원·예약 API는 별도 `haru-store-backend` 서버와 연결할 예정입니다.
동적인 상품·예약 화면은 클라이언트에서 API를 조회하는 구조로 설계합니다.
비밀 키를 구매자 웹·앱 소스에 저장하지 않습니다.

## GitHub

https://github.com/goorm12/haru-store-buyer

## 설치 검증 메모

Next.js 정적 빌드, ESLint, TypeScript 검사, Capacitor Android 동기화를 확인했습니다.
런타임 의존성 npm audit 결과는 0건입니다. 개발 도구 하위 의존성에는 감사 경고 10건(높음 7·보통 3)이 남아 있습니다. 호환 가능한 audit fix는 적용했으며 강제 버전 다운그레이드는 하지 않았습니다.
Android APK·iOS 네이티브 빌드는 아직 수행하지 않았습니다.

## 프로젝트 구분

- 구매자 웹·Capacitor 앱: [haru-store-buyer](https://github.com/goorm12/haru-store-buyer).
- 판매자·플랫폼 관리자 웹: [haru-store-management](https://github.com/goorm12/haru-store-management).
- 공통 회원·예약 서버: [haru-store-backend](https://github.com/goorm12/haru-store-backend).

공통 정책은 `docs/common`, 구매자 구현 문서는 `docs/buyer`에서 관리합니다.
