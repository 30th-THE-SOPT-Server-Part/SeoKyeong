export{};

interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: '황서경',
    age: 23,
    group: 'YB',
    mbti: ['estp', 'esfp']
}

const serverMembers: ServerPart[] = [
    {
        name: '황서경',
        age: 23,
        group: 'YB',
        mbti: ['estp', 'esfp']
    },
    {
        name: '황서경',
        age: 23,
        group: 'YB',
        mbti: ['estp', 'esfp']
    }
]
console.log(serverPart);

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    hat?: number;          // 선택적
    sunglass?: number;     // 선택적
}

const closet: Closet[] = [
    {
        name: '황서경',
        shirt: 1,
        pants: 2,
        hat: 4,
        sunglass: 2
    }
]