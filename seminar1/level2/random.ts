import { Dinner } from './interface/Dinner';

const dinner: Dinner = {
    member: [
        {
            name: '채정아',
            group: 'ob'
        },
        {
            name: '김동재',
            group: 'yb'
        },
        {
            name: '강민재',
            group: 'yb'
        },
        {
            name: '김루희',
            group: 'ob'
        },
        {
            name: '황서경',
            group: 'yb'
        },
        {
            name: '김채은',
            group: 'yb'
        },
        {
            name: '김경린',
            group: 'yb'
        },
        {
            name: '허유정',
            group: 'ob'
        }
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array) {
        this.shuffle(array);

        const dinnerMember: string[] = [];
        dinnerMember.push(array.filter(n => n.group === 'yb')[0].name); 
        dinnerMember.push(array.filter(n => n.group === 'ob')[0].name); 
        
        console.log(`오늘의 저녁식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);