import { ProcessedFeature } from 'src/processing/types';
type PartitionData = {
    providers: (() => Promise<ProcessedFeature[][]>)[];
    pages: number;
};
declare global {
    interface Window {
        data: PartitionData;
        failed: PartitionData;
        config: {
            showFailedOnStart: boolean;
        };
    }
}
export {};
