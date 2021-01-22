import { Module } from '@nestjs/common';
import { TranslateController } from './translate/translate.controller';
import { GcpTranslateService } from './translate/gcp-translate.service';

@Module({
  imports: [],
  controllers: [TranslateController],
  providers: [GcpTranslateService],
})
export class AppModule {}
