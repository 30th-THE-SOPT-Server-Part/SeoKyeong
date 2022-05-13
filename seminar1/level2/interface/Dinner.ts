import { Member } from './Member';

// Dinner interface
export interface Dinner {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}