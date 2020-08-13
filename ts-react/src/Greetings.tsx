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

import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
};

const Greetings = ({ name, mark }: GreetingsProps) => (
    <div>
        Hello, {name} {mark}
    </div>
);

Greetings.defaultProps = {
    mark: '!',
};

export default Greetings;
