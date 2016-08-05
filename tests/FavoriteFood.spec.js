describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter out only favorite foods', function(){
    var foods = [{name: 'John', favoriteFood: "pizza"}, {name: 'Emily', favoriteFood: "ice cream"}, {name: 'Mike', favoriteFood: "donuts"} ];
    var filteredFoods = $filter('favoriteFood')(foods, 'pizza');
    expect(filteredFoods.length).toEqual(1);
    expect(filteredFoods).toEqual([{name: 'John', favoriteFood: "pizza"}]);
  });
});
