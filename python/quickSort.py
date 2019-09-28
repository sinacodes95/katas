def partition(alist, low, high):
  pivot = alist[low]

  i, j = low, high

  while(i < j):

    while(alist[i] <= pivot):
      i+=1

    while(alist[j] > pivot):
      j-=1

    if i < j:
      alist[i], alist[j] = alist[j], alist[i]

  alist[j], alist[low] = alist[low], alist[j]
  
  print(alist)
  return j

def quickSortHelper(alist, first, last):

  if first < last:
       p = partition(alist, first, last)

       quickSortHelper(alist, first, p - 1)
       quickSortHelper(alist, p + 1, last)

def quickSort(alist):
   quickSortHelper(alist, 0, len(alist) - 1)

alist = [54,26,93,17,77,31,44,55,20]
quickSort(alist)
# print(alist)

