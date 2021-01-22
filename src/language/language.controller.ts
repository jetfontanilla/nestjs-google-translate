import { Controller, Get, Query } from '@nestjs/common';
import { GcpTranslateService } from './gcp-translate.service';
import { TranslateDto } from './dto/translate.dto'

@Controller('language')
export class LanguageController {
    constructor(private readonly gcpTranslateService: GcpTranslateService) {
    }

    @Get('translate')
    async translate(@Query() query: TranslateDto): Promise<string> {
        return this.gcpTranslateService.translate(query.text, query.to, query.from);
    }
}
