# 자판기 프로젝트

자판기 메커니즘을 구현한 모노레포 프로젝트입니다.

## 패키지 구조

- `packages/types`: 타입 정의
- `packages/core`: 자판기의 핵심 로직과 클래스
- `packages/react`: React용 훅 라이브러리
- `packages/playground/react`: 자판기 React 애플리케이션 예제

## 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (모든 패키지)
pnpm dev

# 특정 패키지만 개발
cd packages/playground/react && pnpm dev
```

## 빌드

```bash
# 모든 패키지 빌드
pnpm build

# 특정 패키지만 빌드
cd packages/react && pnpm build
```

## 코드 포맷팅 및 린트

```bash
# 모든 패키지 코드 포맷팅
pnpm format

# 모든 패키지 린팅
pnpm lint

# 타입 체크
pnpm check-types
```

## Mechanism

[original](https://www.figma.com/board/DxB3BAjM4wEgMJ6nk7VnUw/Vending-Machine-Mechanism?node-id=1-323&t=tZYMxu0Z2n1P6yhS-1)
<img src="./vending-machine-mechanism.png">
