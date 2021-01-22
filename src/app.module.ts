import { Module } from '@nestjs/common';
import { TranslateController } from './translate/translate.controller';

@Module({
  imports: [],
  controllers: [TranslateController],
  providers: [],
})
export class AppModule {}
