import { Test, TestingModule } from '@nestjs/testing';
import { TextAnalyzerController } from './text-analyzer.controller';

describe('TextAnalyzerController', () => {
  let controller: TextAnalyzerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextAnalyzerController],
    }).compile();

    controller = module.get<TextAnalyzerController>(TextAnalyzerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
