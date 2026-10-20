# 하루상점 — 구매자 문서 안내

- [공통 요구사항](./common/requirements.md)
- [공통 용어](./common/glossary.md)
- [공통 기능 규칙·검수](./common/functional-rules.md)
- [공지·문의 정책](./common/communication-policy.md)

- [구매자 요구사항](./buyer/requirements.md)
- [구매자 기능 명세서](./buyer/functional-spec.md)

판매자·플랫폼 관리자 문서는 [management 문서](https://github.com/goorm12/haru-store-management/tree/develop/docs)에 있다.

## 저장소별 문서 구조

- `haru-store-buyer/docs/buyer`: 구매자 화면·예약·알림·설정.
- `haru-store-management/docs/seller`: 운영 상점·공구·예약·현장 결제·픽업 처리.
- `haru-store-management/docs/admin`: 신고·운영 조치·거래 처리 요청.
- 두 저장소의 `docs/common`: 동일한 공통 정책·용어·기능 규칙. [분리 기준과 관리 원칙](./common/README.md).

공통 로그인은 AUTH-01, 탈퇴는 ACCOUNT-01을 공통 기능 규칙에서 확인한다. 판매자·플랫폼 관리자 권한은 별도로 검증하며 구매자 앱에 판매자 관리 모드를 포함하지 않는다.
