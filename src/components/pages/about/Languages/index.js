import LocalizedStrings from 'react-localization';

import { En } from "./English.js";
import { Gr } from "./Greek.js";

export const strings = new LocalizedStrings({
    gr: Gr,
    en: En
});