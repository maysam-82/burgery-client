export const setAuthMethod = (authMethod: string): string => {
    console.log(authMethod);
    return authMethod.replace('/', '');
};
