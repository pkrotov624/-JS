items.sort(function(a, b) {
    if (b.salary < a.salary) {
     	 	return -1;
    }
    if (b.salary > a.salary) {
      	return 1;
    }
    if (a.id < b.id) {
      	return -1;
    }
    if (a.id > b.id) {
      	return 1;
    }

    return 0;
});
