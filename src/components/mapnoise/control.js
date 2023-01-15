module.exports = (p5, context) => {
  console.log(context)
  let margin = 44;
  let density = 1 / 650;
  let nLines = 64;
  let s;
  let interLines;

  p5.setup = () => {
      p5.createCanvas(context.width, context.height);
      p5.colorMode(p5.HSB, 1);
      p5.noFill();
      p5.stroke(0);
      p5.strokeWeight(2.5);
      p5.strokeCap(p5.SQUARE);

      s = p5.width - 2 * margin;
      interLines = s / (nLines - 1);
  }

  p5.draw = () => {
      p5.background(0.15, 0.9, 1);

      p5.translate(margin, margin);
      for (let i = 0; i < nLines; i++) {
          let y = interLines * i;
          p5.beginShape();
          for (let x = 0; x < s; x++) {
              let offset = 0;
              let noize = p5.noise(x * density, y * density, p5.frameCount / 700);
              let factor = 0;
              if (p5.floor(noize * 50) % 2 === 0) {
                  factor = interLines / 3;
              }
              offset = p5.cos(x / 2 - p5.frameCount / 10) * factor;
              p5.curveVertex(x, y + offset);
          }
          p5.endShape();
      }
  }
}
