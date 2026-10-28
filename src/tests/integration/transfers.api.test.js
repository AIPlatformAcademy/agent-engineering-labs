import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import { createApp } from '../../../src/app.js';
import { resetData } from '../helpers/reset-data.js';

const app = createApp();

describe('Transfers API', () => {
  beforeEach(resetData);

  it('POST /api/transfers crea una transferencia válida', async () => {
    const response = await request(app)
      .post('/api/transfers')
      .send({
        senderId: 'stu-001',
        receiverId: 'stu-002',
        amount: 25,
        description: 'Almuerzo'
      })
      .expect(201);

    expect(response.body.data)
      .toMatchObject({
        senderId: 'stu-001',
        receiverId: 'stu-002',
        amount: 25,
        description: 'Almuerzo',
        status: 'COMPLETED'
      });

    expect(response.body.data.id)
      .toBeDefined();

    expect(response.body.data.createdAt)
      .toBeDefined();
  });

  it('GET /api/transfers devuelve las transferencias', async () => {
    await request(app)
      .post('/api/transfers')
      .send({
        senderId: 'stu-001',
        receiverId: 'stu-002',
        amount: 25
      })
      .expect(201);

    const response = await request(app)
      .get('/api/transfers')
      .expect(200);

    expect(response.body.data)
      .toHaveLength(1);
  });

  it('GET /api/transfers permite filtrar por estudiante', async () => {
    await request(app)
      .post('/api/transfers')
      .send({
        senderId: 'stu-001',
        receiverId: 'stu-002',
        amount: 10
      });

    await request(app)
      .post('/api/transfers')
      .send({
        senderId: 'stu-002',
        receiverId: 'stu-003',
        amount: 5
      });

    const response = await request(app)
      .get('/api/transfers')
      .query({
        studentId: 'stu-001'
      })
      .expect(200);

    expect(response.body.data)
      .toHaveLength(1);

    expect(response.body.data[0])
      .toMatchObject({
        senderId: 'stu-001',
        receiverId: 'stu-002'
      });
  });

  it('devuelve STUDENT_NOT_FOUND para un emisor inexistente', async () => {
    const response = await request(app)
      .post('/api/transfers')
      .send({
        senderId: 'stu-999',
        receiverId: 'stu-002',
        amount: 25
      })
      .expect(404);

    expect(response.body.error.code)
      .toBe('STUDENT_NOT_FOUND');

    expect(response.body.error.requestId)
      .toBeDefined();
  });
});