import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions 
}) => (
    <div>
        <p className="number">
            Qustion: {question} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer ? true : false} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;