from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def add_number(request, number):
    result = number + number
    print(result)
    return HttpResponse(result)

def Erdős(n):
    step = len(n)
 
    for i in range(step): 
        # Condition from Erdős-Gallai theorem
        if n[i] >= len(n) or n[i] > 2 * (len(n) -1) or n[i] < 0 or n[i] % 2 != 0:
            return False
            break;
    else:
        return True

def Hakimi(sequence):
    
    sequence.sort()
    sequence.reverse()
    
    array, step, min_idx = [], sequence[0], len(sequence)
    
    if min_idx > 1 and Erdős(sequence) == True:
        
        for i in range(step):
            array.append(sequence[1:][i] - 1)
            
        if len(array) == 1:
            sequence[1] = array[0]
            print(sequence[1:])
  
            return Hakimi(sequence[1:])
        
        else: 
            sequence[1:len(array) + 1] = array
            print(sequence[1:])
            
            return Hakimi(sequence[1:])
        
    else: 
        
        return Erdős(sequence)

def hakimi_sequence(request, sequence):
    sequence_list = [int(num) for num in sequence.split(',')]
    result = Hakimi(sequence_list)
    return HttpResponse(result)