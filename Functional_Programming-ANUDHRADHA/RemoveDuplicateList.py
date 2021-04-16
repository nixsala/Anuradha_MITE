my_list = [1,1,2,3,4,5,5,6]
myFinallist = []
for i in my_list:
    if i not in myFinallist:
        myFinallist.append(i)
print("Display MY_list :")        
print(list(my_list))
print("Remove Duplicate and Print the newlist  :") 
print(list(myFinallist))
