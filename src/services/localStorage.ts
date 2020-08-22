
export const persistNationalities = (nationalitiesCodes: string[]) => {
    localStorage.setItem("nationalities", nationalitiesCodes.join(','));
};

export const getPersistedNationalities = ():string[] => {
    const storedNationalitiesStr = localStorage.getItem("nationalities");
    return storedNationalitiesStr ? storedNationalitiesStr.split(',') : [];
}