# 하루상점 — 공통 문서

구매자 프로젝트 haru-store-buyer와 판매자·플랫폼 관리자 프로젝트 haru-store-management가 함께 적용하는 거래·권한 기준이다. 두 저장소의 docs/common은 같은 내용으로 유지한다. 공통 문서의 상대 역할 설명은 해당 화면의 구현 소유권을 뜻하지 않는다.

| 문서 | 내용 |
| --- | --- |
| [요구사항](./requirements.md) | 서비스 범위, P01~P16, 거래 정책, 저장소 구분 |
| [용어 정의](./glossary.md) | 회원·구매자·판매자·상점·예약과 개발 식별자 |
| [기능 규칙](./functional-rules.md) | 공통 인증, 데이터·입력, 시간·수량·상태, 오류, 탈퇴, 검수 |
| [공지·문의 정책](./communication-policy.md) | 기존 develop 문서의 공지·댓글·비공개 문의 정책 |

## 원본 문서의 분리 기준

- haru-store-requirements.md: 역할별 화면 요구사항은 buyer 또는 seller/requirements.md, 거래 정책은 common/requirements.md.
- haru-store-functional-spec.md: B 화면·구매자 기능은 buyer, S 화면·판매자 기능은 seller, O 화면·플랫폼 관리자 기능은 admin, 공통 규칙은 common/functional-rules.md.
- haru-store-glossary.md: common/glossary.md.

역할별 문서 위치는 [문서 안내](../README.md)를 따른다. 기존 기능·정책 ID와 공통 규칙의 원본 장 번호는 추적을 위해 유지한다. 첨부 통합 문서보다 develop에 추가된 공지·문의 정책도 유지한다.

## 관리 원칙

공통 정책·용어 변경 시 두 저장소의 동일 파일을 함께 수정하고 내용 일치를 확인한다. 역할별 화면 변경은 담당 저장소에서 관리한다. buyer와 management는 별도 클라이언트이며 같은 haru-store-backend의 회원 시스템과 API를 사용한다. 문서는 구현 기준이며 기능 구현 완료를 뜻하지 않는다.
