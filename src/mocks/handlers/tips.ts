import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:3000/api/v1';

export const tipsHandlers = [
  http.post(`${BASE_URL}/tips`, async ({ request }) => {
    const body = (await request.json()) as { venueId: string; content: string };
    return HttpResponse.json(
      {
        data: {
          id: 'tip-1',
          venueId: body.venueId,
          content: body.content,
          userId: 'user-1',
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 },
    );
  }),

  http.get(`${BASE_URL}/users/me/tips`, () => {
    return HttpResponse.json({
      data: [
        {
          id: 'tip-1',
          venueId: 'venue-1',
          venueName: 'Klub Pod Baranami',
          content: 'Najlepsze miejsce na jazz w Krakowie!',
          createdAt: '2026-04-10T15:00:00Z',
        },
      ],
      meta: { nextCursor: null, hasMore: false, total: 1 },
    });
  }),
];
