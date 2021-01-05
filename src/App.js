import { useState } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sendFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={sendFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {countTotalFeedback() === 0 && (
          <Notification infoMessage="No feedback given:(" />
        )}
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   sendFeedback = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     //return Object.values(this.state).reduce((acc, option) => acc + option, 0);

//     const { good, bad, neutral } = this.state;
//     return good + bad + neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     //return Math.round((good / this.countTotalFeedback()) * 100) || 0;
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, bad, neutral } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.sendFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 && (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//           {total === 0 && <Notification infoMessage="No feedback given:(" />}
//         </Section>
//       </>
//     );
//   }
// }

export default App;
