const loop = (int, a = 0, b = 1) => {
  if (int === 0) return;
  
  console.log(a);
  loop(int - 1, b, a + b);
};

loop(10);
