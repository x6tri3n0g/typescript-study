// import React from 'react';

// type GreetingsProps = {
//     name: string;
// };

// const Greetings: React.FC<GreetingsProps> = ({ name }) => (
//     <div>Hello, {name}</div>
// );

// export default Greetings;

// import React from 'react';

// type GreetingsProps = {
//     name: string;
//     mark: string;
// };

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => (
//     <div>
//         Hello, {name} {mark}
//     </div>
// );

// // 무의미한 defaultProps
// Greetings.defaultProps = {
//     mark: '!',
// };

// export default Greetings;

// React.FC 사용 안 하기
// import React from 'react';

// type GreetingsProps = {
//     name: string;
//     mark: string;
// };

// const Greetings = ({ name, mark }: GreetingsProps) => (
//     <div>
//         Hello, {name} {mark}
//     </div>
// );

// Greetings.defaultProps = {
//     mark: '!',
// };

// export default Greetings;

// ? 사용하기
// import React from 'react';
// type GreetingsProps = {
//     name: string;
//     mark: string;
//     optional?: string;
// };

// function Greetings({ name, mark, optional }: GreetingsProps) {
//     return (
//         <div>
//             Hello, {name} {mark}
//             {optional && <p>{optional}</p>}
//         </div>
//     );
// }

// Greetings.defaultProps = {
//     mark: '!',
// };

// export default Greetings;

// 컴포넌트에 함수를 props로 받아올 때 타입지정하기
import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void; // 아무 것도 리턴하지 않는 함수를 의미함
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);

    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!',
};

export default Greetings;
