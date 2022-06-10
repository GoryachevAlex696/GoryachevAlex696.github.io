"use strict";

/**
 * 
 * @param {number} str РїРѕР»СѓС‡РµРЅРЅР°СЏ СЃ РєР»Р°РІРёР°С‚СѓСЂС‹ СЃС‚СЂРѕРєР°
 * @param {number} maxlength РјР°РєСЃРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР° СЃС‚СЂРѕРєРё
 *  
 */
 function truncate(str, maxlength) {

    if (str.length > maxlength)

        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}