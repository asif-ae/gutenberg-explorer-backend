import { Body, Controller, Post } from '@nestjs/common';
import { TextAnalyzerService } from './text-analyzer.service';

@Controller('text-analyzer')
export class TextAnalyzerController {
  constructor(private readonly textAnalyzerService: TextAnalyzerService) {}

  @Post('key-characters')
  async getKeyCharacters(@Body('text') text: string) {
    return this.textAnalyzerService.getKeyCharacters(text);
  }

  @Post('language-detection')
  async detectLanguage(@Body('text') text: string) {
    return this.textAnalyzerService.detectLanguage(text);
  }

  @Post('sentiment-analysis')
  async analyzeSentiment(@Body('text') text: string) {
    return this.textAnalyzerService.analyzeSentiment(text);
  }

  @Post('summary')
  async generateSummary(@Body('text') text: string) {
    return this.textAnalyzerService.generateSummary(text);
  }
}
