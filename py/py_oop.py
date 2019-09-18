#Classes allow us to group our data and 
# functions in a way that's easy to reuse
#and also to build upon if needed.

#Method is just a function that is associated
#with a class. In this class, each individual
#employee is  going to have specific attributes
#and methods.

#The purpose of this class is to generalize
#each attribute and method per employee, so
#I create a blueprint per employee to avoid
#doing it manually each time.

class Employee:
# if you want to leave a class empty 
    #pass #to avoid error and skip it for now

    num_of_emp = 0
    raise_amount = 1.04 #class variable

    #constructor, it initializes the class 
    def __init__(self, first: str, last: str, pay: int):
        self.first = first #instances variables bc they use self
        self.last = last
        self.email = first + '.' + last + '@company.com'
        self.pay = pay

        Employee.num_of_emp += 1

    #string representations is eq to putting docstrings in functions
    def __str__(self):
        return 'Employee(first: {first}, last: {last}, pay: {pay})'.format(first=self.first, last=self.last, pay=self.pay)

    gpdef fullname(self): #mod a class method to pass my class as the arg
        return '{} {}'.format(self.first, self.last)

    #method within our class
    # def fullname(self):
    #     return '{} {}'.format(self.first, self.last)

    #class variables are shared variables among all
    #instances of a class

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)



emp_1 = Employee('Julie', 'Hutchinson', 50000)
emp_2 = Employee('Amanda', 'Menjura', 60000)

#emp_1.first = 'Julie'
#emp_1.last = 'Hutchinson'
#emp_1.email = 'julie.hutchinson@students.makeschool.com'
#emp_1.pay = 50000

#emp_2.first = 'Amanda'
#emp_2.last = 'Menjura'
#emp_2.email = 'aamcs17@hotmail.com'
#emp_2.pay = 60000

print(emp_1.email)
print(emp_2.email)

print(emp_2.fullname())
print(emp_2.pay)
emp_2.apply_raise()
print(emp_2.pay)

#print(emp_2.__dict__) #print namespace of emp_2.

print(emp_1)
print(emp_2)

print(Employee.num_of_emp)

