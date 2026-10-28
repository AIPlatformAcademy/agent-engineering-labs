import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { createApp } from '../../../src/app.js';
import { resetData } from '../helpers/reset-data.js';

const app = createApp();

describe('Students API', () => {
  beforeEach(resetData);

  it('GET /api/students devuelve los estudiantes', async () => {
    const response = await request(app)
      .get('/api/students')
      .expect(200);

    expect(response.body.data).toHaveLength(3);
  });

  it('GET /api/students/:studentId devuelve un estudiante', async () => {
    const response = await request(app)
      .get('/api/students/stu-001')
      .expect(200);

    expect(response.body.data).toEqual({
      id: 'stu-001',
      name: 'Ana Torres',
      email: 'ana.torres@unipay.edu.pe',
      balance: 150
    });
  });

  it('devuelve STUDENT_NOT_FOUND cuando el estudiante no existe', async () => {
    const response = await request(app)
      .get('/api/students/stu-999')
      .expect(404);

    expect(response.body.error.code)
      .toBe('STUDENT_NOT_FOUND');

    expect(response.body.error.message)
      .toBe('Student was not found');

    expect(response.body.error.requestId)
      .toBeDefined();
  });
});

describe('Application API', () => {
  it('GET /health devuelve el estado de la aplicación', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body).toEqual({
      status: 'UP',
      service: 'unipay-api'
    });
  });

  it('devuelve ROUTE_NOT_FOUND para una ruta inexistente', async () => {
    const response = await request(app)
      .get('/api/unknown')
      .expect(404);

    expect(response.body.error.code)
      .toBe('ROUTE_NOT_FOUND');

    expect(response.body.error.message)
      .toBe('The requested route was not found');

    expect(response.body.error.requestId)
      .toBeDefined();
  });

  it('incluye x-request-id en la respuesta', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(
      response.headers['x-request-id']
    ).toBeDefined();
  });
});