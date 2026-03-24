import React from 'react';

export default function ExampleReactComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-2">React Component Example</h2>
      <p className="mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}