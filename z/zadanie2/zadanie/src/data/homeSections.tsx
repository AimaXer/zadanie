export type SectionsType = {
  id: number;
  image?: string;
  title?: string;
  subTitle?: string;
  body?: string;
  moreButton?: boolean;
  placeholder?: boolean;
  sections?: SectionsType[];
};

export const Sections: SectionsType[] = [
  {
    id: 1,
    placeholder: true,
    title: 'KILKA SŁÓW O NAS',
    subTitle: 'KIM JESTESMY I DOKAD ZMIERZAMY',
    body: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto',
    moreButton: true,
  },
  {
    id: 2,
    image: 'https://random.imagecdn.app/500/500',
    body: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto',
  },
  {
    id: 3,
    sections: [
      {
        id: 4,
        image: 'https://random.imagecdn.app/500/500',
      },
      {
        id: 5,
        image: 'https://random.imagecdn.app/500/500',
      },
      {
        id: 6,
        image: 'https://random.imagecdn.app/500/500',
      },
      {
        id: 7,
        image: 'https://random.imagecdn.app/500/500',
        body: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto',
      },
    ],
  },
  {
    id: 8,
    placeholder: true,
    title: 'NASZA OFERTA',
    subTitle: 'DOWIEDZ SIE CO MOZEMY ZAOFEROWAC',
    body: '500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto',
    moreButton: true,
  },
];
