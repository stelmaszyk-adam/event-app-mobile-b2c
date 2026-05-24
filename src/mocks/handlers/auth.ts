import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:3000/api/v1';

export const authHandlers = [
  http.post(`${BASE_URL}/auth/login`, async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };
    return HttpResponse.json({
      data: {
        accessToken: 'mock-access-token-xyz',
        refreshToken: 'mock-refresh-token-abc',
        user: {
          id: 'user-1',
          email: body.email,
          name: 'Jan Kowalski',
          avatarUrl: null,
          emailVerified: true,
        },
      },
    });
  }),

  http.post(`${BASE_URL}/auth/register`, async ({ request }) => {
    const body = (await request.json()) as { email: string; name: string };
    return HttpResponse.json(
      {
        data: {
          id: 'user-2',
          email: body.email,
          name: body.name,
          emailVerified: false,
        },
      },
      { status: 201 },
    );
  }),

  http.post(`${BASE_URL}/auth/verify-email`, () => {
    return HttpResponse.json({
      data: { message: 'Email verified successfully' },
    });
  }),

  http.post(`${BASE_URL}/auth/password-reset`, () => {
    return HttpResponse.json({
      data: { message: 'Password reset email sent' },
    });
  }),

  http.post(`${BASE_URL}/auth/refresh`, () => {
    return HttpResponse.json({
      data: {
        accessToken: 'mock-refreshed-token-xyz',
        refreshToken: 'mock-refreshed-refresh-token',
      },
    });
  }),
];
