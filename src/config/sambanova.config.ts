import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SambaNovaConfigService {
  public readonly apiKey: string;
  public readonly baseUrl: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('SAMBA_NOVA_API_KEY');
    this.baseUrl = this.configService.get<string>('SAMBA_NOVA_BASE_URL');
  }
}
