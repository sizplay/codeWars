def positive_sum(arr):
    # Your code here
    result = 0
    for val in arr:
        if (val > 0):
            result += val
    return result


def positive_sum(arr):
    return sum(x for x in arr if x > 0)
