import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SambaNovaConfigService } from 'src/config/sambanova.config';
import { TextAnalyzerController } from './text-analyzer.controller';
import { TextAnalyzerService } from './text-analyzer.service';

@Module({
  imports: [HttpModule],
  controllers: [TextAnalyzerController],
  providers: [TextAnalyzerService, SambaNovaConfigService],
})
export class TextAnalyzerModule {}
