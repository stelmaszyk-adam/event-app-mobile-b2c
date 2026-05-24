import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:3000/api/v1';

export const usersHandlers = [
  http.get(`${BASE_URL}/users/me`, () => {
    return HttpResponse.json({
      data: {
        id: 'user-1',
        email: 'jan@example.com',
        name: 'Jan Kowalski',
        avatarUrl: null,
        emailVerified: true,
        createdAt: '2026-01-15T10:00:00Z',
      },
    });
  }),

  http.patch(`${BASE_URL}/users/me`, async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>;
    return HttpResponse.json({
      data: {
        id: 'user-1',
        email: 'jan@example.com',
        ...body,
      },
    });
  }),

  http.get(`${BASE_URL}/users/me/saved-events`, () => {
    return HttpResponse.json({
      data: [
        {
          id: 'event-1',
          title: 'Jazz Night w Klubie Pod Baranami',
          category: 'music',
          startDate: '2026-05-20T20:00:00Z',
          venue: { id: 'venue-1', name: 'Klub Pod Baranami' },
        },
      ],
      meta: { nextCursor: null, hasMore: false, total: 1 },
    });
  }),

  http.get(`${BASE_URL}/users/me/followed-venues`, () => {
    return HttpResponse.json({
      data: [
        {
          id: 'venue-2',
          name: 'Forum Przestrzenie',
          address: 'ul. Marii Konopnickiej 28, Kraków',
          eventsCount: 8,
        },
      ],
      meta: { nextCursor: null, hasMore: false, total: 1 },
    });
  }),
];
