import statistics
def find_missing(seq):
    if len(seq) == 3: return seq[1]
    arr = []
    
    for i in range(len(seq)-1):
        a = seq[i+1] - seq[i]
        arr.append(a)

    ap = statistics.mode(arr)

    for i in range(len(seq)-1):
        if (seq[i] + ap) != seq[i+1]: return seq[i] + ap
        
print(find_missing([1, 3, 4, 5, 6, 7, 8, 9]))