arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

stroke(255,0,0);
    strokeweight(7);
    line(0,0,100,0);