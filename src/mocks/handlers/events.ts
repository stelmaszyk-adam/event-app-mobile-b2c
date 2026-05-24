import { http, HttpResponse } from 'msw';

const BASE_URL = 'http://localhost:3000/api/v1';

const mockEvents = [
  {
    id: 'event-1',
    title: 'Jazz Night w Klubie Pod Baranami',
    description: 'Wieczór jazzowy z lokalnymi muzykami.',
    category: 'music',
    startDate: '2026-05-20T20:00:00Z',
    endDate: '2026-05-20T23:00:00Z',
    venue: { id: 'venue-1', name: 'Klub Pod Baranami', address: 'Rynek Główny 27, Kraków' },
    imageUrl: null,
    latitude: 50.0614,
    longitude: 19.9372,
    price: { amount: 40, currency: 'PLN' },
    isFree: false,
  },
  {
    id: 'event-2',
    title: 'Nocny Targ Śniadaniowy',
    description: 'Street food i lokalne specjały.',
    category: 'food_drink',
    startDate: '2026-05-21T18:00:00Z',
    endDate: '2026-05-21T22:00:00Z',
    venue: { id: 'venue-2', name: 'Forum Przestrzenie', address: 'ul. Marii Konopnickiej 28' },
    imageUrl: null,
    latitude: 50.0487,
    longitude: 19.9386,
    price: null,
    isFree: true,
  },
  {
    id: 'event-3',
    title: 'Yoga w Parku Jordana',
    description: 'Poranna sesja jogi na świeżym powietrzu.',
    category: 'wellness',
    startDate: '2026-05-22T07:00:00Z',
    endDate: '2026-05-22T08:30:00Z',
    venue: { id: 'venue-3', name: 'Park Jordana', address: 'al. 3 Maja, Kraków' },
    imageUrl: null,
    latitude: 50.0578,
    longitude: 19.9211,
    price: { amount: 25, currency: 'PLN' },
    isFree: false,
  },
];

export const eventsHandlers = [
  http.get(`${BASE_URL}/events`, ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    let filtered = mockEvents;
    if (category) {
      filtered = mockEvents.filter((e) => e.category === category);
    }
    return HttpResponse.json({
      data: filtered,
      meta: { nextCursor: null, hasMore: false, total: filtered.length },
    });
  }),

  http.get(`${BASE_URL}/events/:id`, ({ params }) => {
    const event = mockEvents.find((e) => e.id === params.id);
    if (!event) {
      return HttpResponse.json(
        { statusCode: 404, error: 'NOT_FOUND', message: 'Event not found' },
        { status: 404 },
      );
    }
    return HttpResponse.json({ data: event });
  }),

  http.get(`${BASE_URL}/events/search`, ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get('q')?.toLowerCase() || '';
    const results = mockEvents.filter(
      (e) => e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query),
    );
    return HttpResponse.json({
      data: results,
      meta: { nextCursor: null, hasMore: false, total: results.length },
    });
  }),
];
