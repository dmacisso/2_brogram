export default function Hero() {
  return (
    <>
      <h5>Complete this training program if you want to ...</h5>
      <ol className="benefits-list">
        <li>Follow a simple program with guaranteed results</li>
        <li>Get fit, healthy, strong and trim </li>
        <li>Learn more about gym, training, and technique</li>
        <li>Become a lifetime bro workout enthusiast 💛 </li>
      </ol>
      <h3>The Rules</h3>
      <p>
        To complete this program, you <b>MUST</b> follow these 3 simple rules:{' '}
      </p>
      <ul className="rules-list">
        <div className="rule-item">
          <p>
            <b>Rest</b>
          </p>
          <p>Ensure you are taking rest days when necessary</p>
        </div>
        <div className="rule-item">
          <p>
            <b>Reps</b>
          </p>
          <p>
            Every rep is a pause rep following a{' '}
            <abbr title="for each phase of an exercise (lowering, pausing, lifting, and pausing again), you take two seconds to complete the movement, essentially performing the entire repetition at a slow, controlled pace with equal time spent on each part">
              2 - 2 - 2 tempo
            </abbr>
          </p>
        </div>
        <div className="rule-item">
          <p>
            <b>Weight*</b>
          </p>
          <p>
            Select the maximum weight that allows you to complete the set with
            good form
          </p>
        </div>
      </ul>
      <small>
        * The first and second set should be at 75&#37; and 85&#37; respectively
        of your working weight used for the last two sets{' '}
      </small>
      <h3>The training plan</h3>
      <p>
        This training plan uses a structure known as the <abbr title="A bro split is a weightlifting training program that focuses on one muscle group per workout. The goal is to promote muscle growth by targeting each muscle group once a week. "><b>Bro Split</b></abbr>, and
        follows this rotation 👇  { ' '}
      </p>
      <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat </i></b></p>
      <p>Complete all of the workouts and track your progress along the way ✔  </p>
    </>
  );
}
