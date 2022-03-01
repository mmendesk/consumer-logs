import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RouteModule } from 'src/domain/routesLogs/route.module';
import { RequestModule } from 'src/domain/requestsLogs/request.module';
import { ServiceModule } from 'src/domain/servicesLogs/service.module';
import { LatencieModule } from 'src/domain/LatenciesLogs/latencie.module';
import { ResponseModule } from 'src/domain/responsesLogs/response.module';

describe('LatencieController', () => {
  let latencie: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [LatencieModule],
    }).compile();

    latencie = moduleFixture.createNestApplication();
    await latencie.init();
  });

  it('/ (GET)', () => {
    return request(latencie.getHttpServer())
      .get('/latencie')
      .expect(200)
      .expect({
        proxy: 1430,
        gateway: 9,
        request: 1921,
      });
  });
});

describe('RequestController', () => {
  let requests: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RequestModule],
    }).compile();

    requests = moduleFixture.createNestApplication();
    await requests.init();
  });

  it('/ (GET)', () => {
    return request(requests.getHttpServer())
      .get('/request')
      .expect(200)
      .expect({
        method: 'GET',
        uri: '/get',
        url: 'http://httpbin.org:8000/get',
        size: '75',
        querystring: {},
        headers: {
          'accept': '*/*',
          'host': 'httpbin.org',
          'user-agent': 'curl/7.37.1',
        },
      });
  });
});

describe('ResponseController', () => {
  let responses: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ResponseModule],
    }).compile();

    responses = moduleFixture.createNestApplication();
    await responses.init();
  });

  it('/ (GET)', () => {
    return request(responses.getHttpServer())
      .get('/response')
      .expect(200)
      .expect({
        status: 200,
        size: '434',
        headers: {
          'Content-Length': '197',
          'via': 'gateway/0.3.0',
          'Connection': 'close',
          'access-control-allow-credentials': 'true',
          'Content-Type': 'application/json',
          'server': 'nginx',
          'access-control-allow-origin': '*',
        },
      });
  });
});

describe('RouteController', () => {
  let route: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RouteModule],
    }).compile();

    route = moduleFixture.createNestApplication();
    await route.init();
  });

  it('/ (GET)', () => {
    return request(route.getHttpServer())
      .get('/route')
      .expect(200)
      .expect({
        created_at: 1521555129,
        hosts: null,
        id: '75818c5f-202d-4b82-a553-6a46e7c9a19e',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
        paths: ['/example-path'],
        preserve_host: false,
        protocols: ['http', 'https'],
        regex_priority: 0,
        strip_path: true,
        updated_at: 1521555129,
      });
  });
});

describe('ServiceController', () => {
  let service: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ServiceModule],
    }).compile();

    service = moduleFixture.createNestApplication();
    await service.init();
  });

  it('/ (GET)', () => {
    return request(service.getHttpServer()).get('/service').expect(200).expect({
      connect_timeout: 60000,
      created_at: 1521554518,
      host: 'example.com',
      id: '0590139e-7481-466c-bcdf-929adcaaf804',
      name: 'myservice',
      path: '/',
      port: 80,
      protocol: 'http',
      read_timeout: 60000,
      retries: 5,
      updated_at: 1521554518,
      write_timeout: 60000,
    });
  });
});
