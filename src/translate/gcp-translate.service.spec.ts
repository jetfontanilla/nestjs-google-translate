import { Test, TestingModule } from '@nestjs/testing';
import { GcpTranslateService } from './gcp-translate.service';

describe('GcpTranslateService', () => {
  let provider: GcpTranslateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GcpTranslateService],
    }).compile();

    provider = module.get<GcpTranslateService>(GcpTranslateService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
