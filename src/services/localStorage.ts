/**
 * It saves list of nationalities' codes to local storage
 *
 * @param string[] nationalitiesCodes
 */
export const persistNationalities = (nationalitiesCodes: string[]) => {
    localStorage.setItem("nationalities", nationalitiesCodes.join(','));
};

/**
 * Get list of codes of nationalities saved in local storage
 * @return string[]
 */
export const getPersistedNationalities = ():string[] => {
    const storedNationalitiesStr = localStorage.getItem("nationalities");
    return storedNationalitiesStr ? storedNationalitiesStr.split(',') : [];
}