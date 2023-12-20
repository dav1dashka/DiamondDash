import * as PIXI from "pixi.js";

export class LabelScore extends PIXI.Text {
    constructor(x = 10, y = 10, anchor = 0) {
        super();
        this.x = x;
        this.y = y;
        this.anchor.set(anchor);
        this.style = {
            fontFamily: "Verdana",
            fontWeight: "bold",
            fontSize: 44,
            fill: ["#FC9D3D"]
        };
        this.renderScore();
    }

    renderScore(score = 0) {
        this.text = `Score: ${score}`;
    }


}