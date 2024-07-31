import { ProcessedFeature } from 'src/processing/types';
export declare const features: (partitionIndex: number, failedOnly: boolean, searchFilter?: string) => Promise<ProcessedFeature[][]>;
