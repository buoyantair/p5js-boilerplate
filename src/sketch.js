import P5 from 'p5';

const sketch = (p5) => {
  const p = p5;

  p.setup = () => {

  }
  
  p.draw = ()  => {
    p.ellipse(50, 50, 50, 80);
  }
}


new P5(sketch);