describe('add_zero', function() {
  it('should add a zero to any time element (H,M or S) that does is less than 10', function () {
    add_zero(3).should.equal('03')
  })
})

describe('minute_angler',function(){
  it('when 3:00:00, it should return 90 degrees',function(){
    minute_angler('030000').should.equal(90)
  });
  it('when 4:00:00, it should return 120 degrees',function(){
    minute_angler('040000').should.equal(120)
  });
  it('when 3:15:00, the hour should be 97.5 degrees',function(){
    minute_angler('031500').should.equal(7.5)
  });
  it('when 3:30:00, it should return 75 degrees',function(){
    minute_angler('033000').should.equal(75)
  });
  it('when 9:15, it should return 180 - 7.5 degrees', function() {
    minute_angler('091500').should.equal(172.5)
  })
});

describe('second_angler',function(){
  it('when 3:00:00, it should return 0 degrees',function(){
    second_angler('030000').should.equal(0)
  });
  it('when 4:15:00, it should return 90 degrees',function(){
    second_angler('041500').should.equal(90)
  });
  it('when 3:15:45, the degrees should be 180',function(){
    second_angler('031545').should.equal(180)
  });
});

