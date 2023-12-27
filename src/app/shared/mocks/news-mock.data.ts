import { IMediaStackApiResponse } from '../interfaces/i-media-stack-api-response.interface';

export const NEWS_MOCK_DATA: IMediaStackApiResponse = {
  pagination: {
    limit: 25,
    offset: 0,
    count: 25,
    total: 93,
  },
  data: [
    {
      author: 'Jo Bird',
      title: 'A trip to the Pantomime in Northampton is the best gift ever!',
      description:
        'Seven older people and two members of staff enjoyed a thrilling performance of Snow White and the Seven Dwarfs at Royal & Derngate on Wednesday 20th December, thanks to the Rotary Club of Northampton Becket who donated the free tickets to Age UK Northamptonshire.',
      url: 'https://www.northamptonchron.co.uk/news/a-trip-to-the-pantomime-in-northampton-is-the-best-gift-ever-4458380',
      source: 'northamptonchron',
      image:
        'https://www.northamptonchron.co.uk/webimg/b25lY21zOjkyMTM5ZTc3LTliZTctNDA0ZS1hYTMyLWM2MzkyZDExYTE1ZjozZWI4ZGVmMS1hN2Q0LTQ1NmQtYjNlYS1mZjA2ODk4MjUyYTg=.jpg?width=1200&auto=webp',
      category: 'general',
      language: 'en',
      country: 'uk',
      published_at: '2023-12-27T09:22:59+00:00',
    },
    {
      author: null,
      title: null,
      description: null,
      url: null,
      source: 'northamptonchron',
      image: null,
      category: null,
      language: null,
      country: 'uk',
      published_at: null,
    },
    {
      author: 'Jo Bird',
      title: 'A trip to the Pantomime in Northampton is the best gift ever!',
      description:
        'Seven older people and two members of staff enjoyed a thrilling performance of Snow White and the Seven Dwarfs at Royal & Derngate on Wednesday 20th December, thanks to the Rotary Club of Northampton Becket who donated the free tickets to Age UK Northamptonshire.',
      url: 'https://www.northamptonchron.co.uk/news/a-trip-to-the-pantomime-in-northampton-is-the-best-gift-ever-4458380',
      source: 'northamptonchron',
      image:
        'https://www.northamptonchron.co.uk/webimg/b25lY21zOjkyMTM5ZTc3LTliZTctNDA0ZS1hYTMyLWM2MzkyZDExYTE1ZjozZWI4ZGVmMS1hN2Q0LTQ1NmQtYjNlYS1mZjA2ODk4MjUyYTg=.jpg?width=1200&auto=webp',
      category: 'general',
      language: 'en',
      country: 'uk',
      published_at: '2023-12-27T09:22:59+00:00',
    },
  ],
};
