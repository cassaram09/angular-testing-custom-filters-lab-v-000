describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter out all vowels in a string', function(){
    var string = "Hello my name is Matt and I love pizza";
    var noVowels = $filter('removeAllVowels')(string);
    expect(noVowels.length).toEqual(string.length - 12);
    expect(noVowels).toEqual("Hll my nm s Mtt nd  lv pzz");
  });

});
