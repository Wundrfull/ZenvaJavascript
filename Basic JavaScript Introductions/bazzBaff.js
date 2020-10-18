function bizzBaff(stop) {
  for (i = 0; i <= stop; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i + ': Bizz Baff \n');
    } else if (i % 3 == 0) {
      console.log(i + ': Bizz \n');
    } else if (i % 5 == 0) {
      console.log(i + ': Baff \n');
    }
  }
}

bizzBaff(30);
