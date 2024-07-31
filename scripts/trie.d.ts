import { ProcessedFeature } from 'src/processing/types';
import TrieSearch from 'trie-search';
type TrieType = {
    name: string;
    feature: ProcessedFeature;
};
export declare const allTrie: TrieSearch<TrieType>;
export declare const failedTrie: TrieSearch<TrieType>;
export declare const loadTries: () => void;
export {};
