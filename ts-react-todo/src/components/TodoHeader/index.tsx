import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.color.primaryText};
`;

const TodoHeader: React.FC = () => {
    return <HeaderTitle>나두 할수 있두!</HeaderTitle>;
};

export default TodoHeader;
