import * as React from 'react';
import '../containers/Hello.css';
export interface Props {
    name: string;
    enthusiamLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({name, enthusiamLevel =1, }: Props) {
    if (enthusiamLevel <= 0) {
        throw new Error('You could be a little more enthusiastic =p');
    }

    return (
        <div className="hello">
          <div className="greeting">
            Hello {name + getExclamationMarks(enthusiamLevel)}
          </div>
          <div>
            {/* <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button> */}
          </div>
        </div>
      );
}

export default Hello;

// Helper function
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}