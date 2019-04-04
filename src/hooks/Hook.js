import * as React from 'react';
import { render } from 'enzyme';

const FunctionComponent: React.FC = () => {
    const [count, setCount] = React.useState(0);

return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
    );
}