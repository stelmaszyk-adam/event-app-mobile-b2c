import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:3000/api/v1';

const mockVenues = [
  {
    id: 'venue-1',
    name: 'Klub Pod Baranami',
    address: 'Rynek Główny 27, Kraków',
    imageUrl: null,
    latitude: 50.0614,
    longitude: 19.9372,
    eventsCount: 12,
    isFollowed: false,
  },
  {
    id: 'venue-2',
    name: 'Forum Przestrzenie',
    address: 'ul. Marii Konopnickiej 28, Kraków',
    imageUrl: null,
    latitude: 50.0487,
    longitude: 19.9386,
    eventsCount: 8,
    isFollowed: true,
  },
  {
    id: 'venue-3',
    name: 'Park Jordana',
    address: 'al. 3 Maja, Kraków',
    imageUrl: null,
    latitude: 50.0578,
    longitude: 19.9211,
    eventsCount: 3,
    isFollowed: false,
  },
];

export const venuesHandlers = [
  http.get(`${BASE_URL}/venues`, () => {
    return HttpResponse.json({
      data: mockVenues,
      meta: { nextCursor: null, hasMore: false, total: mockVenues.length },
    });
  }),

  http.get(`${BASE_URL}/venues/:id`, ({ params }) => {
    const venue = mockVenues.find((v) => v.id === params.id);
    if (!venue) {
      return HttpResponse.json(
        { statusCode: 404, error: 'NOT_FOUND', message: 'Venue not found' },
        { status: 404 },
      );
    }
    return HttpResponse.json({ data: venue });
  }),

  http.post(`${BASE_URL}/venues/:id/follow`, ({ params }) => {
    return HttpResponse.json({ data: { venueId: params.id, followed: true } });
  }),

  http.delete(`${BASE_URL}/venues/:id/follow`, ({ params }) => {
    return HttpResponse.json({ data: { venueId: params.id, followed: false } });
  }),
];
