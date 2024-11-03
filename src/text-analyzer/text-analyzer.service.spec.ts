import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalyzerService } from './text-analyzer.service';

describe('TextAnalyzerService', () => {
  let service: TextAnalyzerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextAnalyzerService],
    }).compile();

    service = module.get<TextAnalyzerService>(TextAnalyzerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
