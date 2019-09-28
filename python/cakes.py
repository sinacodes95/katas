# Pete likes to bake some cakes. He has some recipes and ingredients. 
# Unfortunately he is not good in maths. Can you help him to find out
# how many cakes he could bake considering his recipes?

# Write a function cakes(), which takes the recipe (object) and 
# the available ingredients (also an object) and 
# returns the maximum number of cakes Pete can bake (integer). 
# For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
# Ingredients that are not present in the objects, can be considered as 0.

# Examples:

# # must return 2
# print(cakes({'flour': 500, 'sugar': 200, 'eggs': 1}, {'flour': 1200, 'sugar': 1200, 'eggs': 5, 'milk': 200}))
# # must return 0
# cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})
# 3 should equal 0
#{'flour': 300, 'oil': 100, 'milk': 100, 'apples': 3, 'sugar': 150},{'flour': 2000, 'oil': 20, 'milk': 2000, 'apples': 15, 'sugar': 500}

def cakes(recipe, ing):
  arr = []
  for key in recipe:
    if key not in ing or ing[key] < recipe[key]: return 0
    a = ing[key] // recipe[key]
    if a > 0: arr.append(a)

  return min(arr)

print(cakes({'flour': 300, 'oil': 100, 'milk': 100, 'apples': 3, 'sugar': 150}, {'flour': 2000, 'oil': 20, 'milk': 2000, 'apples': 15, 'sugar': 500}))

def maxSequence(arr):
  d = {}
  max = 0
  for i in range(len(arr)):
    val = sum(arr[i:])
    d[val] = arr[i:]
    if val > max: max = val
  return d[max]