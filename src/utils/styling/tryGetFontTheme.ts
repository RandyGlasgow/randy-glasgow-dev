import { themeConfig } from '../../configs/theme/config';

type TypographyTypes = typeof themeConfig.typography;
type TypographyKeys = {
  [K in keyof TypographyTypes]?: keyof TypographyTypes[K];
};

const tryGetFontTypography = <T extends TypographyKeys>({
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight
}: T): string => {
  // build font string for css
  const fontString = `
    font-size: ${themeConfig.typography.fontSize?.[fontSize || 'normal']};
    font-weight: ${themeConfig.typography.fontWeight?.[fontWeight || 'normal']};
    font-family: ${
      themeConfig.typography.fontFamily?.[fontFamily || 'sanSerif']
    };
    letter-spacing: ${
      themeConfig.typography.letterSpacing?.[letterSpacing || 'normal']
    };
    line-height: ${
      themeConfig.typography.lineHeight?.[lineHeight || 'normal']
    };;
  `;
  return fontString;
};

export default tryGetFontTypography;
