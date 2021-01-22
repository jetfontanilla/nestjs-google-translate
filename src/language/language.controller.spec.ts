import { Test, TestingModule } from '@nestjs/testing';
import { GcpTranslateService } from './gcp-translate.service';
import { LanguageController } from './language.controller';

describe('LanguageController', () => {
  let languageController: LanguageController;
  let gcpTranslateService: GcpTranslateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageController],
      providers: [GcpTranslateService]
    }).compile();

    languageController = module.get<LanguageController>(LanguageController);
    gcpTranslateService = module.get<GcpTranslateService>(GcpTranslateService);
  });

  it('should be defined', () => {
    expect(languageController).toBeDefined();
  });

  describe('translate', () => {

    it('should translate using text and target language', async () => {
      const translatedText = "hola mundo";
      jest.spyOn(gcpTranslateService, 'translate').mockImplementation(() => Promise.resolve(translatedText));

      const translateRequest = {
        text: 'hello word',
        to: 'es'
      };
      expect(await languageController.translate(translateRequest)).toBe(translatedText);
    });

    it('should translate using text and target language and source language', async () => {
      const translatedText = "hola mundo";
      jest.spyOn(gcpTranslateService, 'translate').mockImplementation(() => Promise.resolve(translatedText));

      const translateRequest = {
        text: 'ハローワールド',
        to: 'es',
        from: 'ja'
      };
      expect(await languageController.translate(translateRequest)).toBe(translatedText);
    });

  });

});
