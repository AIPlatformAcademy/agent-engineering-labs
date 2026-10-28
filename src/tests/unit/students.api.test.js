import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { createApp } from '../../../src/app.js';

const app = createApp();

describe('Students API', () => {
  it('GET /api/students returns students', async () => {
    const response = await request(app)
      .get('/api/students')
      .expect(200);

    expect(response.body.data).toHaveLength(3);
  });

  it('GET /api/students/:id returns a student', async () => {
    const response = await request(app)
      .get('/api/students/stu-001')
      .expect(200);

    expect(response.body.data.id).toBe('stu-001');
  });

  it('returns 404 for an unknown student', async () => {
    const response = await request(app)
      .get('/api/students/unknown')
      .expect(404);

    expect(response.body.error.code)
      .toBe('STUDENT_NOT_FOUND');
  });
});