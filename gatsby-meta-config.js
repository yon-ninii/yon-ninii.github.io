module.exports = {
  title: 'A.I Study Blog',
  description: `대학생의 개발 공부 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: 'https://yon-ninii.github.io',
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `박용민`,
    bio: {
      role: `대학생`,
      description: ['A.I에 관심을 가지기 시작한', '컴퓨터 비전을 배우는', '아직 쪼렙'],
      thumbnail: 'IMG_7105.JPG', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/yon-ninii`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `701pooh@naver.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '1998.07.01',
        activity: '출생',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2017.03 ~',
        activity: '인하대학교 정보통신공학과 입학',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2022.01 ~',
        activity: '블로그 오픈',
        links: {
          github: 'https://github.com/yon-ninii',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: 'A.I 연구실',
        description: '학교에서 좋은 기회로 A.I 컴퓨터 비전 연구실에 들어가게 되었습니다. 이때부터 여러 논문들을 접하고 읽게 되어 그 내용을 정리할 블로그를 만들기로 결정했습니다.',
        techStack: ['Python', 'PyTorch'],
        thumbnailUrl: 'Inha.jpg',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
