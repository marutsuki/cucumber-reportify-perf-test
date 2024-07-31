export declare const initEngine: (failedOnly: boolean) => void;
declare const engine: {
    setSearchFilter: (filter: string) => void;
    setFailedScenariosOnly: (enabled: boolean) => void;
    setFailedFeaturesOnly: (enabled: boolean) => void;
    setFailedOnly: (enabled: boolean) => void;
    togglePage: (page: number) => Promise<void>;
};
export default engine;
