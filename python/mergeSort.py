# def mergeSort(alist):
#   print("Splitting ",alist)
#   if len(alist)>1:
#     mid = len(alist)//2
#     lefthalf = alist[:mid]
#     righthalf = alist[mid:]

#     mergeSort(lefthalf)
#     mergeSort(righthalf)

#     i=0
#     j=0
#     k=0
#     while i < len(lefthalf) and j < len(righthalf):
#       if lefthalf[i] < righthalf[j]:
#           alist[k]=lefthalf[i]
#           i=i+1
#       else:
#           alist[k]=righthalf[j]
#           j=j+1
#       k=k+1

#     while i < len(lefthalf):
#       alist[k]=lefthalf[i]
#       i=i+1
#       k=k+1

#     while j < len(righthalf):
#       alist[k]=righthalf[j]
#       j=j+1
#       k=k+1
#   print("Merging ",alist)

# alist = [54,26,93,17,77,31,44,55,20]
# mergeSort(alist)
# print(alist)


def mergeS(alist):
  if len(alist) > 1:
    mid = len(alist) // 2
    left = alist[:mid]
    right = alist[mid:]

    mergeS(left)
    mergeS(right)

    l = 0
    r = 0
    n = 0

    while l < len(left) and r < len(right):
      if left[l] < right[r]:
        alist[n] = left[l]
        l+=1
      else:
        alist[n] = right[r]
        r+=1
      n+=1

    while l < len(left):
      alist[n] = left[l]
      l+=1
      n+=1

    while r < len(right):
      alist[n] = right[r]
      r+=1
      n+=1

myl = [54,26,93,17,77,31,44,55,20]
mergeS(myl)
print(myl)