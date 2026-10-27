import request from 'supertest';

import {
  afterEach,
  describe,
  expect,
  it,
  vi
} from 'vitest';

import {
  createApp
} from '../../../src/app.js';

describe('CORS', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('permite preflight desde localhost en desarrollo', async () => {
    vi.stubEnv('NODE_ENV', 'development');

    const response = await request(createApp())
      .options('/api/students')
      .set('Origin', 'http://localhost:5173')
      .set(
        'Access-Control-Request-Method',
        'GET'
      )
      .set(
        'Access-Control-Request-Headers',
        'Content-Type'
      )
      .expect(204);

    expect(
      response.headers['access-control-allow-origin']
    ).toBe('http://localhost:5173');

    expect(
      response.headers['access-control-allow-methods']
    ).toContain('GET');

    expect(
      response.headers['access-control-allow-headers']
    ).toContain('Content-Type');
  });

  it('incluye CORS en respuestas desde localhost en desarrollo', async () => {
    vi.stubEnv('NODE_ENV', 'development');

    const response = await request(createApp())
      .get('/health')
      .set('Origin', 'http://127.0.0.1:4200')
      .expect(200);

    expect(
      response.headers['access-control-allow-origin']
    ).toBe('http://127.0.0.1:4200');
  });

  it('permite solicitudes desde un webview de VS Code en desarrollo', async () => {
    vi.stubEnv('NODE_ENV', 'development');

    const origin = 'vscode-webview://openapi-preview';
    const response = await request(createApp())
      .get('/health')
      .set('Origin', origin)
      .expect(200);

    expect(
      response.headers['access-control-allow-origin']
    ).toBe(origin);
  });

  it('no permite orígenes externos en desarrollo', async () => {
    vi.stubEnv('NODE_ENV', 'development');

    const response = await request(createApp())
      .get('/health')
      .set('Origin', 'https://example.com')
      .expect(200);

    expect(
      response.headers['access-control-allow-origin']
    ).toBeUndefined();
  });

  it('no habilita CORS en producción', async () => {
    vi.stubEnv('NODE_ENV', 'production');

    const response = await request(createApp())
      .get('/health')
      .set('Origin', 'http://localhost:5173')
      .expect(200);

    expect(
      response.headers['access-control-allow-origin']
    ).toBeUndefined();
  });
});