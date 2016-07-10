import React from "react";
import Article from "../components/modules/Article";

export default class Featured extends React.Component {
    render() {
        const teaser = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.";
        const Articles = [
            "Some Article",
            "Another Article",
            "The Best Article",
            "Some Article",
            "Another Article",
            "The Best Article",
            "Some Article",
            "Another Article",
            "The Best Article",
            "Some Article",
            "Another Article",
            "The Best Article",
            "Some Article",
            "Another Article",
            "The Best Article",
            "An Even Better Article"
        ].map((title, i) => <Article key={i} title={title} teaser={teaser} />);

        /*const Articles = [
          <Article key="{1}" title={"Theeee Title"} />,
          <Article key="{2}" title={"Another Article"} />,
          <Article key="{3}" title={"The Best Article"} />,
          <Article key="{4}" title={"Some Title"} />,
          <Article key="{5}" title={"An Even Better Article"} />,
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
              <div class="row">{Articles}</div>
          </section>
        );
    }
}