export const PROJECTS = [
  {
    id: "portfolio",
    name: "포트폴리오 사이트",
    period: "2023.09.11~2023.09.17",
    thumbnail:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9.png",
    image:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A91.png",
    introduction: "현재 보고 계시는 포트폴리오 사이트 입니다.",
    description:
      "제가 좋아하는 우주 공간을 테마로 제작한 포트폴리오 사이트 입니다. 사용자를 위해 재미있는 인터랙션 요소들을 추가하였습니다.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sossost/portfolio.",
  },
  {
    id: "matissue",
    name: "맛이슈",
    period: "2023.05.29~2023.06.23",
    thumbnail:
      "https://fog-of-war.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A1%E1%86%BA%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B2.gif",
    image:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%86%E1%85%A1%E1%86%BA%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B21.png",
    introduction: "맛있는 레시피들을 공유하는 서비스",
    description:
      "맛있는 레시피 공유 커뮤니티 서비스 입니다. 사용자는 자신만의 레시피를 업로드하여 다른 사용자들에게 공유할 수 있습니다. 또한 다른 사람이 업로드한 레시피를 스크랩 하여 마이페이지에 저장해놓을 수 있으며, 다른 사용자의 레시피 글에 댓글을 달고 좋아요를 눌러서 상호작용을 할 수 있습니다.",
    tags: ["React", "TypeScript", "Styled-Components", "Recoil"],
    link: "project/matissue",
    website: "https://matissue.com",
    testId: "Id: shagrat // password: asdfqwerqQ!",
    github: "https://github.com/sossost/matissue",
  },
  {
    id: "todo-list",
    name: "투두리스트",
    period: "2023.07.30~2023.08.06",
    thumbnail:
      "https://fog-of-war.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-09-03+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+1.16.14.png",
    introduction:
      "투두리스트를 작성할 수 있는 서비스. 음악 재생기능을 추가해 단조로운 서비스에 색다른 재미를 더했습니다.",
    description:
      "기능 구현에 관련된 라이브러리 도움 없이 직접 구현한 투두리스트 입니다. Context API를 활용하여 클라이언트 사이드에서 전역상태로 데이터를 캐싱하였고 옵티미스틱 업데이트로  사용자 경험을 향상시켰습니다. 또한 음악 재생기능을 추가하여 단조로운 서비스에 색다른 재미를 더했습니다. ",
    tags: ["React", "TypeScript", "Emotion", "Context API"],
    website: "https://todolist-sosso.vercel.app/",
    github: "https://github.com/sossost/todolist",
  },
  {
    id: "ai-saas-clone",
    name: "AI SaaS 클론",
    period: "2023.07.25~2023.07.30",
    thumbnail:
      "https://fog-of-war.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2023-09-03+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+4.18.07.png",
    introduction:
      "AI 를 통한 이미지, 비디오, 대화, 음악, 코드를 생성할 수 있는 서비스 클론코딩입니다.",
    description:
      "Open AI API와 Replicate AI API를 활용해서 만든 AI SaaS 서비스를 클론 코딩한 프로젝트 입니다. 사용자는 AI를 통해 이미지, 비디오, 대화, 음악, 코드를 생성할 수 있습니다. ",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    github: "https://github.com/sossost/SaaS-AI-Tutorial",
  },
  {
    id: "tripsketch",
    name: "트립스케치",
    period: "2023.06.29 ~ 2023.09.27",
    thumbnail:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A6%E1%84%8E%E1%85%B5.png",
    introduction:
      "여행을 다니면서 느꼈던 감정들을 기록하고 공유하는 서비스 입니다.",
    description:
      "여행에 관한 정보를 공유하는 서비스는 많지만 여행 경험, 감성 등 여행 그 자체를 공유하는 서비스는부족합니다. 요즘 많은 여행 유튜버들이 인기를 얻고 있는데, 여행 유튜버들을 통해 대리 여행을 통해 간접 경험을 하고 대리만족을 얻듯이여행 그 자체를 공유하는 서비스를 통해 여행을 하고 싶은 사람들에게 그 감성을 얻게 하고자 하였습니다.",
    tags: [
      "React-Native",
      "TypeScript",
      "Styled-Components",
      "React-Query",
      "Expo CLI",
      "Expo notification",
    ],
    link: "project/tripsketch",
    github: "https://github.com/sossost/tripsketch",
  },
  {
    id: "fog-of-seoul",
    name: "서울의 안개",
    period: "2023.07.18 ~ 진행중",
    thumbnail:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%A5%E1%84%8B%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%B4%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A2.png",
    introduction:
      "서울지역의 장소들을 탐험하면서 안개에 가려진 서울의 지도를 조금씩 밝혀나가는 서비스입니다.",
    description:
      "서울의 안개는 서울지역의 장소들을 탐험하면서 안개에 가려진 서울의 지도를 조금씩 밝혀나가는 서비스입니다. 사용자는 구 별로 방문한 장소에 인증 사진과 글을 남겨서 포인트를 얻을 수 있으며, 랭킹 시스템을 통해 다른 사용자들과 경쟁을 할 수 있습니다. 그리고 특정 조건들을 만족시키면 배지와 칭호 등을 얻을 수 있습니다.",
    tags: [
      "React",
      "TypeScript",
      "Emotion",
      "React-Query",
      "Google Map API",
      "Context API",
    ],
    link: "project/fog-of-seoul",
    github: "https://github.com/sossost/fog-of-seoul",
  },
  {
    id: "spotify-clone",
    name: "스포티파이 클론",
    period: "2023.07.13~2023.07.24",
    thumbnail:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A9%E1%84%90%E1%85%B5%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5.png",
    introduction: "스포티파이 서비스 클론 코딩입니다.",
    description:
      "스포티파이 서비스를 클론 코딩한 프로젝트 입니다. Supabase로 백엔드를 추구하여 음악을 직접 업로드할 수 있고, useSound 라이브러리를 통해 음악을 재생할 수 있으며, Stripe로 유료 멤버십을 구현하였습니다.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Zustand",
    ],
    website: "https://spotify-omega-two.vercel.app/",
    github: "https://github.com/sossost/Spotify-Clone-With-Next.js13",
  },
  {
    id: "twiney-wine",
    name: "Twiney Wine",
    period: "2023.04.17~2023.04.28",
    thumbnail:
      "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B5%E1%84%8B%E1%85%AA%E1%84%8B%E1%85%B5%E1%86%AB.png",
    introduction: "온라인 와인 쇼핑몰 서비스 입니다.",
    description: "온라인 와인 쇼핑몰 서비스 입니다.",
    tags: ["React.js", "Tailwind CSS", "Context API"],
    link: "project/twiney-wine",
    github: "https://github.com/sossost/Twiney-Wine",
  },
];

export const DEFAULT_IMAGE =
  "https://tripsketchbucket.s3.ap-northeast-2.amazonaws.com/portfolio/default.png";
