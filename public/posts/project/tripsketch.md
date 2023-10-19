#### 아키텍쳐 다이어그램

![트립스케치 아키텍쳐.png](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F22f608db-9f85-4b54-9281-d319030585b8%2F3734c373-6ac9-4cfe-8175-14f7f82b3cb9%2F%25E1%2584%2590%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25B8%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25A6%25E1%2584%258E%25E1%2585%25B5_%25E1%2584%258B%25E1%2585%25A1%25E1%2584%258F%25E1%2585%25B5%25E1%2584%2590%25E1%2585%25A6%25E1%2586%25A8%25E1%2584%258E%25E1%2585%25A7.png?table=block&id=ea6528a0-64cf-4057-8c7b-e6344a8b7e25&spaceId=22f608db-9f85-4b54-9281-d319030585b8&width=1250&userId=eee6685c-261a-47e2-92e1-d45ec65502fb&cache=v2)

##

#### 주요 기능

- OAuth를 활용한 사용자인증
- 여행 일기 CRUD 기능
- 여행 일기 탐색 및 검색 기능
- 여행 일기 좋아요 기능
- 댓글 CRUD 기능
- 댓글 좋아요 기능
- 사용자 구독 기능
- 푸시 알림 및 알림 관리 기능
- 프로필 수정 기능

##

#### 주요 화면

![개발화면](https://github.com/sossost/portfolio./assets/110542210/f5bb03f5-4ca1-46a8-8097-054bcc2b1454)

##

#### 개발 경험 및 주요 담당 업무 내용

- 앱 메인 페이지, 탐색 페이지, 알림 페이지, 마이 페이지, 유저 페이지, 프로필 수정 페이지, 소셜 페이지 담당
- 구독유저 , 인기순, 최신순, 유저, 내 여행일기 리스트등 여러개의 게시물 리스트 데이터들을 상수화된 Query key로 관리
- FlatList, InfiniteQuery를 활용하여 무한스크롤 구현 및 RefreshControl 로 데이터 Pull to Refresh 구현
- 커스텀 ErrorBoundary와 Suspense를 조합한 컴포넌트로 선언적으로 비동기 처리
- Debouncing을 활용하여 실시간 검색 기능 최적화
- Expo notification으로 푸시 알림 구현 및 알림 페이지에서 각 알림에 해당하는 페이지 이동 구현
- 팔로우 핸들 로직에 useMutation을 통한 옵티미스틱 업데이트 적용
- LoadingFallback, ErrorFallback, Header, VariantSelector 등 공용 UI 컴포넌트 제작

##

#### 트러블 슈팅

1. 비동기 로직 작성시, 명확한 기준이 없고 명령적인 예외 처리로직으로 인해 개발이 오래 걸리고 유지보수가 어려운 문제

   → 공통적인 로직을 통한 선언적인 비동기 관리 필요성 절감

   ##

   ![트립스케치 컴포넌트 구조도.png](https://file.notion.so/f/f/22f608db-9f85-4b54-9281-d319030585b8/b893826a-bdd3-4558-a090-a5723ef17430/%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A6%E1%84%8E%E1%85%B5_%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%E1%84%83%E1%85%A9.png?id=c17a1681-59dc-41f1-89ba-9657f90e2be1&table=block&spaceId=22f608db-9f85-4b54-9281-d319030585b8&expirationTimestamp=1697817600000&signature=qTel1T6-Uqocfv-QSItfoFD2MAIVQntLntKUTOeETuI&downloadName=%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A6%E1%84%8E%E1%85%B5+%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3+%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%E1%84%83%E1%85%A9.png)

   ##

   ![비동기 처리 순서.png](https://file.notion.so/f/f/22f608db-9f85-4b54-9281-d319030585b8/c1661e9b-d93f-43f4-88c5-5843d4521c0a/%E1%84%87%E1%85%B5%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5_%E1%84%8E%E1%85%A5%E1%84%85%E1%85%B5_%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5.png?id=4d7cccce-2e25-4bbe-96f8-10f61c268df7&table=block&spaceId=22f608db-9f85-4b54-9281-d319030585b8&expirationTimestamp=1697817600000&signature=yS0Fa8X0JnsVxPKoRBGTWeTSOF5x4ZvFhPgqyS9tjTg&downloadName=%E1%84%87%E1%85%B5%E1%84%83%E1%85%A9%E1%86%BC%E1%84%80%E1%85%B5+%E1%84%8E%E1%85%A5%E1%84%85%E1%85%B5+%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5.png)

   ##

   - try catch가 내장된 공용 request 함수를 구현, 예외처리는 error를 로깅 후 throw하여 ErrorBoundary로 위임
   - 관심사별 Buisness layer들을 ErrorBoundary로 감싸, 각각 ErrorFallback을 렌더링
   - ErrorFallback의 버튼을 통해 error를 초기화 및 Status Code별 분기처리(ex. 401 일경우 인증페이지로 이동)
   - 1 Component / 1 API Call 로 waterfall 발생 방지
   - 최종적으로 AsyncBoundary(Suspense + ErrorBoundary)를 감싸 로딩 및 예외 처리

   → 재사용이 쉽고 선언적인 비동기 처리 로직으로 `개발 생산성과 유지보수성 향상`

2. Token Refresh 로직에서 인증이 만료 된 API Call이 여러개일때 모든 Call에 대해 Refresh를 진행. Response Interceptors의 에러 처리
   로직은 순서대로 실행될줄 알았는데, 로직의 시작 타이밍만 차이날 뿐, 내부 로직은 병렬적으로 처리가 되어서 생겼던 문제

   ##

   ![리프레시 로직.png](https://file.notion.so/f/f/22f608db-9f85-4b54-9281-d319030585b8/a0869adf-d5f6-439b-accc-908cac573daa/%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%A8.png?id=054972e3-97f6-400d-a780-877e5663511e&table=block&spaceId=22f608db-9f85-4b54-9281-d319030585b8&expirationTimestamp=1697817600000&signature=okBt3FVVQJo08QMlNkk5JPKb4NmfepLocq0asPsZTXs&downloadName=%E1%84%85%E1%85%B5%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%A8.png)

   ##

   → refreshSubscribers라는 대기열 큐를 만들어 갱신 상태를 분기처리, 토큰을 갱신중일땐, new Promise를 통해 대기열 배열에 추가 시킨후, 토큰갱신이 완료되면 대기열에 추가된 401에러 요청들을 순차적으로 처리하여 해결

3. 큰 썸네일이 들어가는 여행 일기 카드컴포넌트 특성상 모든 컴포넌트들을 한번에 렌더링하면 성능이 떨어지는 문제

   → React Query의 `Infinite Queries를 활용하여 무한스크롤 구현`, 여행일기를 페이지별로 끊어 패치하여 `초기 페이지 로딩 시간 단축 및 대역폭 사용 감소`, `FlatList` 을 통해 데이터를 `보이는 부분만 렌더링하여 성능 향상`

4. 팔로우 버튼을 클릭했을때, 바뀐 데이터를 기반해 버튼의 GUI가 데이터를 리패칭하는 시간 때문에 UI 반응속도가 느린 문제

   → `useMutation onMutate에 데이터를 미리 수정하여 setQueryData로 옵티미스틱 업데이트를 적용`, 버튼 클릭시 `즉각적인 UI업데이트` 및 `useMutation의 업데이트후 패치 결과에따른 후속 작업`으로 `데이터의 무결성 문제`도 해결
