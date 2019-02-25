import * as React from 'react';

const weeks = [...Array(52).keys()];
const days = [...Array(8).keys()];

export const App: React.FC = () => {
  return (
    <div>
      <h3>Something</h3>
      <div style={{ display: 'flex' }}>
        {weeks.map(w => (
          <div style={{ marginRight: 2 }} key={`w-${w}`}>
            {days.map(d => (
              <div
                key={`w${w}-d${d}`}
                style={{
                  width: 10,
                  height: 10,
                  background: '#EBEDF0',
                  marginBottom: 2,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
