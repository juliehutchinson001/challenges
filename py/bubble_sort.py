def bubble_sort(arr):
	arr_length = len(arr) - 1
	for idx in range(0, arr_length):
		for x in range(0, arr_length-idx):
			temp = arr[x]
			if arr[x] > arr[x+1]:
				arr[x] = arr[x+1]
				arr[x+1] = temp
		
	return arr



print(bubble_sort([5, 3, 4, 9, 8, 6, 1]))