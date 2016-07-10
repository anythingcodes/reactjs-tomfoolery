import React from "react";
import Task from "../components/modules/Task";

export default class Favorites extends React.Component {
    render() {
        
        const Tasks = [
            "Some Task",
            "Another Task",
            "The Best Task",
            "Some Task",
            "Another Task",
            "The Best Task",
            "Some Task",
            "Another Task",
            "The Best Task",
            "Some Task",
            "Another Task",
            "The Best Task",
            "Some Task",
            "Another Task",
            "The Best Task",
            "An Even Better Task"
        ].map((text, i) => <Task key={i} text={text} />);

        /*const Tasks = [
          <Task key="{1}" title={"Theeee Title"} />,
          <Task key="{2}" title={"Another Task"} />,
          <Task key="{3}" title={"The Best Task"} />,
          <Task key="{4}" title={"Some Title"} />,
          <Task key="{5}" title={"An Even Better Task"} />,
        ];*/

        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4",
            "Ad spot #5"
        ];

        const randomAd = adText[ Math.round(Math.random() * (adText.length-1) ) ];

        return (
          <section>
              <div class="row">
                  <div class="col-lg-12">
                    <div class="well text-center">
                        {randomAd}
                    </div>
                  </div>
              </div>
              <div class="row">{Tasks}</div>
          </section>
        );
    }
}