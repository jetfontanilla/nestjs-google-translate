import { Module } from '@nestjs/common';
import { GcpTranslateService } from './language/gcp-translate.service';
import { LanguageController } from './language/language.controller';

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [GcpTranslateService],
})
export class AppModule {}
