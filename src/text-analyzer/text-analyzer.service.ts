import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SambaNovaConfigService } from 'src/config/sambanova.config';

@Injectable()
export class TextAnalyzerService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: SambaNovaConfigService,
  ) {}

  private async analyzeText(task: string, text: string): Promise<any> {
    const url = `${this.configService.baseUrl}/chat/completions`;
    const headers = {
      Authorization: `Bearer ${this.configService.apiKey}`,
      'Content-Type': 'application/json',
    };
    const data = {
      model: 'Meta-Llama-3.1-405B-Instruct',
      messages: [
        { role: 'system', content: `Perform ${task} on the following text.` },
        { role: 'user', content: text },
      ],
    };

    const response = await firstValueFrom(
      this.httpService.post(url, data, { headers }),
    );
    return response.data;
  }

  public async getKeyCharacters(text: string): Promise<any> {
    return this.analyzeText('entity recognition', text);
  }

  public async detectLanguage(text: string): Promise<any> {
    return this.analyzeText('language detection', text);
  }

  public async analyzeSentiment(text: string): Promise<any> {
    return this.analyzeText('sentiment analysis', text);
  }

  public async generateSummary(text: string): Promise<any> {
    return this.analyzeText('summarization', text);
  }
}
