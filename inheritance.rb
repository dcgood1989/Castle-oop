class Person
  def speak
    "Little to say usually"
  end
end

class QuietPerson < Person
end

class LoquaciousPerson < Person
  def speak
    super() + " " +
    "Sometimes I have a lot to say, actually, no, all the time I have a lot to say."
  end
end

#In the overriding method, it calls the superclass method and concatenates the two statements together.



METHOD OVERRIDING
QuietPerson.new.speak; //"Little to say usually"
#Because it did not override the speak method defined in the superclass
Person.new.speak; //"Little to say usually"
LoquaciousPerson.new.speak; //"Sometimes I have a lot to say, actually, no, all the time I have a lot to say."
#Because the class of LoquaciousPerson overrides the method defined in the super class and redefined it thus overriding the original method for that class only.


class Sooper
  def say_hi(who_to)
    "Hello there #{who_to}!"
  end
end

class Sub < Sooper
  def say_hi(who_to)
    "#{super(who_to)} Fine day here, #{who_to}"
  end
end

Sooper.new.say_hi('foo')
Sub.new.say_hi('foo2')

#To call the Super method in the sub class when there is a method that takes an argument. You must pass the argument within the sub class call of the Super. 
