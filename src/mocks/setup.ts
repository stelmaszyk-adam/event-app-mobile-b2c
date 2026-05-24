export async function setupMocks() {
  if (__DEV__ && process.env.API_MOCKING === 'true') {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'warn' });
    console.log('[MSW] Mock server started');
  }
}
