import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GcpTranslateService } from './gcp-translate.service';
import { TranslateDto } from './dto/translate.dto';
import { DetectDto } from './dto/detect.dto';
import { LanguagesDto } from './dto/languages.dto';
import {
  DetectResult,
  LanguageResult,
} from '@google-cloud/translate/build/src/v2';

@Controller('language')
export class LanguageController {
  constructor(private readonly gcpTranslateService: GcpTranslateService) {}

  @Post('translate')
  async translate(@Body() translateDto: TranslateDto): Promise<string> {
    return this.gcpTranslateService.translate(
      translateDto.text,
      translateDto.to,
      translateDto.from,
    );
  }

  @Post('detect')
  async detectLanguage(@Body() detectDto: DetectDto): Promise<DetectResult> {
    return this.gcpTranslateService.detect(detectDto.text);
  }

  @Get('list')
  async getSupportedLanguages(
    @Query() query: LanguagesDto,
  ): Promise<LanguageResult[]> {
    return this.gcpTranslateService.supportedLanguages(query.displayLanguage);
  }
}
